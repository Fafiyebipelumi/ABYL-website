import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
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
    ${mobile({ flex: 2, justifyContent: 'center' })}
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
    ${mobile({ width: '50px' })}
`;

const Logo = styled.h2`
    font-weight: bold;
    ${mobile({ fontSize: '20px' })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input style={{ outline: 'hidden' }} placeholder='Search' />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to='/' style={{ color: 'black', textDecoration: 'none' }} ><Logo>ABYL.</Logo></Link>
                </Center>
                <Right>
                    <Link to='/register' style={{ textDecoration: 'none', color: '#000' }}><MenuItem>REGISTER</MenuItem></Link>
                    <Link to='/login' style={{ textDecoration: 'none', color: '#000' }}><MenuItem>SIGN IN</MenuItem></Link>
                    <MenuItem>
                        <Link to='/cart'>
                            <ShoppingCartIcon style={{ color: 'black' }} />
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar; 