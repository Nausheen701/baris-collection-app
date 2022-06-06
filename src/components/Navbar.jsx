import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

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
    display: flex;
    align-items: center;
// width:  33.3%;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border:  1px solid lightgray;
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
             <Left><Language>EN</Language>
             <SearchContainer>
                 input
                 {/* <SearchIcon/> */}
              </SearchContainer> 

             </Left>
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
