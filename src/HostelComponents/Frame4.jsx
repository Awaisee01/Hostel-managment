import React from 'react'
import styled from 'styled-components'
import { CiShare1 } from "react-icons/ci";
const Frame4 = () => {
  return (
    <Main>
        <div className="flexx  p-3">
             <div className="price p-2 mb-3">
                <div className='ms-5'>
                <p>Expected </p>
                <p>₹ 52,00,000</p>
                </div>
                <i> 
                <CiShare1 />
                </i>
                <div className='ms-5'>
                <p>Remaining </p>
                <p style={{color: '#FFE605'}}>₹ 15,60,000</p>
                </div>
                <i style={{color: '#FFE605'}}> 
                <CiShare1 />
                </i>
               
                <div className='ms-5'>
                <p>Collected </p>
                <p style={{color: '#00FFF5'}}>₹ 26,00,000</p>
                </div>
                <i style={{color: '#00FFF5'}}> 
                <CiShare1 />
                </i>
                
              
                <div className='ms-5'>
                <p>Overdue </p>
                <p style={{color: '#FF05C8'}}>₹ 10,40,000</p>
                </div>
                <i style={{color: '#FF05C8'}}> 
                <CiShare1 />
                </i>
                
              </div>
             </div>
    </Main>
  )
}
const Main = styled.div`


.price{

    background-color: #111111;
    border-radius: 10px;
    height: 60px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
}
.flexx{
    display: flex;
    flex-wrap: wrap;
}
p{
    font-size: 15px;
 
}
`;
export default Frame4
