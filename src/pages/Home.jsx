// // rafce
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="container">
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products />
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home










// import Navbar from '../components/Navbar'

// import Greeting from '../components/Greeting'

// const names= ["Nausheen", "Muhammad", "Nanu"]

// const Home = () => {
//   return (
//     <div className="container">
//       <Navbar/>
//       {/* <Greeting /> */}
//       {names.map(n => <Greeting name={n}/>)}
      
//     </div>
//   )
// }

// export default Home
