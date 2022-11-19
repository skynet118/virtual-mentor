import { useState } from 'react'
import logo from "./assets/logo.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div>
            <h1>Proyecto "Virtual Mentor"</h1>
            <img src={logo}  alt="" />
        </div>
    </div>
  )
}

export default App
