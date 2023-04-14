import React, { useContext } from 'react'
import AllNavBar from '../Component/Navbar/AllNavBar'
import './Css/Technology.css'
import Card from '../Component/Blog/Card'
import { store } from '../Component/Context Data/ContextData'
import CardForSidebar from '../Component/Blog/CardForSidebar'
import Footer from '../Component/Footer/Footer'



function Technology() {
  const [core] = useContext(store);
  return (
    <>
      <AllNavBar />
      <div className='Main_text'>
        <h1 className='text'>Technology </h1>
        <h3 id='toppost'>Top Posts</h3>
      </div>

      <div className='Main_Blog-second'>

        <div className='Technology_Flex'>
          {
            core.filter((item) => { return item.category === "Technology" }).map((a) => (
              <Card
                Id={a.id}
                Name={a.Name}
                imgUrl={a.img}
                description={a.description}
                
              />
            ))
          }

        </div>
        <div className='Technology_Flex-sub'>
          {
            core.filter((item) => { return item.category === "Technology" }).map((a) => (
              <CardForSidebar
                Id={a.id}
                imgUrl={a.img}
                Name={a.Name}
                description={a.description}
              />
            ))
          }

          <div className='advrtis3'>
            <a href="https://www.pinterest.com/pin/2814818508835519/">
              <img src="https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?w=2000" alt="Not Found" />
              
            </a>
            
          </div>
        </div>
      </div>

      <Footer />

    </ >
  )
}

export default Technology