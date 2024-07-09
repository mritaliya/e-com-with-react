import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import SingleProduct from './components/SingleProduct';


function App() {
  

  return (
    <>
    
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} ></Route>
        <Route path='/about' exact Component={About}></Route>
        <Route path='/products/:id' exact Component={SingleProduct}></Route>


      </Routes>
     </Router>
    </>
  )
}

export default App
