import { useEffect, useState } from "react"
import Movie from "./Movie"
import "./style.css"

function App() {
  const API_KEY = "5227242edce84edeb076e008d734cbc1"
  const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`
  
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  
  const getRequest = async ()=>{
    const response = await fetch(API)
    const data = await response.json()
   setMovies(data.results)
    
  }
  
  useEffect(()=>{
    getRequest()
  },[])
  const handleOnSubmit = async (e)=>{
    e.preventDefault()
    const response = await fetch(SEARCH_API + searchTerm)
    const data = await response.json()
    setMovies(data.results)

  }
  const handleOnChange = (e)=>{
   setSearchTerm(e.target.value);
  
  }

  return (
   <>
   <header>
     <form onSubmit={handleOnSubmit}>
        <input 
        className="search" 
        type="search"
         placeholder="Search..." 
         onChange={handleOnChange}
         value={searchTerm}
         
         />
     </form>
      </header>
       <div className="movie-container">
      
      {movies.map((movie)=>(
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
   </>
  
  );
}

export default App;
