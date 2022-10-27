import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiIndianPalace, GiNoodles} from 'react-icons/gi';
import {FaHome} from 'react-icons/fa'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
 import { Link } from "react-router-dom";
function Category(){
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to={'/cuisine/Indian'}>
        <GiIndianPalace />
        <h4>Indian</h4>
      </SLink>

      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <Nav>
          <FaHome />
          <Logo to={'/'}>Home</Logo>
       </Nav>

    </List>
     
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
margin-left: 8rem;
`;
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);

h4{
  color: white;
  font-size: 0.8rem;
}
svg {
  color:white;
  font-size:1.5rem;

}
&.active {
  background: linear-gradient(to right, #f27121, #e94057);

  svg {
    color: white;
  }
  h4 {
    color: white;
  }
  
  
}

`
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 500;
font-family:'Lobster Two', cursive;
`
const Nav = styled.div `
 margin-left: 1rem;
 margin-top: -2rem;
padding: 4rem 0rem ;
display flex;
justify-content:flex-start;
align-item: center;
svg {
  font-size: 2rem;
 
}
`

export default Category