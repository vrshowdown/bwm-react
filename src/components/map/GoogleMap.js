import React from 'react';
import { Cacher } from 'services/cacher';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle, InfoWindow
} from "react-google-maps";
function MapComponent(props) {
	const {coordinates, isError, isLocationLoaded} = props;
	return (
		<GoogleMap
		 defaultZoom={13}
		 defaultCenter={ coordinates}
		center={coordinates}
		options={{disableDefaultUI: isError ? true : false}}
		>
			{ isLocationLoaded && !isError && <Circle
			center={coordinates}
			radius={500}
			position={coordinates} 
			options={{fillColor:"#F44336", strokeWeight: 0,fillOpacity: 0.5}}/> }
			
			{ isLocationLoaded && isError && <InfoWindow position={coordinates} options={{maxWidth:300}}>
				<div>Ooops! There is a problem finding the location on the map.</div>
			</InfoWindow> }
		</GoogleMap>
	)
}
function withGeoCode(WrappedComponent){
	return class extends React.Component {
		constructor(){
			super();
			this.cacher = new Cacher();
			this.state = {
				coordinates: {
					lat: 0,
					lng: 0
				},
				isError: false,
				isLocationLoaded: false
			}
		}
	
	componentWillMount(){
		this.getGeocodedLocation();
	}
	updateCoordinates(coordinates){
		this.setState({
			coordinates,
			isLocationLoaded: true
		});
	}
	geocodeLocation(location){
		// location = 'tyruytri768657658676';
		const geocoder = new window.google.maps.Geocoder();
		return new Promise((resolve, reject)=>{
			geocoder.geocode({address: location}, (result, status)=>{
				if(status == 'OK'){
					const geometry = result[0].geometry.location;
					const coordinates = { lat: geometry.lat(), lng: geometry.lng()};
					this.cacher.cacheValue(location, coordinates);
					resolve(coordinates);
				}else{
					reject('ERROR!!!');
				}
			});
		});
	}
	getGeocodedLocation(){
			const location = this.props.location;
		
			if(this.cacher.isValueCached(location)) {
			//console.log('Values are already cached, using saved coordinates');
				this.updateCoordinates(this.cacher.getCachedValue(location));
			
			}else{
			// console.log('values are not cached, getting values from Google api');
				this.geocodeLocation(location).then(
					(coordinates)=>{
						this.updateCoordinates(coordinates);
					},
					(error)=>{
						this.setState({isError: true, isLocationLoaded: true});
					}
				);
			}
		}
		render(){
			return (
				<WrappedComponent {...this.state}/>
			)
		}
	}
}
export const MapWithGeocode= withScriptjs(withGoogleMap(withGeoCode(MapComponent)));