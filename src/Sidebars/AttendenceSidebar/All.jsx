import React from 'react'
import AttendenceSideBar from './AttendenceSideBar'
import styled from 'styled-components'
import { CiLogin } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
const All = () => {
  const students = [
    { name: 'Ramakant Sharma', time: '12:30', room: '101', hostel: 'H1' , icon :  <CiLogin />  , color :  "#00FFF5" , },
    { name: 'Ramakant Sharma', time: '12:30', room: '101', hostel: 'H1' , icon :  <CiLogout />  , color :  "#FFE605" , },
    { name: 'Ramakant Sharma', time: '12:30', room: '101', hostel: 'H1' , icon :   <CiLogin /> , color :  "#00FFF5" , },
    { name: 'Ramakant Sharma', time: '12:30', room: '101', hostel: 'H1' , icon :  <CiLogout />  , color :  "#FFE605" , },
    { name: 'Ramakant Sharma', time: '12:30', room: '101', hostel: 'H1' , icon :    <CiLogin />, color :  "#00FFF5" , },
    { name: 'Ramakant Sharma', time: '12:30', room: '101', hostel: 'H1' , icon :  <CiLogout />  , color :  "#FFE605" , },
];
  return (
    <Main>
      <AttendenceSideBar/>
      <div className="app">
            <div className="header">
                <h1>Live Student Update</h1>
                <button className="export-button">Export Data</button>
            </div>
            <div className="student-list">
                {students.map((student, index) => (
                    <div className="student-card" key={index}>
                        <div className="student-info">
                            <img src="https://via.placeholder.com/40" alt="profile" className="profile-pic" />
                            <span className="student-name">{student.name}</span>
                        </div>
                        <div className="student-details ms-5">
                        <span className="student-icon" style={{ color: student.color }}>{student.icon}</span>
                            <span className="student-time">{student.time}</span>
                            <span className="student-room">
                              <i className='me-2'><MdOutlineBed /></i>
                              Room: {student.room}</span>
                            <span className="student-hostel">Hostel: {student.hostel}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Main>
  )
}
const Main = styled.div`
display: flex;
  .app {
    padding: 20px;
    background-color: #202020;
    margin: 20px;
    border-radius: 10px;
    width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.header h1 {
    font-size: 24px;
}

.export-button {
    background-color: #28a745;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-size: 16px;
}

.student-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.student-card {
    background-color: #111111;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.student-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.profile-pic {
    border-radius: 50%;
}

.student-name {
    font-size: 18px;
}

.student-details {
    display: flex;
    gap: 20px;
}

.student-time, .student-room, .student-hostel {
    font-size: 16px;
}

`;

export default All
