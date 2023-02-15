import { useState } from "react"
import { Link } from "react-router-dom"
import {FcCamcorderPro} from "react-icons/fc"
import {FcSearch} from "react-icons/fc"
import './navbar.css'
import { useNavigate } from "react-router-dom"
  

const Navbar1=()=>{
  const[search,setSearch]=useState('')
  console.log(search)
  
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search)return 
    
    navigate(`/search?q=${search}`)
    setSearch("")
  }
  
    return(
      
      <div className="nav">
       <h1><Link to="/"><FcCamcorderPro/>MovieFLix</Link></h1>
       <form className="form" action="#" onSubmit={handleSubmit}>
         <input type="search"
         className="input"
         placeholder="Selecione um filme"
         value={search}
         onChange={(e)=>{setSearch(e.target.value)}}/>
          <button className="navBtn"><FcSearch/></button>
       </form>
      </div>
        )
}
export default Navbar1