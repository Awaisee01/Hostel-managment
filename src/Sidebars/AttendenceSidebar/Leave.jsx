import React from 'react'
import AttendenceSideBar from './AttendenceSideBar'
import styled from 'styled-components'
import { CollectionCricle } from '../../HostelComponents/Frame3'
import { CiShare1 } from "react-icons/ci";
import GrantLeaveBtn from './GrantLeaveBtn';
import StudentsLeave from './StudentsLeave';
const Leave = () => {

  const box = [
    { name: 'Total Students', t : 5546,  },
    { name: 'Outside Hostel', t :589 ,  color :  "#FFE605" , },
    { name: 'Inside Hostel',  t :4852 ,   color :  "#00FFF5" , },
    { name: 'On Leave',       t :105 ,  color :  "#FF05C8" , },
   
];

  return (
    <Main>
  <AttendenceSideBar/>
    <div className="fexd ">
    <div className='UP'>
    <Circle>
    <h5>Collection </h5>
            <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>

    </Circle>
  <div className='bb'>
  {box.map((box, index) => (
                  <div className="cardf d-flex justify-content-between" key={index}>
                     <div>
                     <p>{box.name}</p>
                     <p style={{color : box.color}}>{box.t}</p>
                     </div>
                    <i style={{color : box.color}}> <CiShare1 /></i>
                  </div>
              ))}
  </div>
    </div>
    <StudentsLeave/>

    </div>
      <GrantLeaveBtn/>
    </Main>
  )
}
const Main = styled.div`
display: flex;
.UP{
  background-color: #2E2E2E;
  width: 900px;
  display: flex;
  justify-content: space-between  ;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
}
.cardf{
background-color: #111111;
border-radius: 10px;
padding: 10px 10px;
margin: 20px;
width: 40%
}

.bb{

  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}
 .cardf i{
  font-size: 30px;
}
`;
const Circle = styled(CollectionCricle)``;
export default Leave
