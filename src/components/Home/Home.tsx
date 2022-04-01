import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useContactsQuery } from '../../api/api'
import { useDispatch } from "react-redux"
import { movies } from '../../reducer/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()

  const {data, error, isLoading, isSuccess} = useContactsQuery();

   console.log('original',data)

  dispatch(movies(data))

  return (
    <div>
       {isLoading && <h2>.......Loading</h2>}
            {error && <h2>something went wrong</h2>}
            {isSuccess && (
              <div>
              <div className='banner-img'></div>
              <MovieListing />
              </div>
            )}
    </div>
 
  )
}

export default Home