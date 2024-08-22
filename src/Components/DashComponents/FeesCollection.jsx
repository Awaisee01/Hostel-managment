import React from 'react'
import styled from 'styled-components'
import { CiShare1 } from "react-icons/ci";

const FeesCollection = ({mode}) => {
  return (
    <Main>
      <div className="fee p-3 mt-2">
        <FeeCircle>
            <h5>{mode=="AcDashboard"?"Occupancy":"Fees Collection"} <CiShare1 /> </h5>
            <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
        </FeeCircle>
        

             <div className="flexx  p-2">
             <div className="price p-2 mb-3">
                <div className='ms-3'>
                <p>Expected </p>
                <p>₹ 52,00,000</p>
                </div>
                <i> 
                <CiShare1 />
                </i>
                
              </div>
              <div className="price p-2 ms-5">
                <div className='ms-3'>
                <p>Remaining </p>
                <p style={{color: '#FFE605'}}>₹ 15,60,000</p>
                </div>
                <i style={{color: '#FFE605'}}> 
                <CiShare1 />
                </i>
                
              </div>
              <div className="price p-2 ">
                <div className='ms-3'>
                <p>Collected </p>
                <p style={{color: '#00FFF5'}}>₹ 26,00,000</p>
                </div>
                <i style={{color: '#00FFF5'}}> 
                <CiShare1 />
                </i>
                
              </div>
              <div className="price p-2 ms-5">
                <div className='ms-3'>
                <p>Overdue </p>
                <p style={{color: '#FF05C8'}}>₹ 10,40,000</p>
                </div>
                <i style={{color: '#FF05C8'}}> 
                <CiShare1 />
                </i>
                
              </div>
             </div>
      </div>
    </Main>
  )
}
const Main = styled.div`
 margin-top: 20px;
  width: 100%;
.fee{
    border-radius: 10px;
    background-color: #202020;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.price{

    background-color: #111111;
    border-radius: 10px;
    width: 40%;
    height: 60px;
    line-height: 10px;

    display: flex;
    justify-content: space-between;
}
.flexx{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
}
p{
    font-size: 15px;
    font-weight: 400;
}





`;
export const FeeCircle = styled.div`
  .circle {
    position: relative;
    width: 100px;
    height: 100px;
    background: conic-gradient(
      #FF05C8 45deg,
      #00FFF5 0deg,
      #00FFF5 90deg,
      #00FFF5 180deg,
      #00FFF5 180deg,
      #00FFF5 270deg,
      #FFE605 270deg
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
export default FeesCollection
