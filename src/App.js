import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, {useState} from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {MdAccountBox} from 'react-icons/md'

function App() {
  return (
    <div className='Contaner'>
      <Router>
        <header>    
          <Navbar>
            <NavItem item="Buy Your Car" />
            <NavItem item="Sell Your Car" />
            <NavItem item="Finance & Insurance">
              <DropdownMenu />
            </NavItem>
            <NavItem item="Careers" />
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/car_insurance" element={<CarInsurance />}/>
          </Routes>
        </main>
        </Router>
    </div>
  );
}

function Navbar(props) {
  return(
    <nav className='navbar'>
      <img className='logo' src="logo.jpg" alt="the turners car logo"/>
      <ul className='navbar-nav'>{props.children}</ul>
      <div className='account'>
        <MdAccountBox size="2.5rem"/>
      </div>
      
    </nav>
  )
}

function NavItem(props){
  const [open, setOpen] = useState(false)
  return(
    <li className="nav-item"  >
      <div className="dropdown-title"  onClick={()=>setOpen(!open)}>
        <p>{props.item}</p>
        <FaAngleDown/></div>
      {open && props.children}
    </li>
    )
}

function DropdownMenu(){
  function DropdownItem(props){
    return (
      <p  className="menu-item">
          {props.children}
      </p>
    )
  }
  return(
    <div className='dropdown'>

        <DropdownItem>Personal Finance</DropdownItem>
        <DropdownItem>Business Finance</DropdownItem>
        <DropdownItem>
          <Link to="/car_insurance">Car Insurance</Link>
        </DropdownItem>

    </div>
  )
}

function CarInsurance(){
  return(
    <div className='insurances'>
      <Card name="Motor Vehicle Insurance"/>
      <Card name="Mechanical Breakdown"/>
      <Card name="Claim"/>
    </div>
  )
}

function Card(props){
  return(
    <div className='card'>
      <div className='card-photo'>
        <img src="car-insurance.png" alt="a car with a man stand by side"/>
      </div>
      <div className='insurance-type'>{props.name}</div>
    </div>
  )
}

export default App;
