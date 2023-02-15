import Navbar1 from "../components/Navbar1"
import { useState, useEffect } from "react"
import "./styles/home.css"
import MovieCard from "../components/MovieCard"

const api_base="https://api.themoviedb.org/3"
const apiKey="fd4cda3dd3d11c4b894ce5b1788585cf"

export default function Home(){
    
    const[topMovies, setTopMovies]=useState([])
    
    const getTopMovies= async(url)=>{
        fetch(url)
        .then(res=>(res.json()))
        .then(data=>setTopMovies(data.results))
        .catch(error=>(console.log("getTopMovies :"+error)))
    }
    
    useEffect(()=>{
        const url=`${api_base}/movie/top_rated?api_key=${apiKey}&language=pt-BR`
        getTopMovies(url)
    },[])

    console.log(topMovies)


    return(
        <div className="homeContainer">
       
        <div className="rowTop">
            { topMovies.length > 0 && topMovies.map((movie, index)=>(
                <div>                    
                    <MovieCard key={index} movie={movie}/>
                </div>
                ))
            }
        </div>
      
        </div>
      
    )
}