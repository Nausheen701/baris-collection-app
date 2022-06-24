
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white; 
    // background-color: #fff7f7; 
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img `

`
const InfoContainer = styled.div`
`

const Slider = () => {
    return (
        <Container> 
            <Arrow direction="left">
                <ArrowLeftOutlined/>  
            </Arrow>

            <Wrapper>
                <Slide> 
                <ImgContainer>
                    <Image src="https://static.wixstatic.com/media/ca849f_380ee0721b624f5f942190e93b7e9d5d~mv2.jpg/v1/fill/w_1480,h_1973,al_c,q_90/ca849f_380ee0721b624f5f942190e93b7e9d5d~mv2.webp"/>
                </ImgContainer>

                <InfoContainer></InfoContainer>
                </Slide>

              
            </Wrapper>

            <Arrow direction="right"> 
                <ArrowRightOutlined/> 
            </Arrow>

            
        </Container> 
            
       
    )
}

export default Slider


