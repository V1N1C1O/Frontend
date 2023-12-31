import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <marquee className="Marquee-Index"> Sistema de registro de materias <img className='Icon-Uv' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_de_la_Universidad_Veracruzana.svg/696px-Logo_de_la_Universidad_Veracruzana.svg.png'></img> </marquee>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowBlogs />} />
            <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
