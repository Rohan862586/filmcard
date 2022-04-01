import React from 'react';
import { useSelector } from 'react-redux';
import './MovieDetail.scss';

const MovieDetail = () => {

  const val = useSelector((store: any) => store.movie.val)

  console.log('====>val====>', val.img)
 
  return (
    <div className='movie-section'>
      {
      // Object.keys(val).length === 0 ?
      (val.length === 0) ?
      (<div> .......Loading </div>)
       : ( 
      <>
      <div className='section-left'>
        <div className='movie-title'>{val.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <i className='fa fa-start'></i> : 5 star
          </span>
          <span>
            IMDB Votes <i className='fa fa-thumb-up'></i> : ok
          </span>
          <span>
            Runtime <i className='fa fa-film'></i> : 3 hours
          </span>
          <span>
            Year <i className='fa fa-calendar'></i> : {val.Year}
          </span>
        </div>
        <div className='movie-plot'>This is new movie which is good and language is english best movie This is new movie which is good and .....</div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{val.Director}</span>
          </div>
          <div>
            <span>Star</span>
            <span>{val.Star}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{val.Star}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{val.Languages}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>Flimfare Award</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <img src={`/${val.img}`} alt={val.Title} />
        {console.log(val.img)}
      </div>
      </>
      ) }
    </div>
  )
}

export default MovieDetail