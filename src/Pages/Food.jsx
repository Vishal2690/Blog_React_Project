import React, { useContext } from 'react'
import AllNavBar from '../Component/Navbar/AllNavBar'
import './Css/Food.css'
import { store } from '../Component/Context Data/ContextData'
import Card from '../Component/Blog/Card'
import Footer from '../Component/Footer/Footer'
import CardForSidebar from '../Component/Blog/CardForSidebar'

function Food() {
  const [data] = useContext(store);
  return (
    <>
      <AllNavBar />
      <div className='Main_text'>
        <h1 className='text'>Food </h1>
        <h3 id='toppost'>Top Posts</h3>
      </div>
      <div className='Main_Blog-second'>
        <div className='Technology_Flex'>
          {
            data.filter((item) => { return item.category === "Food" }).map((a) => (
              <Card
                Id={a.id}
                imgUrl={a.img}
                Name={a.Name}
                description={a.description}
              />
            ))
          }
        </div>
        <div className='Technology_Flex-sub'>
        {
          data.filter((item) => { return item.category === "Food" }).map((a) => (
            <CardForSidebar
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

export default Food