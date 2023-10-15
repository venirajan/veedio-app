
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPages from './Pages/LandingPages';
import WatchHistory from './Pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
     <Routes>
      <Route path='/landingpages' element={<LandingPages/>}  />
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<WatchHistory/>}/>
     </Routes>
     <hr></hr>
     <Footer/>
     
    </div>
  );
}

export default App;
