import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiIndianPalace, GiNoodles} from 'react-icons/gi'
 import styled from 'styled-components';

function Category(){
  return (
    <List>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
      <div>
        <GiIndianPalace />
        <h4>Indian</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`
export default Category