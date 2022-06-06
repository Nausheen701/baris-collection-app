import React from 'react'
import styled from 'styled-components'

const Container  = styled.div`
    height:  60px;
    
    // background-color: black
`;

const Wrapper = styled.div`
    padding: 10px  20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
// width:  33.3%;
`


const Center = styled.div`
    flex: 1;
// width:  33.3%;
`
const Right = styled.div`
    flex: 1;
// width:  33.3%;
`

const Navbar = () => {
  return (
      <Container>
         <Wrapper> 
             <Left>left</Left>
             <Center>center</Center>
             <Right>right</Right>
         </Wrapper>
      </Container>
    // <div className="container">
    //   navbar
    // </div>
  )
}

export default Navbar
