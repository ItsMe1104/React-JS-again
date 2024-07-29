import React from "react"

class UserClass extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="user-card">
      <h2>Name : Hrithik</h2>
      <h3>Location : Kolkata</h3>
      <h4>Contact @hey.its.me.hrithik</h4>
    </div >
  }
}

export default UserClass;