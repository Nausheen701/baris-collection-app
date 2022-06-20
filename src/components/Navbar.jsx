import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@material-ui/icons/Search';
// import { Search } from '@material-ui/icons'

const Container  = styled.div`
    height:  60px;   
`;

const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border:  0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    papdding: 5px
`
const Input = styled.input`
    border: none
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
`
const MenuItem = styled.div`
    font-size : 14 px;
    cursor: pointer
`

const Navbar = () => { 
  return (
      <Container>
         <Wrapper> 
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                 <Input/>
                </SearchContainer>
            </Left>
             <Center><Logo> BARIS COLLECTION</Logo>  </Center>
             <Right>right</Right>
         </Wrapper>
      </Container>
    // <div className="container">
    //   navbar
    // </div>
  )
}

export default Navbar
