import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { SiSimpleanalytics } from "react-icons/si";
import { PiStudentThin } from "react-icons/pi";
import { BsEmojiAngry } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { BiDish } from "react-icons/bi";

const DashSideBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleSelect = (path) => {
    setSelected(path);
  };
  return (
    <Main>
      <div className="main">
        <Link
          className={selected === "/Dashboard/Analytics" ? "selected" : ""}
          onClick={() => handleSelect("/Dashboard/Analytics")}
          to="/Dashboard/Analytics"
        >
        <i> <SiSimpleanalytics /></i> Analytics
        </Link>
        <Link
          className={selected === "/Dashboard/Students" ? "selected" : ""}
          onClick={() => handleSelect("/Dashboard/Students")}
          to="/Dashboard/Students"
        >
         <i><PiStudentThin /></i> Students
        </Link>
        <Link
          className={selected === "/Dashboard/Complaints" ? "selected" : ""}
          onClick={() => handleSelect("/Dashboard/Complaints")}
          to="/Dashboard/Complaints"
        >
         <i><BsEmojiAngry /></i> Complaints
        </Link>
        <Link
          className={selected === "/Dashboard/Stock" ? "selected" : ""}
          onClick={() => handleSelect("/Dashboard/Stock")}
          to="/Dashboard/Stock"
        >
         <i><AiOutlineStock /></i> Stock
        </Link>
        <Link
          className={selected === "/Dashboard/Users" ? "selected" : ""}
          onClick={() => handleSelect("/Dashboard/Users")}
          to="/Dashboard/Users"
        >
         <i><LuUsers /></i> Users
        </Link>
        <Link
          className={selected === "/Dashboard/Meals" ? "selected" : ""}
          onClick={() => handleSelect("/Dashboard/Meals")}
          to="/Dashboard/Meals"
        >
         <i><BiDish /></i> Meals
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
export default DashSideBar;
