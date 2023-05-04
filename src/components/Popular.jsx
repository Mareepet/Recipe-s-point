
import { useEffect,useState } from "react";
import styled from "styled-components";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
  const [ popular, setPopular ] = useState([])

  useEffect(() => {
    getPopular();
  },[]);

  // this step for Local Stroage so that we can prevent from api requests running out
  const getPopular = async () => {
    const check = localStorage.getItem('popular');
     if(check) {
      setPopular(JSON.parse(check))
     } else {
      //to get random recipe
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes))
      setPopular(data.recipes)
     }
  };
  
  
  return (
    <div>
      <Wrapper>
          <h3>Popular Picks</h3>
          <Splide
            options={{
              perPage: 3,
              pagination: false,
              gap: "0.05rem",
            }}
          >
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={'/recipe/'+recipe.id} >
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                     
                    </Link>
                  </Card>
                </SplideSlide>
              ) 
            })}
          </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 2rem 0rem;
  @media (min-width: 768px) {
    margin: 4rem 0rem;
  }
`;

const Card = styled.div`
  min-height: 12rem;
  min-width: 4.7rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 350;
    font-size: 0.4rem;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media (min-width: 768px) {
    min-height: 25rem;
    object-fit: cover;
   
    p {
      font-size: 1rem;
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 0%);
      color: white;
      width: 100%;
      text-align: center;
      font-weight: 600;
      height: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Popular
