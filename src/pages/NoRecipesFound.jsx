import React from 'react';
import styled from 'styled-components';
function NoRecipesFound() {
  return (
    <div>
      <ImgContainer>
      <img src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif" alt="" />
      <p>Recipe not Available</p>
      </ImgContainer>
    </div>
   
  );
}
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
    border-radius: 1rem;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    font-size:
 0.8rem;
    font-style: italic;
    color: #999;
  }
`;

export default NoRecipesFound;
