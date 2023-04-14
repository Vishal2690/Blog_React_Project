import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Sidebar.css'

const BlogSlider = (props) => {
    const { imgUrl, Name, description, Id } = props;

    return (
        <>
            <Link state={{
                Name: Name,
                img: imgUrl,
                description: description,
                id: Id
            }} to={`/AllInOne/${Id}`}>

                <div className="smallCard__image">
                    <img src={imgUrl} alt="not found" />
                </div>
            </Link>
            <div className='small'  >
                <h4>{Name}</h4>
                <p className='lik'>{description?.slice(0, 0)}</p>

            </div>

        </>
    )
}

export default BlogSlider;