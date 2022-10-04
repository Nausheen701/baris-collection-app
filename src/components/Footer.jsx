import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'

const Container = styled.div`
    display: flex;
    `
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    `
const Logo = styled.h1``
const Desc = styled.p`
    margin: 2px 0px;
    `
const SocialContainer = styled.div`
    display: flex;
    `
const SocialIcon = styled.div`
    flex-direction: row;
    `


const Center = styled.div`
    flex: 1;`

const Right = styled.div`
    flex: 1;`


const Footer = () => {
  return (
    <Container> 
        <Left>
            <Logo>BARIS</Logo>  
            <Desc>
            Specializing in the season's latest bags, trendy sunglasses, and chic watches.
            </Desc>
        </Left>
        
        <SocialContainer>    
            <SocialIcon>
                <InstagramIcon/>
            </SocialIcon>

            <SocialIcon>
            <FacebookOutlinedIcon />
            </SocialIcon>
        </SocialContainer>

        <Center>
            
        </Center>
        
        <Right></Right>

    </Container>
  )
}

export default Footer