import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRighttOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

≈
const Slider = () => {
    return (
        <Container> 
            <Arrow>
                    <ArrowLeftOutlined/>
            </Arrow>
            <Arrow>
                    <ArrowRighttOutlined/>
            </Arrow>

        </Container>
    )
}

export default Slider
