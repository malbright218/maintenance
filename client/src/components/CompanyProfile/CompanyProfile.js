import React, { Component } from "react";
import "./CompanyProfile.css";
import axios from 'axios';

class CompanyProfile extends Component {

  handleUserLogout = event => {
    event.preventDefault()
    window.location.replace("/")
    console.log("log me out")
    sessionStorage.clear()
    sessionStorage.setItem("logout", "hidden")
    sessionStorage.setItem("signin", "")
    sessionStorage.setItem("signup", "")
    sessionStorage.setItem("list", "hidden")

  }

  componentDidMount = event => {
    axios.get('/auth/users').then(response => {
      console.log(response.data)        
    })
  }

  
  render() {

         
    return (
      <div >
        <h3></h3>
        <h5></h5>
      </div>
    )
  }
}

export default CompanyProfile;