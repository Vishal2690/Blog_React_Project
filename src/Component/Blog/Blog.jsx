import React from "react";
import { NavLink } from "react-router-dom";

const Blog = (props) => {

  const { Id,imgUrl, Name,  starring, releaseDate,description } = props;
  return (
    <>

      <NavLink state={{
        id: Id,
        Name: Name,
        img: imgUrl,
        starring: starring,
        releaseDate: releaseDate,
        description: description
      }} to={`/AllInOne/${Id}`}>

        <img src={imgUrl} alt="{not found}" />
      </NavLink>
      <div className="bigcard__data">
        <h2>{Name}</h2>
        <h4>{starring}</h4>
        <h5>{releaseDate}</h5>
        <p><span>👉👉</span>{description.slice(0,70)}</p>
      </div>
      
      <br />
      <br />


    </>
  );
};

export default Blog;