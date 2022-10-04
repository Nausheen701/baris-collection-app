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
    margin: 20px 0px;
    `
const SocialContainer = styled.div`
    display: flex;
    `
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    `

const Center = styled.div`
    flex: 1;
    padding: 20px;
    `
const Title = styled.h3`

`

const List = styled.u1`
`

const ListItem = styled.li`
`

const Right = styled.div`
    flex: 1;`


const Footer = () => {
  return (
    <Container> 
        <Left>
            <Logo>BARIS</Logo>  
            <Desc>
            Specializing in the season's chicest bags, trendy sunglasses, and sophisticated watches.
            </Desc>
        </Left>
        
        <SocialContainer>    
            <SocialIcon color="E4405F">
                <InstagramIcon/>
            </SocialIcon>

            <SocialIcon color="3B5999">
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