import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
        <div className="footer text-center" style={{backgroundColor:"black" , color : "white" ,padding:"10px    "}}>
            <p> Copyright ©2022 | All rights reserved  </p>
            <p> NewZ by Salman</p>
        </div>
    )
  }
}

export default Footer;