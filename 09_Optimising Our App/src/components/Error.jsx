import { useRouteError } from "react-router-dom";

const Error = () => {

  //using hook provided by react-router-dom to get more clarity on the error
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error;