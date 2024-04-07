import React from 'react'
import ReactDOM from 'react-dom/client'


import React from 'react'

const App = () => {
  return (
    <div>
      Hi everyone
    </div>
  )
}

export default App



const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

root.render(<App />)
