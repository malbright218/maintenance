import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Machines.css';

class Machines extends Component {

  constructor() {
    super();

    this.state = {
      loginError: false,
      logIn: false

    };

  }

  componentDidMount() {
    //console.log(sessionStorage.length);
    if (sessionStorage.length === 0) {
      this.setState({
        loginError: false
      })
    } else {
      this.setState({
        loginError: true
      })
    }
  }



  render() {
    return(
  
    <div className="container">
      <h1>Company Machinery</h1>
    </div>

    )
  }
}


export default Machines;