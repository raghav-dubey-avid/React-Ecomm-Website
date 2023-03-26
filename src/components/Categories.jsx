import styled from "styled-components";
import { categories } from "../product-data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 1.25em;
    justify-content: space-between;
    ${mobile({ padding: "0em", flexDirection:"column" })};
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
               <CategoryItem item={item} key={item.id}/> 
            ))}
        </Container>
    )
}

export default Categories;
