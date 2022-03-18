import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex: 1;
text-align: center; 
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center; 
justify-content: flex-end;
`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input` 
border: none; 
`;

const Logo = styled.h2`
font-weight: bold;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-COMMERCE WEBSITE.</Logo>
                </Center>
                <Right>
                    <Link to='/register' style={{ textDecoration: 'none', color: '#000' }}><MenuItem>REGISTER</MenuItem></Link>
                    <Link to='/login' style={{ textDecoration: 'none', color: '#000' }}><MenuItem>SIGN IN</MenuItem></Link>
                    <MenuItem>
                        <Badge badegContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar; 