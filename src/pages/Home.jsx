// rafce
import React from 'react'
import Navbar from '../components/Navbar'

import Greeting from '../components/Greeting'

const names= ["Nausheen", "Muhammad", "Nanu"]

const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      {/* <Greeting /> */}
      {names.map(n => <Greeting name={n}/>)}
      
    </div>
  )
}

export default Home
