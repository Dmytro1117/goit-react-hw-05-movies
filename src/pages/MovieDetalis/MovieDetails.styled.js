import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  border: none;
 cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
   color: white;
  background-color: orangered;
  &:hover {
    color: orange;
    background-color: grey;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 16px;
  background-color: gray;
  margin: 16px;
`;

export const Img = styled.img`
  height: 350px;

`;

export const MovieInfo = styled.div`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


export const InfoList = styled.ul`
  text-decoration: none;
  display: inline-block;
  margin-left: 0;
  margin-top: 0;
`;

export const InfoLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  &.active {
    color: orange;
    font-weight: 700;
  }`;
