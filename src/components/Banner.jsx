import style from '@/styles/Banner.module.scss';
import { useEffect, useState } from 'react';
import axios from '@/models/axios';
import requests from '@/models/request';
const Banner = () => {
    //API CALL
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPopularMovies);
            const random = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[random]);
   

        }
        fetchData();
      
        
    },[])
    console.log(movie);
    return(
        <div className={style.container} style={{backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: 'center center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className={style.overlay}></div>
            <div className={style.content}>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi accusantium amet nam placeat necessitatibus delectus omnis nemo, molestiae nesciunt.</p>
            </div>
            <div className={style.BannerFade}></div>
        </div>
    )
}
export default Banner