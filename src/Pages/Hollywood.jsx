import React, { useContext } from 'react'
import AllNavBar from '../Component/Navbar/AllNavBar'
import './Css/Hollywood.css'
import { store } from '../Component/Context Data/ContextData'
import Footer from '../Component/Footer/Footer'
import Blog from '../Component/Blog/Blog'
import BlogSlider from '../Component/Blog/BlogSlider'


function Hollywood() {
  const [detail] = useContext(store)
  return (
    <>
      <AllNavBar />
      <div className='Main_text'>
        <h1 className='text'>Hollywood </h1>
        <h3 id='toppost'>Top Posts</h3>
      </div>
      <div className='Main_Blog-second'>
      <div className='Technology_Flex'>
          {detail.filter((item) => { return item.category === "Hollywood" }).map((a) => (
            <Blog
              Id={a.id}
              imgUrl={a.img}
              Name={a.Name}
              starring={a.starring}
              releaseDate={a.releaseDate}
              description={a.description}
            />
          ))}
        </div>
        <div className='Technology_Flex-sub'>
          {
            detail.filter((item) => { return item.category === "Hollywood" }).map((a) => (
              <BlogSlider
                Id={a.id}
                imgUrl={a.img}
                Name={a.Name}
                description={a.description}
              />
            ))
          }
          <div className='advrtis'>Advitiesment</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Hollywood