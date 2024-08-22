import React from 'react'
import styled from 'styled-components'
import {Circle} from '../Components/DashComponents/Occupy'
import Frame1 from './Frame1'
import Frame2 from './Frame2'
const Hostel1 = () => {
  return (
    <Main>
        <div className="h1 p-4 mt-3">
            <Newcircle>
            <h4>Hostel 1</h4>
              <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
            </Newcircle>
          <Frame1/>
          <Frame2/>
          </div>
    </Main>
  )
}
const Main = styled.div`

    width: 100%;
    .h1 {
    background-color: #202020;
    width: 100%;
    display: flex;
    border-radius: 10px;
    justify-content: space-evenly;
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: center; */
  }

 
`;
export const Newcircle = styled(Circle)`
  .circle {
  
    width: 200px;
    height: 200px;
   
  }

  .circle-inner {
    width: 180px;
    height: 180px;
  
  }

`;
export default Hostel1
