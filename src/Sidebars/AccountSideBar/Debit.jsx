import React from 'react'
import styled from "styled-components";
import FeesCollection from "../../Components/DashComponents/FeesCollection";
import AccountSideBar from "./AccountSideBar";
import { Button } from "../../Components/StudentsComponents/AddRemove";
import DebitComponenet from "../../AccountsComponents/DebitComponent";
import img from './graph.png'
import img2 from './horizontal.png'
const Debit = () => {
  return (
    <Main>
    <AccountSideBar />
    <div className="">
     <div className="d-flex">
     <FeesCollection />
     <Button className="btnd">Make Payout</Button>
     </div>

      <div className="mt-5 d-flex">
        <DebitComponenet />
       <div className="img ms-5 p-3">
        <h3 className="mb-5">Debit Graph</h3>
        <img src={img} alt="" />
        <img src={img2} alt="" />
       </div>
      </div>
    </div>
  </Main>
  )
}
const Main = styled.div`
  display: flex;
  .btnd {
    margin: 25px;
    width: 350px;
    height: 60px;
    border: 1px solid red;
    color: red;
  }
  .img{
    background-color: #202020;
    border-radius: 10px;
    height: 440px;
    width: 650px;
  }
`;
export default Debit
