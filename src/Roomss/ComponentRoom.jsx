import React from 'react'
import DistributionLine from '../Sidebars/RoomsSideBar/DistributionLine';
import { RiBuilding2Line } from "react-icons/ri";
import { FaStairs } from "react-icons/fa6";
import { TbSofa } from "react-icons/tb";
import { MdReduceCapacity } from "react-icons/md";
import { CollectionCricle } from '../HostelComponents/Frame3';
import Frame2 from '../HostelComponents/Frame2';
import { MdOutlineBed } from "react-icons/md";
import styled from 'styled-components'


const ComponentRoom = () => {
    const total = [
        {
          id:1,
          p:"Total Rooms",
          t:125  ,
    
        },
        {
          id:1,
          p:"Rent Per Tenant",
          t:  50000  ,
    
        },
        {
          id:1,
          p:"Tenants",
          t:658  ,
    
        },
        {
          id:1,
          p:"Furniture",
          t:125  ,
    
        },
      ]
      const feetop = [
        {
          id: 1,
          icon : <RiBuilding2Line />,
          name : "H1",
        },
        {
          id: 1,
          icon : <FaStairs  />,
          name : "07",
        },
        {
          id: 1,
          icon : <TbSofa  />,
          name : "07",
        },
        {
          id: 1,
          icon : <MdReduceCapacity  />,
          name : "06",
        },
      ]
  return (
    <Div className="fex p-3 mb-3 col-12">
    <div className='1st  col-4'>
      <div className='d-flex align-items-center'>
      <i className=' me-3'><MdOutlineBed /></i>
      <h4> 6 Bedded Bunker</h4>
      </div>
      <div className='col-8  mt-3 total'>
      {total.map((val, i) => (
            <div className=" col-5 top-1">
            <p>{val.p}</p>
            <p> {val.t} </p>
            </div>
          ))}
      </div>
      <div>
        <h4>Distribution</h4>
       <DistributionLine/>
      </div>
    </div>
    <div className='1st  col-4 d-flex flex-column  '>
      <div className='d-flex mb-4'>
      {feetop.map((val, i) => (
            <div className=" col-2 p-3 top-1 top-2">
              <i>{val.icon}</i>
              <span>{val.name}</span>
            </div>
          ))}
      </div>
      <RoomCollection>
            <div>
            <h5>Collection </h5>
            <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
            </div>
    
             
             <div className="price p-2 mb-3">
                <div className='ms-1 '>
                <p>Expected </p>
                <p>52,00,000</p>
                </div>
               
                <div className='ms-1'>
                <p>Remaining </p>
                <p style={{color: '#FFE605'}}>15,60,000</p>
                </div>
               
               
                <div className='ms-1'>
                <p>Collected </p>
                <p style={{color: '#00FFF5'}}>26,00,000</p>
                </div>
              
              
                <div className='ms-1'>
                <p>Overdue </p>
                <p style={{color: '#FF05C8'}}>10,40,000</p>
                </div>
                
                
              </div>
       
         
        </RoomCollection>
    </div>
    <div className='1st col-3'>
      <Frame2/>
    </div>
   
   </Div>
  )
}
const RoomCollection = styled(CollectionCricle)`
display: flex;
flex-direction: row;
width: 100%;
/* padding: 20px; */
.circle {

width: 100px;
height: 100px;

}

.circle-inner {

width:80px;
height: 80px;

}
.price{
  line-height: 20px;
  margin: 12px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
`;
const Div = styled.div`


`;
export default ComponentRoom
