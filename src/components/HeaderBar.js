import React, {Component} from 'react';
import logo from '../logo.svg';
import icn_person from '../icn_person.svg';
import icn_search from '../icn_search.svg';

class HeaderBar extends Component{

  render(){
    return(
      <div className="row headerBar">
        <div className="col-md-2">
        </div>

        <div className="centralBar col-md-8">
        <div className="headerBarLeft">
            <img src={logo} className="" alt="logo" />
        </div>
        <div className="headerBarRight">
            <img src={icn_search} className="" alt="logo" />
            <img src={icn_person} className="" alt="logo" />
        </div>
        </div>

        <div className="col-md-2">
        </div>
      </div>
    );
  }
}

export default HeaderBar;
