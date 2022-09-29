import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `

const Title = styled.h1`
    font-size: 70px;
    margin-botton: 20px;
    `

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 
    `
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input``
const Button = styled.button``


const Newsletter = () => {
  return (
    <Container> 
        <Title>Newsletter</Title> 
        <Description>Get updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <SendOutlinedIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter