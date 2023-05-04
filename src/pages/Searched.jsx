
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// function Searched() {
//   const [searchedRecipes, setSearchedRecipes] = useState([]);
//   let params = useParams();

  
//   const getSearched = async (name) => {
//     try {
//       const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const recipes = await response.json();
//       setSearchedRecipes(recipes.results);
//     } catch(error) {
//       console.error('There was a problem with the API request:', error);
//       alert("API limit has been reached. Please try again later.");
//     }
//   };
  

//   useEffect(() => {
//     getSearched(params.search);
//   }, [params.search]);


// return (
//   <Grid>
//     {searchedRecipes.map((item) => {
//       return (
//         <Card key={item.id}>
//           <Link to={'/recipe/' + item.id}>
//             <ImgContainer>
//               {item.image ? (
//                 <img src={item.image} alt="" />
//               ) : (
//                 <div>
//                   <img src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif" alt="" />
//                   <p>Recipe not Available</p>
//                 </div>
//               )}
//             </ImgContainer>
//             <h4>{item.title}</h4>
//           </Link>
//         </Card>
//       );
//     })}
//   </Grid>
// );
//   }
// const Grid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
// `;

// const Card = styled.div`
//  background-color: #fff;
//   border-radius: 2rem ;
//   box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
//   margin: 1rem;
//   width: 90%;
//   max-width: 30rem;
//   background: linear-gradient(to right, #f27121, #e94057);
  

//   h4 {
//     font-size: 0.9rem;
//     margin-top: -0.9rem;
//     margin-bottom: 0.09rem;
//     text-align: center;
    
    
//   }

//   a {
//     text-decoration: none;
//   }
// `;

// const ImgContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 1.5rem;
//    margin-right: 0.8rem;
//     margin-left: 0.8rem;

//   img {
//     height: auto;
//     max-width: 100%;
//     object-fit: contain;
//     border-radius: 1rem;
//     margin-top: 0.5rem;
   
//   }
// `;

// export default Searched;
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoRecipesFound from './NoRecipesFound'; // Import the component

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await response.json();
      setSearchedRecipes(recipes.results);
    } catch(error) {
      console.error('There was a problem with the API request:', error);
      alert("API limit has been reached. Please try again later.");
    }
  };
  
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.length > 0 ? // Check if there are any recipes
        searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={'/recipe/' + item.id}>
                <ImgContainer>
                  {item.image ? (
                    <img src={item.image} alt="" />
                  ) : (
                    <NoRecipesFound /> // Use the component if image is not available
                  )}
                </ImgContainer>
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        }) : (
          <NoRecipesFound /> // Use the component if there are no recipes
        )
      }
    </Grid>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 90%;
  max-width: 30rem;
  background: linear-gradient(to right, #f27121, #e94057);
  padding: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0.5rem 0rem;
    border-radius:  1rem;
    
  }

  h4 {
    font-size: 0.9rem;
    margin-top: -0.9rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
   
  img {
    height: auto;
    max-width: 100%;
    object-fit: contain;
    border-radius: 1.2rem;
    margin-top: 0.5rem;
   

  }

  @media (max-width: 768px) {
    margin-bottom: 1.8rem;
    
  }
`;

export default Searched;
