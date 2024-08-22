import React from 'react'
import RoomSidebar from '../Sidebars/RoomsSideBar/RoomSidebar'
import Search from '../RoomsComponents/Search'
import styled from 'styled-components'
import Hostel1 from '../RoomsComponents/Hostel1'
import Hostel2 from '../RoomsComponents/Hostel2'
import Hostel3 from '../RoomsComponents/Hostel3'

const Rooms = () => {
  return (
    <Main>
      <RoomSidebar/>
      <div className='center'>
      <Search/>
      <div className="fex mt-3">
      <Hostel1/>
      <Hostel2/>
      <Hostel3/>
      </div>
      </div>
    </Main>
  )
}
const Main = styled.div`
display: flex;
height: 90vh;
.center{
width: 100%;
}
.fex{
  padding: 5px;
  height: 600px;
  overflow: auto;
  width: 100%;
  border-radius: 20px;
}
`;
export default Rooms
