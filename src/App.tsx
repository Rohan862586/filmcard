// import React from 'react';
// import './App.scss';
// import { Routes ,Route, BrowserRouter } from 'react-router-dom';
// import MovieDetail from './components/MovieDetail/MovieDetail';
// import Home from './Home/Home';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path= '/' element={Home} />
//           <Route path='/movie' element={MovieDetail} />
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;





import React from 'react';
import './App.scss';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
       <Header/>
          <div className='container'>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route element={PageNotFound}  />
          </Routes>
          </div>
       <Footer/>
     </BrowserRouter> 
    </div>
  );
}

export default App;