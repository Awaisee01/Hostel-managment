
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { PiCirclesThreePlusThin } from "react-icons/pi";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
const AttendenceSideBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleSelect = (path) => {
    setSelected(path);
  };
  return (
    <Main>
      <div className="main">
        <Link
          className={selected === "/Attendence/All" ? "selected" : ""}
          onClick={() => handleSelect("/Attendence/All")}
          to="/Attendence/All"
        >
        <i><PiCirclesThreePlusThin /></i> DashBoard
        </Link>
        <Link
          className={selected === "/Attendence/In" ? "selected" : ""}
          onClick={() => handleSelect("/Attendence/In")}
          to="/Attendence/In"
        >
         <i><RiBuilding2Line  /></i> In
        </Link>
        <Link
          className={selected === "/Attendence/Out" ? "selected" : ""}
          onClick={() => handleSelect("/Attendence/Out")}
          to="/Attendence/Out"
        >
         <i><MdOutlineBed  /></i> Out
        </Link>
        <Link
          className={selected === "/Attendence/Leave" ? "selected" : ""}
          onClick={() => handleSelect("/Attendence/Leave")}
          to="/Attendence/Leave"
        >
         <i><MdOutlineAssignment  /></i> Leave
        </Link>
      </div>
    </Main>
  );
};
const Main = styled.div`
  height: 85vh;
  background-color: #202020;
  margin: 20px;
  min-width: 20%;
  border-radius: 7px;
  .main {
    height: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  a {
    font-weight: 600;
    font: 18px;
    color: #ffffff;
    height: 15%;
    align-content: center;
    padding-left: 20px;
    text-decoration: none;
  }
  a.selected {
    border-radius: 7px;
    background-color: #2e2e2e;
  }
  a.selected i {
    color: #00FFF5;
  }
`;
export default AttendenceSideBar;