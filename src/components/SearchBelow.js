import React, {Component} from 'react';
import lock from '../lock.svg';
import {data} from '../data';

class SearchBelow extends Component{

  constructor(){
    super();
    this.state = {
    data
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateInput(event){
  this.setState({inputEmail : event.target.value})
  }

  handleSubmit(){

    }

  render(){
    return(
      <div className="row">
      <div className="col-md-2">
      </div>
      <div className="col-md-8 centralSearch">
        <h1>
          Can´t Find The Right Person?
        </h1>
          <div className="startText">
        <span className="startHere">Try Again  </span><span className="textStartHere"> - Make a new search</span>
          </div>

          <div>
          <input type="email" className="form-control" onChange={this.updateInput} placeholder="Email"/>
          <button type="submit" className="btnsearch btn-primary" onClick={this.handleSubmit}>
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
    );
  }
}

export default SearchBelow;
