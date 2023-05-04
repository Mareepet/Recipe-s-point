// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { Link, useParams } from 'react-router-dom'

// function Cuisine() {
//   const [cuisine, setCuisine] = useState([]);
//   const params = useParams();

//   const getCuisine = async (name) => {
//     try {
//       const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
  
//       if (data.ok) {
//         const recipes = await data.json();
//         setCuisine(recipes.results);
//       } else {
//         alert("API limit has been reached. Please try again later.");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   useEffect(() => {
//     getCuisine(params.type);
//   }, [params.type]);

//   return (
//     <Grid>
//       {cuisine.map((item) => (
//         <Card key={item.id}>
//           <StyledLink to={`/recipe/${item.id}`}>
//             <img src={item.image} alt="" />
//             <h4>{item.title}</h4>
//           </StyledLink>
//         </Card>
//       ))}
//     </Grid>
//   );
// }

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
//   grid-gap: 3rem;
//   justify-items: center;
  
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
//     grid-gap: 1rem;
//   }
// `;
// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
  
//   img {
//     width: 100%;
//     height: 20rem; /* set a fixed height */
//     border-radius: 2rem 2rem 0 0;
//     object-fit: cover; /* ensure that the image covers the entire element without distorting it */
//   }

  
//   h4 {
//     text-align: center;
//     padding: 1.5rem;
//     margin: 0;
//     background: linear-gradient(to right, #f27121, #e94057);
//     border-radius: 0 0 2rem 2rem;
//     color: white;
//   }
// };`


// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

// export default Cuisine;

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'



function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const params = useParams();

  const getCuisine = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const response = await data.json();
      if (response.results) {
        setCuisine(response.results);
        setApiLimitReached(false);
      } else {
        setApiLimitReached(true);
      }
    } catch (error) {
      setApiLimitReached(true);
      console.error(error);
    }
  };
  
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
      {apiLimitReached ? (
      <Card>
      <div style={{ position: "relative" }}>
        <h4 style={{ position: "absolute",top:30, left: "50%", transform: "translate(-50%, -50%)" }}>
          API limit has been reached. Please try again later
        </h4>
        <img src="https://byfood.b-cdn.net/api/public/assets/9595/content" alt="" />
      </div>
      <img 
      style={{position: "absolute",width: 400,left:"30%",height:200, top:100,  transform: "translate( -50%, -50%)" }}
        src="https://i.pinimg.com/originals/c0/1f/05/c01f055f0f55e147c767de2e447fa2fd.gif" alt="" />
    </Card>
    
   
     
      ) : (
        cuisine.map((item) => (
          <Card key={item.id}>
            <StyledLink to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </StyledLink>
          </Card>
        ))
      )}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  justify-items: center;
  
  @media (max-width: 768px) {
    
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 1rem;
    margin-left: -2rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  img {
    width: 100%;
    height:20rem; /* set a fixed height */
    border-radius: 2rem 2rem 0 0 ;
    object-fit: cover; /* ensure that the image covers the entire element without distorting it */
    margin-bottom: -0.2rem;
    
  }

  h4 {
    text-align: center;
    padding: 0.5rem;
    margin: 0;
    background: linear-gradient(to right, #f27121, #e94057);
    border-radius: 0 0 2rem 2rem ;
    color: white;
    font-size: 0.8rem;
  }
  // CSS
  @media (max-width: 768px) {
    h4 {
      font-size: 0.5rem;
      padding: 0.8rem;
      
      
    }
    
    
  }
`;
 // CSS
 
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Cuisine;
