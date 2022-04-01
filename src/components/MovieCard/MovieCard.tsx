import React from 'react';
import "./MovieCard.scss";
import { Link } from 'react-router-dom';
import { useContactQuery } from '../../api/api';
import { useDispatch } from 'react-redux';
import { val } from '../../reducer/movies/movieSlice';


const MovieCard = (props:any) => {
  
  const dispatch = useDispatch();


  // dispatch(val())

  const {data} = props;
  return (
    <div className='card-item'>
      {/* <Link to={`/movie/${data.id}`} onClick={(data) => {console.log(data)}} > */}
      {/* <Link to={`/movie/${data.id}`} onClick={dispatch(val())}> */}

      <Link to={`/movie/${data.id}`} >
        <a onClick={()=>{dispatch(val(data))}}>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.img} alt={data.Title} />
        </div>
        <div className='card-buttom'>
          <div className='card-info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
            {/* {console.log('====>',data)} */}
          </div>
        </div>
      </div>
      </a>
      </Link>
    </div>
  )
}

export default MovieCard