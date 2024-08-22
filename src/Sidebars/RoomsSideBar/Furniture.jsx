import React from 'react'
import RoomSidebar from './RoomSidebar'
import Search from '../../RoomsComponents/Search'
import styled from 'styled-components'
import Btns from '../../HostelComponents/Btns'
import H1 from '../../HostelComponents/H1'
import FurnitueBtn from '../../FurnitureComponents/FurnitueBtn'
import TopCard from '../../FurnitureComponents/TopCard'
import MiddleCard from '../../FurnitureComponents/MiddleCard'
import LastCard from '../../FurnitureComponents/LastCard'


const Furniture = () => {
  return (
    <Main>
    <RoomSidebar/>
    <div className='center col-lg-9'>
    <div className='d-flex align-items-center  col-8 '>
    <Search/>
    <FurnitueBtn/>
    </div>
    <div className="fex  ">
      <TopCard/>
    <div className="grid">
      
    <MiddleCard/>
      <LastCard/>
    </div>

   </div>
    </div>

  </Main>
  )
}
const Main = styled.div`
display: flex;
height: 90vh;

p{
    font-size: 14px;
    margin-bottom: 0px !important;
}

.fex{
}
.grid{
  display: flex;
}

`;
export default Furniture
