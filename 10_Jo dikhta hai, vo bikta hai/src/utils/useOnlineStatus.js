import { useState, useEffect } from "react"


//First always think about the input and output of the custom hook we are trying to build


const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true)
  useEffect(() => {

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    })

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    })

  }, [])

  return onlineStatus;
}

export default useOnlineStatus;