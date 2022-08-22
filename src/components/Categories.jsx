import styled from "styled-components"
import { categories } from "../data"

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