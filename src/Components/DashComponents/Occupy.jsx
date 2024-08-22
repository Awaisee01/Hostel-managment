import React from "react";
import { CiShare1 } from "react-icons/ci";
import styled from "styled-components";

const Occupy = () => {
  return (
    <Main>
      <div className="occupy mt-3">
        <h1>
          Occupancy <CiShare1 />
        </h1>

        <div className="hostel p-1 ">
          <div className="h1 p-3">
            <h4>
              Hostel 1 <CiShare1 />{" "}
            </h4>
            <Circle>
              <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
            </Circle>
          </div>
          <div className="h1 p-3">
            <h4>
              Hostel 2 <CiShare1 />{" "}
            </h4>
            <Circlee>
              <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">75%</div>
                </div>
              </div>
            </Circlee>
          </div>
          <div className="h1 p-3">
            <h4>
              Hostel 3 <CiShare1 />{" "}
            </h4>
            <Circleee>
              <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">90%</div>
                </div>
              </div>
            </Circleee>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  width: 100%;
  .occupy {
    width: 100%;
    background-color: #202020;
    height: 100%;
    border-radius: 10px;
  }
  .h1 {
    background-color: #111111;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hostel {
    display: flex;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 22px;
    padding: 5px;
  }
  h4 {
    text-align: left;
    width: 100%;
    font-size: 15px;
  }
`;
export const Circle = styled.div`
  .circle {
    position: relative;
    width: 100px;
    height: 100px;
    background: conic-gradient(
      #292929 90deg,
      #292929 0deg,
      #00fff5 90deg,
      #00fff5 180deg,
      #00fff5 180deg,
      #00fff5 270deg,
      #292929 270deg
    );
    border-radius: 50%;
  }

  .circle-inner {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 80%;
    height: 80%;
    background-color: #111111;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-center {
    font-size: 24px;
    color: white;
  }
`;
 export const Circlee = styled(Circle)`
  .circle {
    background: conic-gradient(
      #292929 90deg,
      #ffe605 0deg,
      #ffe605 90deg,
      #ffe605 180deg,
      #ffe605 90deg
    );
    border-radius: 50%;
  }
`;
export const Circleee = styled(Circlee)`
  .circle {
    background: conic-gradient(
      #292929 45deg,
      #ff05c8 0deg,
      #ff05c8 90deg,
      #ff05c8 180deg,
      #ff05c8 180deg,
      #ff05c8 270deg,
      #ff05c8 270deg
    );
    border-radius: 50%;
  }
`;
export default Occupy;
