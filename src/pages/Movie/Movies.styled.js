import styled from 'styled-components';

export const Form = styled.form`
margin-left: auto;
margin-right: auto;
    margin-top: 32px;
    max-width: 600px;
    display: flex;
    justify-content: center;
    max-width: 400px;;
`;

export const Input = styled.input`
 background-color: silver;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  border: 0;
  cursor: pointer;
  outline: none;
   padding: 10px 20px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  color: white;
    background-color: orangered;
  &:hover {
    color: orange;
    background-color: gray;
  }
`;



