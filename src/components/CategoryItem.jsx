import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
    ${mobile({ height: '30vh' })}
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
    margin-bottom: 20px;
    text-transform: uppercase; 
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #fff;
    color: gray;
    cursor: pointer; 
    font-weight: 700;   
`;


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.image} />
            <Info>
                <Title>{item.title}</Title>
                <Link to={item.path}>
                    <Button>SHOP NOW</Button>
                </Link>
            </Info>
        </Container>
    );
}

export default CategoryItem;