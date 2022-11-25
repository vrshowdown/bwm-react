import React from 'react';
import { MapWithGeocode } from 'components/map/GoogleMap';
export class RentalMap extends React.Component {
	render(){
		const location = this.props.location;
		return(
		<MapWithGeocode
			googleMapURL={process.env.REACT_APP_GOOGLE_MAP_API}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `360px` }} />}
			mapElement={<div style={{ height: `100%` }} />}
			location={location}
		/>
		)
	}
}