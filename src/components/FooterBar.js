import React, {Component} from 'react';

class FooterBar extends Component{

  render(){
    return(
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
    );
  }
}

export default FooterBar;
