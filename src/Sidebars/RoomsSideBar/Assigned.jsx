import React from 'react'
import RoomSidebar from './RoomSidebar'
import Search from '../../RoomsComponents/Search'
import styled from 'styled-components'
import Btns from '../../HostelComponents/Btns'
import H1 from '../../HostelComponents/H1'
import Box1 from '../../AssignConponents/Box1'


const Assigned = () => {
  return (
    <div>
      <Main>
    <RoomSidebar/>
    <div  className='cen col-9'>
        <Search/>
    <div className='cente mt-3 '>
      <Box1/>
      <Box1/>
      <Box1/>
      <Box1/>
    </div>
    </div>

  </Main>

    </div>
  )
}
const Main = styled.div`
display: flex;
height: 90vh;

p{
    font-size: 14px;
    margin-bottom: 0px !important;
}
.cente{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  height: 600px;
  border: 30px;
}
.fex{
  }

`;
export default Assigned
