import React,{Component} from 'react';
import logo from './logo.svg';
import icn_person from './icn_person.svg';
import icn_search from './icn_search.svg';
import lock from './lock.svg';

import './App.css';

import {data} from './data';
import InformationUser from'./components/InformationUser';
import FooterBar from './components/FooterBar';
import HeaderBar from './components/HeaderBar';
import SearchAbove from './components/SearchAbove';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class App extends Component {



render() {

  /*
    const datos  = this.state.data.map((data,i) => {
      return (
        <div className='card'>
        {data.name}
        </div>
      )
    })*/

  return (
    <div className="App">
    <div className="row">
    <div className="bodyContainer col-md-12">


			<div className="row">
        <div className="header col-md-12">
          <HeaderBar/>
          <SearchAbove/>
				</div>
			</div>

			<div className="row">
				<FooterBar/>
			</div>
		</div>
	</div>


    </div>
  );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


  );
}*/

export default App;
