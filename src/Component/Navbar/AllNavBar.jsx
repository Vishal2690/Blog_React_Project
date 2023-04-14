import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


function AllNavBar() {
  const [show, setShow] = useState(false);
  return (
    <div className='main_ContainerOfNav'>
      <div className='main'>
        <div id='the'>The</div>
        <div className='heading'>Serin</div>
      </div>
      <div className='nav'>
        <ul className='links' id={show ? "hidden" : ""}>
          <h4><li><NavLink className='linkOn' to="/">Home</NavLink></li></h4>
          <h4><li><NavLink className='linkOn' to="/tollywood" >Tollywood</NavLink></li></h4>
          <h4><li><NavLink className='linkOn' to="/technology">Technology</NavLink></li></h4>
          <h4><li><NavLink className='linkOn' to="/hollywood">Hollywood</NavLink></li></h4>
          <h4><li><NavLink className='linkOn' to="/fitness">Fitness</NavLink></li></h4>
          <h4><li><NavLink className='linkOn' to="/food">Food</NavLink></li></h4>
        </ul>
        <button className='nav_btn' onClick={() => setShow(!show)}><FaBars /></button>
      </div>


      <div id='strightLine'></div>
    </div>
  )
}

export default AllNavBar


