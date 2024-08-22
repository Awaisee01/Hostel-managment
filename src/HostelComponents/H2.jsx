import React from 'react'
import Frame1 from './Frame1';
import Frame2 from './Frame2';
import Frame3 from './Frame3';
// import { Newcircle } from '../RoomsComponents/Hostel1';  
import { Circlee } from '../Components/DashComponents/Occupy';
import styled from 'styled-components';
import { Proceed } from '../Components/StudentsComponents/AddRemove';
import Frame4 from './Frame4';
const H2 = () => {
  return (
    <Main>
        <div className="h1  p-4 mt-3">
            <Newcircle className='d-flex justify-content-center align-items-center flex-column col-3'>
            <h4>Hostel 2</h4>
            <p className='col-12 p-2 '>Plot number 206, Tihri Nagar, Main Hawai Sadak
            Jaipur - Rajasthan - 302021 India</p>
              <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
             <Proceed className='mt-4'> +Add Room</Proceed> 
            </Newcircle>
         <div className="div">
         <Frame1/>
          <Frame3/>
          <Frame2/>
          <Frame4/>
         </div>
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
  .div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

`;
const Newcircle = styled(Circlee)`
 .circle {
  
  width: 200px;
  height: 200px;
 
}

.circle-inner {
  width: 180px;
  height: 180px;

}

`;

export default H2
