import React from 'react'
import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    //API call...
  }


  render() {
    return (
      <div className="AboutUs">
        <h1>About Us</h1>
        <h2>This is Namaste React</h2>


        {/* Functional Component
        <User name={"Hrithik Shaw (function)"} location={"Kolkata (function)"} /> */}

        {/* Class-Based Component */}
        <UserClass name={"Hrithik Shaw (class)"} location={"Kolkata (class)"} />
      </div>
    );
  }
}

export default About;


/* 

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React</h2>

   ==>   Functional Component 
      <User name={"Hrithik Shaw (function)"} location={"Kolkata (function)"} />

   ==>   Class-Based Component 
      <UserClass name={"Hrithik Shaw (class)"} location={"Kolkata (class)"} />
    </div>
  )
}

*/


