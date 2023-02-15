import { Link, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import "./styles/search.css"

const api_baseSearch="https://api.themoviedb.org/3/search/movie"
const apiKey="fd4cda3dd3d11c4b894ce5b1788585cf"

const Search=()=>{
  
const [searchParams]=useSearchParams()
const [movies,setMovies]=useState([])
const query=searchParams.get("q")

const getMovies= async(urlSearch)=>{
  fetch(urlSearch)
  .then(res=>(res.json()))
  .then(data=>setMovies(data.results))
  .catch(error=>(console.log("get Movies :"+error)))
}

useEffect(()=>{
  const urlSearch=`${api_baseSearch}?api_key=${apiKey}&query=${query}`
  getMovies(urlSearch)
},[query])



    return(
        <>
        <div className="searchBox">
          <Link className="link" to="/">Voltar</Link>
          <h1 className="title">Resultados para:<span>{query}</span></h1>
          {movies.length === 0 && <p>Carregando...</p> }
          
          <div className="Card">
            {movies.length>0 && movies.map((movie, index)=>(
              <MovieCard key={index}  movie={movie}/>
            ))}
          </div>
        </div>
     </>
    )
}
export default Search