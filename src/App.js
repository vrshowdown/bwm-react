import React, { Component } from 'react';
import { Header } from './shared/Header';
import logo from './logo.svg';
import './App.scss';
class App extends Component {
	  render() {
		 return (
			 <div className="App">
				<Header />
				I AM APP COMPONENT
			</div>
		);
	}
}
export default App;