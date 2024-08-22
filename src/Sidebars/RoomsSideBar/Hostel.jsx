import React from 'react'
import RoomSidebar from './RoomSidebar'
import Search from '../../RoomsComponents/Search'
import styled from 'styled-components'
import Btns from '../../HostelComponents/Btns'
import H1 from '../../HostelComponents/H1'

const Hostel = () => {
  return (
    <Main>
    <RoomSidebar/>
    <div className='center col-lg-9'>
    <Search/>
    <Btns/>
    <div className="fex mt-3">
      <H1/>
      <H1/>
      <H1/>
      <H1/>
   
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
  padding: 5px;
  height: 500px;
  overflow: auto;
  width: 100%;
  border-radius: 20px;
}

`;
export default Hostel
