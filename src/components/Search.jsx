import styled from "styled-components";
import { useState } from "react";
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

function Search() { 
  const [input,setInput] = useState("");
  const navigate = useNavigate();
 
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("hey Y u clicked me")
    navigate('/searched/'+input)
    setInput('');
   
  }
  return (
    
    <FormStyle onSubmit={submitHandler}>
      <h5>Search here either by dish  or ingredient <span><img src="https://c.tenor.com/R-XD3lUdfccAAAAM/integet%C5%91szemek-waving.gif" alt="" /></span></h5>
      <div>
        <FaSearch></FaSearch>
        <input 
         onChange={(e) => setInput(e.target.value)}
          type="text" 
          value={input} />
      </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
   margin: 0rem 20rem;
    margin-top: -12rem;
   div {
    width: 100%;
    position: relative;
   }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none; 
    width: 100%;

  }
  svg {
     position: absolute;
     top: 50%;
     left: 0%;
     transform: translate(100%, -50%);
     color: white;
  }
  
`;

export default Search