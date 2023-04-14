import React from 'react'
import { useLocation } from 'react-router-dom'
import './Css/AllInOne.css'
import AllNavBar from '../Component/Navbar/AllNavBar';

const AllInOne = () => {
  const location = useLocation();
  const { Name, img, description } = location.state;

  return (
    <>
      <AllNavBar/>
      <div className='single__page'>
        <h1>{Name}</h1>
        <img src={img} alt="" />
        <p><h3>About</h3>{description}</p>
      </div>
    </>
  )
}

export default AllInOne;