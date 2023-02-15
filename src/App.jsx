import Navbar1 from "../src/components/Navbar1"
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
      <div className='App'>
        <Navbar1/>
        <Outlet/>
       </div>
  )
}

export default App
