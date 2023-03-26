import styled from "styled-components";
import { popularProducts } from "../product-data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({searchVal, setSearch}) => {
    return (
        <Container>
            {popularProducts.filter((val) => {
                if(searchVal === "") {
                    return val;
                }
                else if(val.product && val.product.toLowercase().includes(searchVal.toLowercase()) ){
                    return val;
                }

            })
            .map(item=>(
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products;
