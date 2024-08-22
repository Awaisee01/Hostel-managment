import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import cal from "../img/calendar.png";
import not from "../img/notification.png";
import pro from "../img/profile.png";

const Header = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleSelect = (path) => {
    setSelected(path);
  };
  return (
    <Main>
      <Navbar expand="lg" className="navs">
        <div className="title ">
          <Navbar.Brand className="logo" href="/">
            HMS
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="space">
          <Nav className="items">
            <Link
              className={selected === "/" ? "selected" : ""}
              onClick={() => handleSelect("/")}
              to="/"
            >
              <i>
                <RiDashboardLine />
              </i>{" "}
              Dashboard
            </Link>

            <Link
              className={selected === "/Rooms" ? "selected" : ""}
              onClick={() => handleSelect("/Rooms")}
              to="/Rooms"
            >
              <i>
                <MdMeetingRoom />
              </i>{" "}
              Rooms
            </Link>

            <Link
              className={selected === "/Attendance" ? "selected" : ""}
              onClick={() => handleSelect("/Attendance")}
              to="/Attendance"
            >
              <i>
                <MdCoPresent />
              </i>{" "}
              Attendance
            </Link>
            <Link
              className={selected === "/Accounts" ? "selected" : ""}
              onClick={() => handleSelect("/Accounts")}
              to="/Accounts"
            >
              <i>
                <MdOutlineAccountBalance />
              </i>{" "}
              Accounts
            </Link>

            <Link
              className={selected === "/Maintenance" ? "selected" : ""}
              onClick={() => handleSelect("/Maintenance")}
              to="/Maintenance"
            >
              <i>
                <GrVmMaintenance />{" "}
              </i>{" "}
              Maintenance
            </Link>
          </Nav>

          <div className="icons">
            <img src={cal} alt="" />
            <img src={not} alt="" />
            <img src={pro} alt="" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Main>
  );
};

const Main = styled.div`
  .navs {
    background-color: #202020;
    min-height: 60px;
    width: 100%;
  }
  .items {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  .item {
  }
  a {
    text-decoration: none;
    color: #b0b0b0;
    padding: 10px;
  }
  a.selected i {
    color: #00fff5;
  }

  .icons {
    width: 27%;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
  }
  .title {
    width: 20%;
    text-align: center;
  }

  .logo {
    color: #fff;
    position: relative;
    font-size: 24px;
    font-weight: 600;
  }
  .logo::before {
    position: absolute;
    content: "";
    left: -20px;
    top: 15px;
    height: 24px;
    width: 24px;
    background-color: #00fff5;
    border-radius: 50%;
  }
`;

export default Header;
