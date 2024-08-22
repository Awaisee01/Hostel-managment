import React from "react";
import styled from "styled-components";
import { CiShare1 } from "react-icons/ci";

const Complaints = () => {
  const complaintsData = [
    { id: 1, title: 'Total Complaints', count: 158 },
    { id: 2, title: 'Resolved', count: 96 },
    { id: 3, title: 'Open', count: 62 }
  ];
  return (
    <Main>
      <div className="complain mt-3">
        <div className="up">
          <h5>
            Complaints <CiShare1 />
          </h5>
        </div>
        <div className="box">
          <div className="box-1">
            <div className="st"></div>
            <div className="nd"></div>
          </div>
          {complaintsData.map((complaint) => (
            <div key={complaint.id} className="box-2 ">
              <h5>
                {complaint.title} <CiShare1 />
              </h5>
              <p>{complaint.count}</p>
            </div>
          ))}
          {/* <div className="box-2 ">
            <h5>
              Total Complaints <CiShare1 />
            </h5>
            <p>158</p>
          </div>
          <div className="box-2 ">
            <h5>
              Resolved <CiShare1 />
            </h5>
            <p>96</p>
          </div>
          <div className="box-2 ">
            <h5>
              Open <CiShare1 />
            </h5>
            <p>62</p>
          </div> */}
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  width: 100%;
  height: 100px;
  .complain {
    background-color: #202020;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 10px;
  }
  .up {
    width: 100%;
    height: 30px;
  }
  .box {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .box-1 {
    width: 20%;
    height: 80%;
    display: flex;
  }
  .st {
    background-color: aqua;
    width: 70%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  }
  .nd {
    background-color: #ffe605;
    width: 30%;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
  }
  .box-2 {
    padding: 8px;
    width: 25%;
    height: 80%;
    background-color: #111111;
    border-radius: 10px;
  }
`;

export default Complaints;
