import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Plastic Emotional Bison</title>
        <meta property="og:title" content="Plastic Emotional Bison" />
      </Helmet>
    </div>
  )
}

export default Home
