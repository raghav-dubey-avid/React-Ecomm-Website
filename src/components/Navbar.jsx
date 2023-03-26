import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive.js';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height:  3.75em;
    ${mobile({ height: "3.125em" })};
`;

const Wrapper = styled.div`
    padding: 0.625em 1.25em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "0.625em 0" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 0.87em;
    cursor: pointer;
    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 1.5625em;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "3.125rem" })};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    text-decoration: none;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "1.5em" })};
    color: black;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 0.875em;
    cursor: pointer;
    margin-left: 1.5625em;
    color: black;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = (props) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray",fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Link to="/" style={{ textDecoration: "none" }}><Center><Logo>SHOPIFY.</Logo></Center></Link>
                <Right>
                    <Link to="/product" style={{ textDecoration: "none" }}><MenuItem>Products</MenuItem></Link>
                    <Link to="/productList" style={{ textDecoration: "none" }}><MenuItem>Product List</MenuItem></Link>
                    <MenuItem>
                        <Badge badgeContent={props.countProp || "0"} color="primary">
                            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}><ShoppingCartOutlined/></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
