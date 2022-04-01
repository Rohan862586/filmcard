// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./Header.scss";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { searchVal } from "../../reducer/movies/movieSlice";
import "./Header.scss";
import { useSelector } from 'react-redux';
import { movies } from '../../reducer/movies/movieSlice'



const Header = () => {

  const dispatch = useDispatch()
  
  const [term , setTerm] = useState<any>();
  // const navigate = useNavigate();

  // const aaa = () => {
  //   navigate('/')
  // }
  const moviesVal = useSelector((store: any) => store.movie.movies)



  // searchLocationList(evt): void {
  //   if (!evt.target.value) {
  //     this.siteList = this.originalList;
  //   } else {
  //     const rows = this.siteList.filter((item) => {
  //       return item.name.toLowerCase().includes(evt.target.value.toLowerCase());
  //     });
  //     this.siteList = rows;
  //   }
  // }


  // const result = movies.filter(()=> {
  //   return 
  // })

  var rows =[]

  const submitHandler = (e:any) => {
    e.preventDefault();
    // dispatch(searchVal(term))
           rows = moviesVal.filter((val:any) => {
            return val.name === term
          });
          console.log('new array',rows);
          dispatch(movies(rows))
  }


  return (
    // <div className="header">
    //   <div>
    //    {/* <a><Link to="/">CLICK</Link></a> */}

    //     {/* <Link to="/" >
    //        <div className="logo">movie app</div>
    //     </Link> */}
    //   </div>
    //   <div className="user-image">
    //     <img src="images/img2.png" alt="user" />
    //   </div>
    // </div>

    <div>
    <div className="header">
      <div className="logo">
      <Link to="/movie">
        Movie App
      </Link>
      </div>
     
      {/* <button onClick={()=> {navigate('/movie')  }}>click</button> */}

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder='search movies or show' onChange={(e)=> setTerm(e.target.value)} />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>

      <div className="user-image">
      <img src="images/img4.jpg" alt="user" />
      </div>
    </div>
    </div>

  )
}

export default Header
