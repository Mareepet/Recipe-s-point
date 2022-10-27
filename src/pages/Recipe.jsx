import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


import React from 'react'

function Recipe() {
 let params = useParams();
 const [details, setDetails] = useState({});
 const [activeTab, setActiveTab] = useState('instructions');

 const fetchDetails = async () => {
 const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

 const detailData = await data.json();
 setDetails(detailData);
 // console.log((detailData) )
}

useEffect(() => {
 fetchDetails();
}, [params.name])

  return (
    <DetailsWrapper>
     <div>
       <h2>{details.title}</h2>
       <img src={details.image} alt="" />
    
     </div>
     <br />
     <Info>
       <Button className={activeTab === 'instructions' ? 'active': ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
        <img width="56"src="https://cdn.dribbble.com/users/1941289/screenshots/6184228/2_organicingredients__1_.gif" alt="" />
       <Button className={activeTab === 'ingredients' ? 'active': ''} onClick={() => setActiveTab("ingredients")}>ingredients</Button>
       {activeTab === "instructions" && (<div>
        {/* React dangerouslySetInnerHTML is an HTML property that makes it easy to programmatically set the HTML elements from an external source. It has replaced the innerHTML used in the browser DOM. dangerouslySetInnerHTML helps React know how to handle the HTML elements in a component where the contents are to be rendered. */}
        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
         <h3 dangerouslySetInnerHTML={{ __html:details.instructions }}></h3>
       </div>) }
       {activeTab === "ingredients" && (
        <ul>
           {details.extendedIngredients.map((ingredient) => (
           <li key = {ingredient.id}>{ingredient.original}</li>
           ))}
        </ul>
       )}
     </Info>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`

 margin-top: 10rem;
 margin-bottom: 5rem;
 justify-content: space-evenly;
 align-items: center;
 text-align: center;

 .active {
   background: linear-gradient(35deg, #494949, #313131);
   color: white;
 
 }
 
 h2 {
   margin-bottom: 2rem;
 }
 li {
   margin-top: 4rem;
   font-size: 1.3rem;
   line-height: 0rem;
   list-style: none;
 

 }
 ul {
  
   margin-right: 3rem;
 }
 h3{
   font-size: 1.2rem;
    
 
 }
 

`
const Button = styled.button`
 padding: 1rem;
 color: #313131;
 background: 2px solid black;
 margin-right: 2rem;
 font-weight: 600;

 &.active {
  background: linear-gradient(to right, #f27121, #e94057);

`
const Info = styled.div`
 margin-left: 4rem;
 img {
   margin-bottom: -0.9rem;
   margin-right: 2rem;
  
 }

`

export default Recipe
