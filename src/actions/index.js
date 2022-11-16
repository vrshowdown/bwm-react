import { FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTAL_BY_ID_INIT, FETCH_RENTALS_SUCCESS} from './types';
import axios from 'axios';


const rentals =  [{
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
}];
const fetchRentalByIdInit = ()=>{
	return {
		type: FETCH_RENTAL_BY_ID_INIT,
	}
}
const fetchRentalByIdSuccess =(rental) =>{
	return { 
		type: FETCH_RENTAL_BY_ID_SUCCESS, 
		rental 
	}
}
const fetchRentalsSuccess = (rentals) =>{
	return{
		type: FETCH_RENTALS_SUCCESS,
		rentals
	}
}
export const fetchRentals = () => {
	return dispatch =>{
		axios.get('/api/v1/rentals')
			.then( res => res.data)
			.then( rentals =>  dispatch(fetchRentalsSuccess(rentals) )
		);
	}
}

export const fetchRentalById = (rentalId)=>{
	return function(dispatch){
		dispatch(fetchRentalByIdInit());
		axios.get(`/api/v1/rentals/${rentalId}`)
			.then( res => res.data )
			.then( rental => dispatch(fetchRentalByIdSuccess(rental) )
		);
	}
}
