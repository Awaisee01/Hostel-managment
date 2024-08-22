import React from 'react'
import styled from 'styled-components'
import { CiShare1 } from "react-icons/ci";
import { frame2 } from '../Dummy';
const Frame2 = () => {
  return (
    <Main>
     <div className="main d-flex justify-content-center align-items-center flex-column">
        <h4>Furniture <CiShare1 /></h4>
        {frame2.map((val, i) => (
            <div className=" comp d-flex justify-content-between p-2 m-2  col-lg-10">
              
              <p>{val.cf}</p>
              <p> {val.t } </p>
            </div>
          ))}
     </div>
    </Main>
  )
}
 const Main = styled.div`
 background-color: #141414 ;
 width: 30%;
 height: 100%;
 border-radius: 10px;
 padding: 5px;
 .comp{
    background-color: #202020;
    border-radius: 10px;
 }
 p{
    font-size: 16px;
 }
 `;
export default Frame2
