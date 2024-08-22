

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { PiCirclesThreePlusThin } from "react-icons/pi";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
const RoomSidebar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleSelect = (path) => {
    setSelected(path);
  };
  return (
    <Main>
      <div className="main">
        <Link
          className={selected === "/Rooms/Occupancy" ? "selected" : ""}
          onClick={() => handleSelect("/Rooms/Occupancy")}
          to="/Rooms/Occupancy"
        >
        <i><PiCirclesThreePlusThin /></i> Occupancy
        </Link>
        <Link
          className={selected === "/Rooms/Hostel" ? "selected" : ""}
          onClick={() => handleSelect("/Rooms/Hostel")}
          to="/Rooms/Hostel"
        >
         <i><RiBuilding2Line  /></i> Hostel
        </Link>
        <Link
          className={selected === "/Rooms/Roomss" ? "selected" : ""}
          onClick={() => handleSelect("/Rooms/Roomss")}
          to="/Rooms/Roomss"
        >
         <i><MdOutlineBed  /></i> Rooms
        </Link>
        <Link
          className={selected === "/Rooms/Assigned" ? "selected" : ""}
          onClick={() => handleSelect("/Rooms/Assigned")}
          to="/Rooms/Assigned"
        >
         <i><MdOutlineAssignment  /></i> Assigned
        </Link>
        <Link
          className={selected === "/Rooms/Furniture" ? "selected" : ""}
          onClick={() => handleSelect("/Rooms/Furniture")}
          to="/Rooms/Furniture"
        >
         <i><MdOutlineChair  /></i> Furniture
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
export default RoomSidebar;
