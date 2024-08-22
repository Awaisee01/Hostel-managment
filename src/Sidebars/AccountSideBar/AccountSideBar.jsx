import React from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TbHomeCheck } from "react-icons/tb";
import { TbHomeMove } from "react-icons/tb";
import { GiCommercialAirplane } from "react-icons/gi";
import { PiNotepadLight } from "react-icons/pi";
import { FaLayerGroup } from "react-icons/fa6";
import { TbClockExclamation } from "react-icons/tb";
const AccountSideBar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
  
    const handleSelect = (path) => {
      setSelected(path);
    };
  return (
    <Main>
      <div className="main">
        <Link
          className={selected === "/Accounts/AccountDashboard" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/AccountDashboard")}
          to="/Accounts/AccountDashboard"
        >
        <i><MdOutlineDashboard /></i> Dashboard
        </Link>
        <Link
          className={selected === "/Accounts/Credit" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/Credit")}
          to="/Accounts/Credit"
        >
         <i><TbHomeCheck /></i> Credit
        </Link>
        <Link
          className={selected === "/Accounts/Debit" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/Debit")}
          to="/Accounts/Debit"
        >
         <i><TbHomeMove   /></i> Debit
        </Link>
        <Link
          className={selected === "/Accounts/Vendor" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/Vendor")}
          to="/Accounts/Vendor"
        >
         <i><GiCommercialAirplane   /></i> Vendor
        </Link>
        <Link
          className={selected === "/Accounts/Orders" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/Orders")}
          to="/Accounts/Orders"
        >
         <i><PiNotepadLight  /></i> Orders
        </Link>
        <Link
          className={selected === "/Accounts/Expected" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/Expected")}
          to="/Accounts/Expected"
        >
         <i><FaLayerGroup   /></i> Expected
        </Link>
        <Link
          className={selected === "/Accounts/Overdude" ? "selected" : ""}
          onClick={() => handleSelect("/Accounts/Overdude")}
          to="/Accounts/Overdude"
        >
         <i><TbClockExclamation   /></i> Overdude
        </Link>
      </div>
    </Main>
  )
}
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
export default AccountSideBar
