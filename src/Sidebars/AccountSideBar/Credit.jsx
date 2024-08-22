import React from "react";
import styled from "styled-components";
import FeesCollection from "../../Components/DashComponents/FeesCollection";
import AccountSideBar from "./AccountSideBar";
import { Button } from "../../Components/StudentsComponents/AddRemove";
import CreditComponenet from "../../AccountsComponents/CreditComponenet";
import img from './graph.png'
import img2 from './horizontal.png'
const Credit = () => {
  return (
    <Main>
      <AccountSideBar />
      <div className="">
       <div className="d-flex">
       <FeesCollection />
       <Button className="btnd">Request Payment</Button>
       </div>

        <div className="mt-5 d-flex">
          <CreditComponenet />
         <div className="img ms-5 p-3">
          <h3 className="mb-5">Credit Graph</h3>
          <img src={img} alt="" />
          <img src={img2} alt="" />
         </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  .btnd {
    margin: 25px;
    width: 350px;
    height: 60px;
  }
  .img{
    background-color: #202020;
    border-radius: 10px;
    height: 440px;
    width: 650px;
  }
`;
export default Credit;
