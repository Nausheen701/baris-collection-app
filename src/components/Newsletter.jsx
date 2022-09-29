import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components'

const Container = styled.div``
const Title = styled.h1``
const Description = styled.div``
const InputContainer = styled.div``
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