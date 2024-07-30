import React from "react"

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
      count3: 3
    }
  }

  render() {

    const { count1, count2 } = this.state;

    return <div className="user-card">
      <button onClick={() => {
        this.setState({
          count1: count1 + 1,
          count2: count2 + 1
        })
      }}>Increment Count1, Count2</button>

      <h1>Count1 = {count1}</h1>
      <h1>Count2 = {count2}</h1>
      <h1>Count3 = {this.state.count3}</h1>
      <h2>{this.props.name}</h2>
      <h3>{this.props.location}</h3>
      <h4>Contact @hey.its.me.hrithik</h4>
    </div >
  }
}

export default UserClass;