import axios from '@/models/axios';
import requests from '@/models/request';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '@/styles/Row.module.scss';
import AliceCarousel from 'react-alice-carousel';
import MoviePopup from './MoviePopup';
import movieTrailer from 'movie-trailer';

const  Row = ({title,fetchURL,}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    const innitUrl = "https://image.tmdb.org/t/p/original/";
    const handleDragStart = (e) => e.preventDefault();
   
    const API_KEY = "269920b58d27ae83df31c16d48dc6041";
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    const responsive = {
        0: { items: 1 },
        468: { items: 3 },
        1024: { 
            items: 7,
            
        },
    };

    const trailerClick = (movie) => {
            if(trailerUrl){
                setTrailerUrl("")
            }else {
                movieTrailer(movie.original_title,{id: true}).then(res => setTrailerUrl(res))
            }
    } 
    return(
        <div className={style.row}>
            <h2>{title}</h2>
            
            <div>
         
            <AliceCarousel autoHeight responsive={responsive} disableButtonsControls mouseTracking  disableDotsControls paddingLeft={10} paddingRight={10}>
                {movies.map(movie => ((movie.poster_path)) && (
                        <Image onClick={() => trailerClick(movie)} src={`${innitUrl}${movie.poster_path}`}  className={style.poster} onDragStart={handleDragStart} alt={`${movie.title}`} key={movie.id} height={260} width={200}/>))
                }
            </AliceCarousel>
            
            {trailerUrl && <MoviePopup youtubeID={trailerUrl}/>}
                
          
                
            </div>
        </div>
    )
}
export default Row;