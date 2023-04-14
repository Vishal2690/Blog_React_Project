import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllNavBar from '../Component/Navbar/AllNavBar';
import Home from '../Pages/Home';
import Tollywood from '../Pages/Tollywood';
import Hollywood from '../Pages/Hollywood';
import Technology from '../Pages/Technology';
import Fitness from '../Pages/Fitness';
import Food from '../Pages/Food';
import Page404 from '../Component/Error/Page404';
import ContextData from '../Component/Context Data/ContextData';
import './Universle.css'
import Card from '../Component/Blog/Card';
import AllInOne from '../Pages/AllInOne';

// dynamic  pata karna hai

const MainRouterComponent = () => {
    return (
        <>
            <div className='container'>
                <ContextData>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/tollywood' element={<Tollywood />} />
                            <Route path='/hollywood' element={<Hollywood />} />
                            <Route path='/technology' element={<Technology />} />
                            <Route path='/fitness' element={<Fitness />} />
                            <Route path='/food' element={<Food />} />
                            <Route path='/allNavBar' element={<AllNavBar />} />
                            <Route path='/card' element={<Card />} />
                            <Route path='/AllInOne/:artical' element={<AllInOne />} />
                            <Route path='/*' element={<Page404 />} />
                        </Routes>
                    </BrowserRouter>
                </ContextData>
            </div>
        </>
    )
}

export default MainRouterComponent