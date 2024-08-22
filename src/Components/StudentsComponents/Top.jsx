import React from 'react'
import styled from 'styled-components'
// import Complaints from '../DashComponents/Complaints';
import { CiShare1 } from "react-icons/ci";

const Top = () => {
  const topData = [
    { id: 1, title: 'Total Students', count: 3569 },
    { id: 2, title: 'In Hostel', count: 1569 , color: '#00FFF5'  },
    { id: 3, title: 'Outside Hostel', count: 2500 , color : '#B0B0B0'},
    { id: 4, title: 'Students Assigned', count: 2569, color: '#FF05C8' },
    { id: 5, title: 'Students Removed', count: 1000 , color : '#F10606' }
  ];
  return (
    <Main>
  
      <div className="top">
        <div className="box">
          {topData.map((top) => (
            <div key={top.id} className="box-2 ">
              <h5>
                {top.title} <CiShare1 />
              </h5>
              <p style={{ color: top.color }}>{top.count}</p>
            </div>
          ))}
        
        </div>
        <div className="box-1 me-3">
            <h5>Fees Defaulters</h5>
            <h3 style={{color:'#FFE605'}}>150</h3>
            <Button>View List</Button>
          </div>
      </div>
      



    </Main>
  )
}
const Main = styled.div`
background-color: #2E2E2E;

margin-top: 13px;
border-radius: 10px;
/* min-height: 35%; */
width: 100%;
.top{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .box {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    /* justify-content: space-between; */
  }
    .box-2 {
      margin: 10px;
    padding: 8px;
    width: 30%;
    height: 80%;
    background-color: #111111;
    border-radius: 10px;
  }
  .box-1{
    background-color: #111111;
    width: 27%;
    height: 80%;
    padding: 8px;
    border-radius: 10px;
    
  }
  h5{
    font-size: 16px;
  }
`;
export const Button = styled.div`
background-color: #292929;
width: 80%;
height: 50px;
border-radius: 10px;
text-align: center;
align-content: center;
margin-left: 20px;
`;

export default Top
