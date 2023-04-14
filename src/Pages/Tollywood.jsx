import React, { useContext } from 'react'
import './Css/Tollywood.css'
import AllNavBar from '../Component/Navbar/AllNavBar'
import { store } from '../Component/Context Data/ContextData'
import Blog from '../Component/Blog/Blog'
import BlogSlider from '../Component/Blog/BlogSlider'
import Footer from '../Component/Footer/Footer'


function Tollywood() {
  const [details] = useContext(store)

  return (
    <>
      <AllNavBar />

      <div className='Main_text'>
        <h1 className='text'>Tollywood </h1>
        <h3 id='toppost'>Top Posts</h3>
      </div>
      <div className='Main_Blog'>
        
          <div className='Tollywood_Flex'>
            {
              details.filter((item) => { return item.category === "Tollywood" }).map((a) => (
                <Blog
                  Id={a.id}
                  imgUrl={a.img}
                  Name={a.Name}
                  starring={a.starring}
                  releaseDate={a.releaseDate}
                  description={a.description}
                />
              ))
            }

          </div>
          <div className='Tollywood_Flex-sub'>
            {
              details.filter((item) => { return item.category === "Tollywood" }).map((a) => (
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

export default Tollywood
