import YouTube from "react-youtube";

const MoviePopup = ({youtubeID}) => {
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    return(
        <YouTube opts={opts} videoId={youtubeID}/>
    )
}
export default MoviePopup;