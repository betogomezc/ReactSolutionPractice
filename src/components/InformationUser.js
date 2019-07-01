import React, {Component} from 'react';
import icn_person from '../icn_person.svg';

class InformationUser extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      age:'',
      notes:'',
      phoneNumbers:'',
      relatives:''
    };
  }

  render(){
    return(
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
          {this.state.name}
          </div>

          </div>
        </div>

      <div className="col-md-2">
      </div>

      </div>
      </div>
    );
  }
}

export default InformationUser;
