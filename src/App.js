// import NavBar from "./components/Navbar/NavBar";
import { NavLink } from 'react-router-dom'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator'
// import About from './components/About'
import CurrencyConverter from './components/CurrencyConverter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <BrowserRouter>
    
    <Navbar.Brand href="#home">Calculator</Navbar.Brand>
    <Nav className="me-right navbar navbar-expand-lg navbar-dark bg-dark">
      <Nav.Link as={Link} to="/">Calculator</Nav.Link>
      <Nav.Link as={Link} to="/currencyconverter">Currency Converter</Nav.Link>
      {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
    </Nav>

     <Routes>
       <Route path="/" element={<Calculator/>}></Route>
       <Route path="/currencyconverter" element={<CurrencyConverter/>}></Route>
       {/* <Route path="/about" element={<About/>}></Route> */}
     </Routes>
     </BrowserRouter>
     </Container>
     </Navbar>
     </div>   
  );
}

export default App;
