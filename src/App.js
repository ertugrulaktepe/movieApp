import { useEffect, useState } from "react"
import Movie from "./Movie"
import "./style.css"

function App() {
  const API_KEY = "5227242edce84edeb076e008d734cbc1"
  const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
  
  const [movies, setMovies] = useState([])
  
  
  const getRequest = async ()=>{
    const response = await fetch(API)
    const data = await response.json()
   setMovies(data.results)
    
  }
  
  useEffect(()=>{
    getRequest()
  },[])

  return (
    <div className="movie-container">
      {movies.map((movie)=>(
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
  );
}

export default App;
