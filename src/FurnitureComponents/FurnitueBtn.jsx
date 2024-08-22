import React from 'react'
import styled from 'styled-components';
import { Proceed } from '../Components/StudentsComponents/AddRemove';
import { Back } from '../Components/StudentsComponents/AddRemove';
const FurnitueBtn = () => {
  return (
    <Main>
      
      <Proceed>+Add Furniture</Proceed>
      <Backk>Report Damage</Backk>
    </Main>
  )
}
const Main = styled.div`

display: flex;
justify-content: space-evenly;
width: 100%;
margin-top: 15px;
`;
const Backk = styled(Back)`
background-color: #FF0000;
`;
export default FurnitueBtn
