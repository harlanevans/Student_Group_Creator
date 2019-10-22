import styled from "styled-components";

/* #604162 #22223B , #4A4E69 , #9A8C98 , #C9ADA7 , #F2E9E4 */

// font-family: 'Martel', serif;
// font-family: 'Raleway', sans - serif;

export const NavText = styled.h3`
  margin: 0;
  padding: 0;
  font-family: "Martel", serif;
  font-size: 1em;
  font-weight: lighter;
  color: white;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Martel", serif;
  font-size: 2em;
  font-weight: lighter;
`;

export const SubTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
  font-size: 1.5em;
  font-weight: lighter;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  font-weight: lighter;
  letter-spacing: 0.75px;
  line-height: 1.5em;
`;

export const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`

export const Button = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: #9a8c98;
  color: #f2e9e4;
  letter-spacing: 0.75px;
  border-radius: 5px;
  transition: all 1s ease;
  
  :hover {
    cursor: pointer;
    background-color: #604162;
    color: #f2e9e4;
    transition: all 1s ease;
  }
`;

export const EditButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: #4a4e69;
  color: #f2e9e4;
  letter-spacing: 0.75px;
  border-radius: 5px;
  transition: all 1s ease;
  
  :hover {
    cursor: pointer;
    background-color: #2b304e;
    color: #f2e9e4;
    transition: all 1s ease;
  }
  `;
export const DeleteButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: #8b3333;
  color: #f2e9e4;
  letter-spacing: 0.75px;
  border-radius: 5px;
  transition: all 1s ease;
  
  :hover {
    cursor: pointer;
    background-color: #642424;
    color: #f2e9e4;
    transition: all 1s ease;
  }
`;
