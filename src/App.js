import './App.css';
import Header from './component/Header/Header';
import Error from './component/Erorr/Error';
// import Content from './component/Content/Content';
import {  Routes, Route } from "react-router-dom"
import DetailMovies from './component/DetailsMovie/DetailsMovie';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import  MovieType from './component/MovieType/MovieType';



const styleBody = {
  background: 'rgba(17,17,17)',
  width: '100%',
  heigh: '100%',
}

function App() {
  return (
    <div style={styleBody}>
        <Header /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="movie/:id" element={<DetailMovies />} />
          <Route path="movie/type/:type" element={<MovieType />} />
          <Route path="movie/type/:type/:pageList" element={<MovieType/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
