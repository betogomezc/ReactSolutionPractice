import React, {Component} from 'react';
import lock from '../lock.svg';
import {data} from '../data';

class SearchAbove extends Component{

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

    data.map((dato,i)=>{
      if(dato.email==this.state.inputEmail){
      return(
        alert("yes")
      )}else {
      return(  alert("no"))
      }
    })
    }

  render(){
    return(
      <div className="row">
      <div className="col-md-2">
      </div>
      <div className="col-md-8 centralSearch">
        <h1>
          Search Any Email Address
        </h1>
          <div className="startText">
        <span className="startHere">Start Here </span><span className="textStartHere"> - Look up the owner's name, photos and online profiles. See what you find</span>
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

export default SearchAbove;
