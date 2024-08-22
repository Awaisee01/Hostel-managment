import React from 'react'
import DashSideBar from './DashSideBar'
import Top from '../../Components/StudentsComponents/Top'
import styled from 'styled-components'
import AllStudents from '../../Components/StudentsComponents/AllStudents'
import DefultStudents from '../../Components/StudentsComponents/DefultStudents'
import AddRemove from '../../Components/StudentsComponents/AddRemove'
// import DashSideBar from '../../img/DashSideBar'
// import { useState, useEffect } from 'react';
// import { collection, onSnapshot } from "firebase/firestore";
// import {db} from '../../config/FireBase'
const Students = () => {
  
  return (
   <Main>
    <DashSideBar/>

    <div className="fex">
    <Top/>
  <div className="fex-2">
  <AllStudents/>
  <DefultStudents/>
  </div>
    </div>
   <AddRemove/>
    {/* <DashSideBar/> */}

    
   </Main>








 
  )
}
const Main = styled.div`
display: flex ;
.fex-2{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
`;

export default Students
