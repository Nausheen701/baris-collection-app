import styled from "styled-components"

const Container = styled.div `
    height: 30px;
    background-color: teal;
    color: white;

` 

const Announcement = () => {
    return (
        <Container>
            Free Shipping on Orders Over 250TL!
        </Container>
    )
}

export default Announcement