import React,{Component} from 'react';
import logo from './logo.svg';
import icn_person from './icn_person.svg';
import icn_search from './icn_search.svg';
import lock from './lock.svg';

import './App.css';

import {data} from './data';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class App extends Component {
  constructor(){
    super();
    this.state = {
    data
    }
  }

render() {
    const datos  = this.state.data.map((data,i) => {
      return (
        <div className='card'>
        {data.name}
        </div>
      )
    })

  return (
    <div className="App">
    <div className="row">
    <div className="bodyContainer col-md-12">

			<div className="row">
        <div className="header col-md-12">

          <div className="row headerBar">
            <div className="col-md-2">
            </div>

            <div className="centralBar col-md-8">
            <div className="headerBarLeft">
                <img src={logo} className="" alt="logo" />
            </div>
            <div className="headerBarRight">
                <img src={icn_person} className="" alt="logo" />
                <img src={icn_search} className="" alt="logo" />
						</div>
            </div>

            <div className="col-md-2">
            </div>
          </div>


					<div className="row">
            <div className="col-md-2">
            </div>
						<div className="col-md-8">
							<h1>
								Search Any Email Address
							</h1>
                <div className="startText">
              <span className="startHere">Start Here </span><span className="textStartHere"> - Look up the owner's name, photos and online profiles. See what you find</span>
                </div>

                <div>
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
								<button type="submit" className="btnsearch btn-primary" onClick= "">
									GO!
								</button>
                </div>

                <div className="textLock">
                <h6><img src={lock} className="imgLock" alt="logo" />   Enter Any Email Address.They won't be notified</h6>
                </div>

            </div>
            <div className="col-md-2">
            </div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="contenedor col-md-12">
					<div className="row">

            <div className="col-md-2">
            </div>

						<div className="col-md-8">
							<h2>
								Reverse Email Lookup
							</h2>
							<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
              </p>

						</div>

            <div className="col-md-2">
            </div>
					</div>

          <div className="row">

            <div className="col-md-2">
            </div>


            <div className="col-md-8">
            <div className="row">

            <div className="col-md-6">
              <div className="columnas">
                <div className="circleBase">
                  <span>1</span>
                </div>
                <div>
                  <h3>Lorem ipsum</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="columnas">
                <div className="circleBase">
                  <span>2</span>
                </div>
                <div>
                  <h3>Lorem ipsum</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="columnas">
                <div className="circleBase">
                  <span>3</span>
                </div>
                <div>
                  <h3>Lorem ipsum</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </div>

            </div>
            <div className="col-md-6">
            <div className="columnas">
              <div className="circleBase">
                <span>4</span>
              </div>
              <div>
                <h3>Lorem ipsum</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="columnas">
              <div className="circleBase">
                <span>5</span>
              </div>
              <div>
                <h3>Lorem ipsum</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="columnas">
              <div className="circleBase">
                <span>6</span>
              </div>
              <div>
                <h3>Lorem ipsum</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </div>
            </div>

            </div>

            </div>
            </div>

          <div className="col-md-2">
          </div>

          </div>
				</div>
			</div>

			<div className="row">
				<div className="footer col-md-12">
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
          </p>
          </div>
          <div className="col-md-2 TyP">
					<p>
						<a className="" href="">Terms</a> | <a className="" href="">Privacy</a>
					</p>
          </div>
          <div className="col-md-1">
          </div>
          </div>
				</div>
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
