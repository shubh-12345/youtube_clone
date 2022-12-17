import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   
      <HashRouter>
      <Routes>
        <Route  path="/" element={<Navbar key='trending' category='trending'/>}/>
          <Route  index element={<Navbar key='trending' category='trending' />} />
          <Route  path='cricket' element={<Navbar key='cricket' category='cricket'/>} />
          <Route  path='music' element={<Navbar key='music' category='music'/>} />
          <Route  path='physics' element={<Navbar key= 'physics' category='physics'/>} />
          <Route  path='computerhardware'element={<Navbar key= 'computerhardware'category='computer%20hardware'/>} />
          <Route  path='adventure'element={<Navbar key='adventure' category='adventure'/>} />
          <Route  path='football'element={<Navbar key='football' category='football'/>} />
          <Route  path='machines'element={<Navbar key='machines' category='machines'/>} />
          <Route  path='drawing'element={<Navbar key='drawing' category='drawing'/>} />
          <Route  path='comedy'element={<Navbar key='comedy' category='comedy'/>} />
          <Route  path='movies'element={<Navbar key='movies' category='movies'/>} />
          
          
      
      </Routes>
    </HashRouter>
      
    </>
  );
}

export default App;
