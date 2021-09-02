import React from 'react'

const Movie = ({title,poster_path,overview,vote_average}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w1280"
    return (
        <div>
           <img src={IMG_API+poster_path} alt={title} />
        </div>
    )
}

export default Movie
