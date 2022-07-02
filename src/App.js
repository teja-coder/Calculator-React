// import NavBar from "./components/Navbar/NavBar";
import { NavLink } from 'react-router-dom'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator'
import CurrencyConverter from './components/CurrencyConverter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalculator, faCommentDollar } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <BrowserRouter>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <h1 className='display-5 me-5'>
          <Link className="navbar-brand text-white me-5" to="/ ">  
          <FontAwesomeIcon icon={faCalculator} className='text-white' size='2x'/ >
          </Link>
      </h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between mx-auto" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 ">
              <li className="nav-item active me-5">
                <Link className="nav-link active" to="/">
                <FontAwesomeIcon icon={faCalculator} className='text-white' size='ls'/>  Calculator</Link>
              </li>
              <li className="nav-item active ">
                <Link className="nav-link active" to="/currencyconverter">
                <FontAwesomeIcon icon={faCommentDollar} className='text-white' size='ls'/>  CurrencyConverter</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>

     <Routes>
       <Route path="/" element={<Calculator/>}></Route>
       <Route path="/currencyconverter" element={<CurrencyConverter/>}></Route>
     </Routes>
     </BrowserRouter>
     </Container>
     </Navbar>
     </div>   
  );
}

export default App;
