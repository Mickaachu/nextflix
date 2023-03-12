import style from '@/styles/Banner.module.scss';
import { useEffect, useState } from 'react';
import axios from '@/models/axios';
import requests from '@/models/request';
import {BiPlay} from 'react-icons/bi'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import YouTube from 'react-youtube';
import { IconContext } from "react-icons";

const Banner = () => {
//Variables
    const [movie, setMovie] = useState([]);
    const [trailer, setTrailer] = useState("");

    const API_KEY = "269920b58d27ae83df31c16d48dc6041";
    
    const videoOptions = {
        
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          loop:1,
          playlist: trailer,
          showinfo: 0,
          mute: 1,
          
        }
      };

//API CALL
    useEffect(() => {
        async function fetchData() {
            //get the movie 
            const request = await axios.get(requests.fetchTopRatedMovies);
            const final = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
            
            //Get the trailer
            
            
            if(final){
              
               const requesTrailer = await axios.get(`/movie/${final.id}/videos?api_key=${API_KEY}&language=en-US`)
                if(trailer) {
                    setTrailer('')
                }else {
                    for(let vid of requesTrailer.data.results) {
                        if(vid.type === 'Trailer') {
                            setTrailer(vid.key);
                        }
                    }
                }
            }    
            setMovie(final)       
        }
       
        fetchData();
        
    },[])
    console.log(trailer);
    
    
    //Desciption 
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  
    return(
        <div className={style.container} >
            <YouTube videoId={trailer} opts={videoOptions} iframeClassName={style.iframe}/>
            <div className={style.overlay}></div>
            <div className={style.content}>
                <h1>{movie?.title}</h1>
                <p>{truncate(movie?.overview, 200)}</p>
                 
                    <div className={style.buttons}>
                        <button className={style.playbutton}><BiPlay  style={{fill: 'black'}} size={30}/>Play</button>
                        <button className={style.moreinfo}><AiOutlineInfoCircle style={{fill: 'white'}} size={30}/> More Info</button>
                    </div>
                
            </div>
            <div className={style.BannerFade}></div>
        </div>
    )
}
export default Banner