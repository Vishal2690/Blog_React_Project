// import React, { useContext } from 'react'
import AllNavBar from '../Component/Navbar/AllNavBar'
import './Css/Home.css'
import { useContext } from 'react'
import { store } from '../Component/Context Data/ContextData'
import { Link } from 'react-router-dom'
import HomeCard from '../Component/Blog/HomeCard'
import Footer from '../Component/Footer/Footer'

function Home() {
  const [data] = useContext(store)



  return (
    <>
      <AllNavBar />
      <div id='what'>


        <div className="home_container">
          <div className="home_first">
            <Link >
              <img
                src={"https://imageio.forbes.com/specials-images/imageserve/637b1d11729a96ce28ea598c/0x0.jpg?format=jpg&width=1200"}
                alt="not found"
              />
            </Link>
          </div>
          <div className="home_right_container">
            <div className="home_sec">
              <Link>
                <img
                  src={"https://www.esriuk.com/content/dam/distributor-restricted/esriuk-com/digital-twin/digital-twin-banner-foreground.png"}
                  alt="not found"
                />
              </Link>
            </div>

            <div className="home_thir">
              <Link>
                <img
                  src={"https://cdn.typestack.ai/images/bc62305b6cff49d43aed5f6550716c89890a3ccc/blog/images/9e0f3adb-19be-4295-9a1a-4b4c86c75c9f.png"}
                  alt="not found"
                />
              </Link>
            </div>
          </div>
        </div>

        <h2 id='latest'>Latest Tollywood Movies</h2>
        <hr className='hyper' />

        <div className='main_Home-flex'>
          <div className='Home_Flex'>
            {
              data.filter((item) => { return item.category === "RenderAsLatest" }).map((a, index) => (
                <div key={index.id}>
                <HomeCard
                  Id={a.id}
                  imgUrl={a.img}
                  Name={a.Name}
                  starring={a.starring}
                  releaseDate={a.releaseDate}
                  description={a.description}
                />
                </div>
              ))
            }

          </div>
          <h2 id='latest'>Latest Hollywood Movies</h2>
          <hr className='hyper' />
          <div className='Home_Flex-two'>
            {
              data.filter((item) => { return item.category === "Action" }).map((a) => (
                <HomeCard
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
          <h2 id='latest'>latest Technology</h2>
          <hr className='hyper' />
          <div className='Home_Flex-two'>
            {
              data.filter((item) => { return item.category === "ActasTech" }).map((a) => (
                <HomeCard
                  Id={a.id}
                  imgUrl={a.img}
                  Name={a.Name}
                  description={a.description}
                />
              ))
            }
          </div>
          <h2 id='latest'>Fitness Tips</h2>
          <hr className='hyper' />
          <div className='Home_Flex-two'>
            {
              data.filter((item) => { return item.category === "FitnessHome" }).map((a) => (
                <HomeCard
                  Id={a.id}
                  imgUrl={a.img}
                  Name={a.Name}
                  description={a.description}
                />
              ))
            }
          </div>
          <h2 id='latest'>Food</h2>
          <hr className='hyper' />
          <div className='home__fle'>
          <div className='Home_Flex__vertical'>
          {
            data.filter((item) => { return item.category === "FoodHome" }).map((a) => (
              <HomeCard
                Id={a.id}
                imgUrl={a.img}
                Name={a.Name}
                description={a.description}
              />
            ))
          }
          
            </div>
            <div className='advrtis2'>
              <h3>Advertisement</h3>
              <a href="https://www.pinterest.com/pin/375558056403111920/">
              <img src="https://static.wixstatic.com/media/d54c4c_b9add6c975b04f6fb390a1247a130cfc~mv2.jpg/v1/fill/w_560,h_1212,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sports%20Design%20Workshop%20Ad%20Vertical.jpg" alt="" />
              </a>
            </div>
          </div>


        </div>



        <Footer />
      </div>
    </>
  );
}

export default Home






















