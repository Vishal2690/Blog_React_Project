import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Sidebar.css'

const CardForSidebar = (props) => {
    const { imgUrl, Name, description, blog } = props;

    return (
        <>
            <Link state={{
                Name: Name,
                img: imgUrl,
                description: description,
                id: blog
            }} to={`/AllInOne/${blog}`}>

                <div className="smallCard__image">
                    <img src={imgUrl} alt="not found" />
                    </div>
                    </Link>
                <div className='small'  >
                <h4>{Name}</h4>
                <p className='lik'>{description?.slice(0,0)}</p>
                
                </div>
                
        </>
    )
}

export default CardForSidebar;