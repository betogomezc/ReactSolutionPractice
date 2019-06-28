import React,{Component} from 'react';
import logo from './logo.svg';
import icn_person from './icn_person.svg';
import icn_search from './icn_search.svg';
import lock from './lock.svg';

import './App.css';

import {data} from './data';

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

          <div className="row">
            <div className="col-md-2">
            </div>

            <div className="headerBar col-md-8">
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
							<form role="form">
								<div className="form-group">

									<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
								</div>
								<button type="submit" className="btnsearch btn-primary">
									GO!
								</button>
							</form>
                <img src={lock} className="" alt="logo" />
                <h4>Enter Any Email Address.They won't be notified</h4>

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
            <div className="col-md-4">
            <div>
            <h3>Lorem Ipsun</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </div>
            <div>
            <h3>Lorem Ipsun</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </div>
            <div>
            <h3>Lorem Ipsun</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </div>
            </div>

						<div className="col-md-4">
            <div>
            <h3>Lorem Ipsun</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </div>
            <div>
            <h3>Lorem Ipsun</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            </div>
            <div>
            <h3>Lorem Ipsun</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
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
          <div className="col-md-2">
					<p>
						<a className="" href="#">Terms</a>|
            <a className="" href="#">Privacy</a>
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
