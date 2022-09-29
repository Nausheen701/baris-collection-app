import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components'

const Container = styled.div``



const Newsletter = () => {
  return (
    <Container> 
        <Title></Title> 
        <Description></Description>
        <InputContainer>
            <Input/>
            <Button>
                <SendOutlinedIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter