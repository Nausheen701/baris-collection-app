import React from 'react'


 const Greeting = (props) => {
    //  console.log(props)
  return (
    <div className="Greeting">
      {/* <h2>Hello, {Name} </h2> */}
      {/* <h2>HELLO, {Name}</h2> */}
       <h2>Hello, {props.name} </h2>
       
    </div>
  )
}

// export const Name = () => {
//     return (
//         <div>
//       <h2>Nausheen </h2>
//     </div>
//     )
// }

export default Greeting
