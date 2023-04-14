import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotF.css'


function Page404() {
  return (
      <div className='pageNotFound'>
          <h1> 😢404😯</h1>
          <h2>Page Not Found</h2>
          <h3>This URL is not correct</h3>
          <Link id='link' to="/">👈 Home page</Link>
      </div>
  )
}

export default Page404