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
    <Navbar.Brand href="/"><FontAwesomeIcon icon={faCalculator} className='text-white' size='2x'/></Navbar.Brand>
    <Nav>
      <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faCalculator} className='text-white' size='ls'/> Calculator</Nav.Link>
      <Nav.Link as={Link} to="/currencyconverter"><FontAwesomeIcon icon={faCommentDollar} className='text-white' size='ls'/> CurrencyConverter</Nav.Link>
    </Nav>
    

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
