import React from "react";
import DashSideBar from "../Sidebars/Dashboardsidebars/DashSideBar";
import Occupy from "./DashComponents/Occupy";
import styled from "styled-components";
import FeesCollection from "./DashComponents/FeesCollection";
import Complaints from "./DashComponents/Complaints";
import StudentsUpdate from "../Sidebars/DashRightSideBar/StudentsUpdate";
import Emergency from '../Sidebars/DashRightSideBar/Emergency';

const DashBoard = () => {
  return (
    <Main>
      <DashSideBar />
     <div className="fex">
     <Occupy/>
     <FeesCollection mode={"dashboad"}/>
     <Complaints/>
     </div>
     <div className="fex-2 ">
     <StudentsUpdate/>
     <Emergency/>
     </div>
      {/* <DashSideBar /> */}
    </Main>
  );
};
const Main = styled.div`
display: flex;
justify-content: space-between;
.fex{
  width: 57%;
}
`;
export default DashBoard;
