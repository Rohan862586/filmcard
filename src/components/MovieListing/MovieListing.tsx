import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";


const MovieListing = () => {
  const movies = useSelector((store: any) => store.movie.movies)

  console.log(movies);

  // movies && movies.map((aa:any,key:any)=> {console.log(aa)})

//   return (
//     <div className='movie-wrapper'>
//       <div className='movie-list'>
//         <h2>Movies</h2>
//           <div className='movie-container'>
//             {
//             props.data && props.data.map((data:any,key:any) => (
//               <MovieCard key={key} data={data} />
//             ))
//             }
//           </div>
//       </div>
//     </div>
//   )
// }


return (
  <div className='movie-wrapper'>
    <div className='movie-list'>
      <h2>Movies</h2>
        <div className='movie-container'>
          {
          movies.map((data:any,key:any) => (
            <MovieCard key={key} data={data} />
          ))
          }
        </div>
    </div>
  </div>
)
}

export default MovieListing