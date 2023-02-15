import './movieCard.css'
import { Link } from 'react-router-dom'

const MovieCard=({movie})=>{
    return(
        <>
        
            <div className="unid">
                <div className='title'>
                    <h2>{movie.title}</h2>
                </div>
                <div className='image'><img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} /></div>
                <div className='Btn'><button><Link to={`/movies/${movie.id}`}>detalhes</Link></button></div>
            </div>
     
        </>
    )
}
export default MovieCard