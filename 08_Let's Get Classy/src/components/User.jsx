import { useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);

  return <div className="user-card">
    <h1>Count1 = {count1}</h1>
    <h1>Count2 = {count2}</h1>
    <h1>Count3 = {count3}</h1>
    <h2>{name}</h2>
    <h3>{location}</h3>
    <h4>Contact @hey.its.me.hrithik</h4>
  </div>
}


export default User;