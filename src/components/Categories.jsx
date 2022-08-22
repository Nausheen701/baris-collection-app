import styled from "styled-components"
import { categories } from "../data"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justfy-content: space-between;
    `


const Categories = () => {
  return (
    
    <Container> 
        {categories.map(item=>(
            <CategoryItem/>
        ) )}
    </Container>
  )
}

export default Categories