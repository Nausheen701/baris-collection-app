// // rafce
import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'

const Home = () => {
  return (
    <div className="container">
      <Announcement/>
      <Navbar/>
      {/* <h1><center>BARIS COLLECTION</center></h1> */}
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
