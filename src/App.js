import React, { Component } from 'react';
import  { RentalList } from './components/rental/RentalList';
import { Header } from './shared/Header';
import logo from './logo.svg';
import './App.scss';
class App extends Component {
	  render() {

		 return (
		<div className="App">
			<Header />
			<div className='container'>
				<RentalList/>
			</div>
		</div>
		);
	}
}
export default App;