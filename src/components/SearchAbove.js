import React, {Component} from 'react';
import lock from '../lock.svg';
import icn_person from '../icn_person.svg';
import {data} from '../data';
import InformationUser from'./InformationUser';
import ListNumbers from './ListNumbers';

class SearchAbove extends Component{

  constructor(props){
    super(props);
    this.state = {
    data,
    wrong: false,
    visible: true,
    name: '',
    email: '',
    address: '',
    age:'',
    notes:'',
    phoneNumbers:'',
    relatives:''
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateInput(event){
  this.setState({inputEmail : event.target.value})
  }

  handleSubmit(){

    var boolfound=0;
    var name,address,age,notes,email="";
    var relatives= "";
    var phoneNumbers="";

    for(var i=0; i<data.length; i++){
      if(data[i].email==this.state.inputEmail){
      boolfound=1;

      name= data[i].name;
      email= data[i].email;
      address= data[i].address;
      age= data[i].age;
      notes= data[i].notes;
      this.setState({ name: name });
      this.setState({ email: email });
      this.setState({ address: address });
      this.setState({ age: age });
      this.setState({ notes: notes });

        for(var p=0;p<data[i].phoneNumbers.length;p++){
          if(data[i].phoneNumbers[p].phone){
          phoneNumbers= phoneNumbers+data[i].phoneNumbers[p].phone ;
          this.setState({ phoneNumbers: phoneNumbers });
          }
        }
        for(var r=0;r<data[i].relatives.length;r++){
          if(data[i].relatives[r].name){
          relatives= relatives+ data[i].relatives[r].name;
          this.setState({ relatives: relatives });
          }
        }
      }
    }
    if(boolfound==0){
      this.setState({ wrong: true,});
    }else{
      this.setState({ visible: false,})
      this.setState({ wrong: false,});
    }

    }


/*    data.map((dato,i)=>{
      if(dato.email==this.state.inputEmail){
      return(
        alert("yes")
      )}else {
      return(  alert("no"))
      }
    })*/



  render(){

    return(
      <div>

      {/*InformationUser*/}
      <div className={(this.state.visible ? 'hide':'row visible')}>
      <div className="contenedor col-md-12">
        <div className="row">
      <div className="col-md-2">
      </div>

      <div className="col-md-8 centralContent textResult">
        <h2>
          Result
        </h2>
        <p>
        Look at the result below to see the details of the person you're searched for
        </p>
      </div>

      <div className="col-md-2">
      </div>
      </div>

      <div className="row">
    <div className="col-md-2">
    </div>

    <div className="col-md-8 centralContent userInformation">
    <div className="row">

    <div className="col-md-2 iconPersonUser">
     <img src={icn_person} className="" alt="logo" />
    </div>

    <div className="col-md-10">
    <h4>{this.state.name},{this.state.age}</h4>
    <p>{this.state.notes}</p>
    </div>

    </div>
    <div className="row">
    <div className="col-md-2">
    </div>

    <div className="col-md-5">
    <h5>Address</h5>
    <p>{this.state.address}</p>
    <h5>Email</h5>
    <p>{this.state.email}</p>
    </div>

    <div className="col-md-5">
    <h5>Phone Numbers</h5>
    <p>{this.state.phoneNumbers}</p>
    <h5>Relatives</h5>
    <p>{this.state.relatives}</p>
    </div>

    </div>
    </div>

    <div className="col-md-2">
    </div>
    </div>

      </div>
      </div>
      {/**InformationUser/}

      {/* SearchAbove*/}
      <div className={(this.state.visible ? 'row visible searchContainer':'hide')}>
      <div className="col-md-2">
      </div>
      <div className="col-md-8 centralSearch">
        <h1>
          Search Any Email Address
        </h1>
          <div className="startText">
        <span className="startHere">Start Here </span><span className="textStartHere"> - Look up the owner's name, photos and online profiles. See what you find</span>
          </div>

          <div className="row">
            <div className="col-md-10">
              <input type="email" className={(this.state.wrong ? 'form-control emailInput error' : 'form-control emailInput false')} onChange={this.updateInput} placeholder="Email"/>
              <small className={(this.state.wrong ? 'showErrorMsg':'hideErrorMsg')}> Please add a valid email address</small>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btnsearch btn-primary" onClick={this.handleSubmit}>
                GO!
              </button>
            </div>
          </div>

          <div className="textLock">
          <h6><img src={lock} className="imgLock" alt="logo" />   Enter Any Email Address.They won't be notified</h6>
          </div>

      </div>
      <div className="col-md-2">
      </div>
      </div>
      {/* SearchAbove*/}

      <div className={(this.state.visible ? 'row visible':'hide')}>
      <ListNumbers/>
			</div>

      {/*SearchBelow*/}
      <div className={(this.state.visible ? 'hide':'row visible searchContainerAfter')}>

      <div className="header col-md-12">
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

          <div className="row">
            <div className="col-md-10">
              <input type="email" className={(this.state.wrong ? 'form-control emailInput error' : 'form-control emailInput false')} onChange={this.updateInput} placeholder="Email"/>
              <small className={(this.state.wrong ? 'showErrorMsg':'hideErrorMsg')}> Please add a valid email address</small>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btnsearch btn-primary" onClick={this.handleSubmit}>
                GO!
              </button>
            </div>
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
      {/*SearchBelow*/}

      </div>
    );
  }
}

export default SearchAbove;
