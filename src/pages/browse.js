import Banner from "@/components/Banner";
import MoviePopup from "@/components/MoviePopup";
import Row from "@/components/Row";
import requests from "@/models/request";
const Browse = () => {
    return(
        <div>
            <Banner/>
            <Row title='Trending Now' fetchURL={requests.fetchTrending} />
            
            <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} />
            <Row title='Comedy' fetchURL={requests.fetchComedyMovies} />
            <Row title='Finding Love?' fetchURL={requests.fetchRomanceMovies} />
            <Row title='Horror' fetchURL={requests.fetchHorrorMovies} />
            <Row title='All time favorite' fetchURL={requests.fetchTopRatedMovies} />
            
            
            
            
        </div>
    )

}
export default Browse;