
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const url = `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);

    if (response.ok) {
      const detailData = await response.json();
      setDetails(detailData);

      // Fetch nutrition data and update the state
      const nutritionUrl = `https://api.spoonacular.com/recipes/${params.name}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`;
      const nutritionResponse = await fetch(nutritionUrl);

      if (nutritionResponse.ok) {
        const nutritionData = await nutritionResponse.json();
        setDetails((prevDetails) => ({
          ...prevDetails,
          nutrition: nutritionData,
        }));
      } else {
        console.log("Failed to fetch nutrition data");
      }
    } else {
      alert("API limit exceeded. Please try again later.");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailsWrapper>
     
      <div>
        <h2>{details.title}</h2>
        <img width={290} src={details.image} alt="" />
      </div>
      
      <br />
      <Info>
        <ButtonsContainer>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <img
            width="56"
            src="https://cdn.dribbble.com/users/1941289/screenshots/6184228/2_organicingredients__1_.gif"
            alt=""
          />
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          <img
            width="56"
            src="https://cdn.dribbble.com/users/1941289/screenshots/6184228/2_organicingredients__1_.gif"
            alt=""
          />
          <Button
            className={activeTab === "macronutrient" ? "active" : ""}
            onClick={() => setActiveTab("macronutrient")}
          >
            Macronutrient
          </Button>
        </ButtonsContainer>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
              ))}
              </ul>
            )}
           
            {details.nutrition && activeTab === "macronutrient" && (
        <div>
          <h3>Calories: {details.nutrition.calories}</h3>
          <h3>Carbs: {details.nutrition.carbs}</h3>
          <h3>Fat: {details.nutrition.fat}</h3>
          <h3>Protein: {details.nutrition.protein}</h3>
        </div>
      )}
          </Info>
        </DetailsWrapper>
        );
      }
      
      const DetailsWrapper = styled.div`
      margin-top: 10rem;
      margin-bottom: 5rem;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
    
      @media (max-width: 768px) {
        margin-top: 6rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    
      h2 {
        margin-bottom: 2rem;
      }
    
      li {
        margin-top: 4rem;
        font-size: 1.3rem;
        line-height: 1.2rem;
        list-style: none;
      }
    
      ul {
        margin-right: 3rem;
      }
    
      h3 {
        font-size: 1.2rem;
      }
    `;
    
    const ButtonsContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    
    const Button = styled.button`
      padding: 0.5rem;
      font-size: 0.5rem;
      color: #313131;
      background: 2px solid black;
      font-weight: 600;
      margin-right: 0.5rem;
    
      @media only screen and (min-width: 768px) {
        padding: 1rem;
        font-size: 0.9rem;
        margin-right: 0.5rem;
      }
    
      &.active {
        background: linear-gradient(to right, #f27121, #e94057);
      }
    `;
    
    const Info = styled.div`
      @media (max-width: 768px) {
        text-align: center;
      }
    
      img {
        margin-bottom: 0rem;
        margin-right: 1rem;
      }
    `;
    
    export default Recipe;
    