import React from "react"

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
      count3: 3,
      userInfo: {
        avatar_url: null,
        login: "Dummy",
        followers: "Default",
        following: "Default"
      }

    }
  }


  async componentDidMount() {
    //API call...

    const data = await fetch("https://api.github.com/users/ItsMe1104");
    const json = await data.json()

    console.log(json);

    this.setState({
      userInfo: json
    })

  }

  render() {

    const { count1, count2, userInfo } = this.state;

    const { avatar_url, login, followers, following } = userInfo;

    return <div className="user-card">


      {/* <button onClick={() => {
        this.setState({
          count1: count1 + 1,
          count2: count2 + 1
        })
      }}>Increment Count1, Count2</button>

      <h1>Count1 = {count1}</h1>
      <h1>Count2 = {count2}</h1>
      <h1>Count3 = {this.state.count3}</h1> */}

      <img src={avatar_url} alt="" />
      <h2>{login}</h2>
      <h3>Followers : {followers}</h3>
      <h3>Following : {following}</h3>
      <h4>Contact @hey.its.me.hrithik</h4>
    </div >
  }
}

export default UserClass;