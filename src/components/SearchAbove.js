import React, {Component} from 'react';
import lock from '../lock.svg';
import icn_person from '../icn_person.svg';
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
    var boolfound=0;
    var name,address,age,notes,phoneNumbers="";
    var relatives= "";

    for(var i=0; i<data.length; i++){
      if(data[i].email==this.state.inputEmail){
      name=data[i].name;
      address= data[i].address;
      age= data[i].age;
      notes= data[i].notes;
        for(var p=0;p<data[i].phoneNumbers.length;p++){
          if(data[i].phoneNumbers[p].phone)
          phoneNumbers= phoneNumbers+data[i].phoneNumbers[p].phone ;
        }
        for(var r=0;r<data[i].relatives.length;r++){
          if(data[i].relatives[r].name)
          relatives= relatives+ data[i].relatives[r].name;
        }
      }
    }
      alert(phoneNumbers+relatives)
  }

/*    data.map((dato,i)=>{
      if(dato.email==this.state.inputEmail){
      return(
        alert("yes")
      )}else {
      return(  alert("no"))
      }
    })*/
/*
    var divDatos = {
    <div className="contenedor col-md-12">
      <div className="row">
      <div className="col-md-2">
      </div>

      <div className="col-md-8 centralContent">
        <h2>
          Result
        </h2>
        <p>
        Look at the result below to see the details of the person you're searched for</p>
      </div>

      <div className="col-md-2">
      </div>
    </div>

      <div className="row">

        <div className="col-md-2">
        </div>


        <div className="col-md-8">
        <div className="row">

        <div className="col-md-1">
        <img src={icn_person} className="" alt="logo" />
        </div>

        <div className="col-md-5">
        </div>

        </div>
      </div>

    <div className="col-md-2">
    </div>

    </div>
    </div>
  }*/

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
