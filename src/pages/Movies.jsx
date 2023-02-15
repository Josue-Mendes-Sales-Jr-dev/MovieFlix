import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import {TbMessageLanguage} from "react-icons/tb"
import {BiMoviePlay} from "react-icons/bi"
import {MdTitle} from "react-icons/md"
import {SiPopos} from "react-icons/si"


import "./styles/movies.css";

const moviesURL = "https://api.themoviedb.org/3/movie/";
const apiKey = "fd4cda3dd3d11c4b894ce5b1788585cf"

const Movies = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState([]);


  const getMoviem = (Url) => {
    fetch(Url)
    .then(res=> res.json())
    .then(data => setMovie(data))
    .catch(error=> console.log("error:"+ error))
    console.log(movie)

  };

 
  useEffect(() => {
    const movieUrl =`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    getMoviem(movieUrl);
    
  }, []);
   
  return (
    <>
    <div className="boxMovie">
    <Link className="linkM" to="/">Voltar</Link>
    <div>
    <img className="imgM" src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`} alt="jj" />
    </div>
    <div className="moviesText">
       <h3><MdTitle/>Título: {movie.title}</h3>
       <h3><SiPopos/>Popuraridade: {movie.popularity}</h3>
       <h3><TbMessageLanguage/>Idioma: {movie.original_language}</h3>
       <h3><BiMoviePlay/>Data de estreia: {movie.release_date}</h3>
       <h3><BsFillFileEarmarkTextFill/>Descrição: </h3>
       <p>Resumo: {movie.overview}</p>
    </div>
    </div>
 </>
      
      
      )
}

export default Movies;