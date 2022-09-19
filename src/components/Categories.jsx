import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justfy-content: space-between;
    `


const Categories = () => {
  return (
    <> ART PRINTS 
    <Container> 
        {categories.map(item=>(
            <CategoryItem item={item} key= {item.id}/>
        ) )}
    </Container></>
    
  )
}

export default Categories