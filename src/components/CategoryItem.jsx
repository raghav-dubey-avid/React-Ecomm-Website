import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    flex: 1;
    margin: 3px;
    height: 70vh;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "25vh" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 1.25rem;
`;

const Button = styled.button`
    border: none;
    padding: 0.625rem;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        transform: translateY(2px);
    }
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Link to="/productList"><Button >SHOP NOW</Button></Link>
            </Info>
        </Container>
    )
}

export default CategoryItem;
