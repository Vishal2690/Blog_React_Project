import React from 'react'
import { NavLink } from 'react-router-dom';
import './Style/HomeCard.css'

const BlogHome = (props) => {
  console.log(props)
  const { imgUrl, starring, Name, releaseDate, description, Id } = props;
  return (
    <>
    <NavLink  state={{
      Name: Name,
      img: imgUrl,
      starring: starring,
      releaseDate: releaseDate,
      description: description,
        id: Id
      
      }} to={`/AllInOne/${Id}`} className='navlink'>
      
    

      <div className='articleid'>
        <div className="card__Home" >
          <div className='card__image'>
            <img src={imgUrl} alt="not found" />
          </div>
          <div className='home__bigcard__data'  >
              <h3 className='lik'>{Name}</h3>
            <p className='lik'>{description?.slice(0,70)}</p>
          </div>
        </div>
      </div>
      </NavLink>
      </>
  )

}

export default BlogHome;