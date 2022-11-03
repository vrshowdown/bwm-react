import React from 'react';
import {RentalCard} from './RentalCard';
export  class RentalList extends React.Component {
	constructor(){
		super();
		this.state = {
			rentals: [{
			    id: 1,
			    title: "Central Apartment",
			    city: "New York",
			    street: "Times Sqaure",
			    category: "apartment",
			    image: "https://via.placeholder.com/350x250",
			    bedrooms: 3,
			    description: "Very nice apartment",
			    dailyRate: 34,
			    shared: false,
			    createdAt: "24/12/2017"
			  },
			  {
			    id: 2,
			    title: "Central Apartment 2",
			    city: "San Francisco",
			    street: "Main street",
			    category: "condo",
			    image: "https://via.placeholder.com/350x250",
			    bedrooms: 2,
			    description: "Very nice apartment",
			    dailyRate: 12,
			    shared: true,
			    createdAt: "24/12/2017"
			  },
			  {
			    id: 3,
			    title: "Central Apartment 3",
			    city: "Bratislava",
			    street: "Hlavna",
			    category: "condo",
			    image: "https://via.placeholder.com/350x250",
			    bedrooms: 2,
			    description: "Very nice apartment",
			    dailyRate: 334,
			    shared: true,
			    createdAt: "24/12/2017"
			  },
			  {
			    id: 4,
			    title: "Central Apartment 4",
			    city: "Berlin",
			    street: "Haupt strasse",
			    category: "house",
			    image: "https://via.placeholder.com/350x250",
			    bedrooms: 9,
			    description: "Very nice apartment",
			    dailyRate: 33,
			    shared: true,
			    createdAt: "24/12/2017"
			}]
		}
	}
	renderRentals(){
		return this.state.rentals.map((rental, index)=>{
			return (<RentalCard key={index}
								colNum ='col-md-3 col-xs-6' 
								rental={rental}
					/>
			);
		});
	}
	render(){
		return(
			<section id='rentalListing'>
				<h1 className='page-title'>Your Home All Around the World</h1>
				<div className='row'>
					{this.renderRentals()}
				</div>
			</section>
		);
	}
}