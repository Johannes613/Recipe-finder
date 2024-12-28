import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Details from './Pages/Details/Details';
import Favourites from './Pages/Favourites/Favourites';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path = '/' element = {<Home/>} ></Route>
            <Route path = '/favourites' element = {<Favourites/>} ></Route>
            <Route path = '/recipe-item/:id' element = {<Details/>} ></Route> 
          </Routes>
      </Router>











      {/* <Router>
          <Navbar/>

          <Routes>
            <Route path = '/' element = {<ComponentA/>}></Route>
            <Route path = '/about' element = {<About/>}></Route>
          </Routes>

      </Router> */}
        
      </div>
    
      
   
  );
}

export default App;
