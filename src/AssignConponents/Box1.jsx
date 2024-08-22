import React, { useState } from 'react'
import styled from 'styled-components';
import { MdOutlineBed } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";

const Box1 = () => {
    const [rooms, setRooms] = useState(Array(40).fill('available'));

    const handleRoomClick = (index) => {
        const newRooms = [...rooms];
        newRooms[index] = newRooms[index] === 'available' ? 'occupied' : 'available';
        setRooms(newRooms);
    };

    const getStatusClass = (status) => {
        if (status === 'available') return 'room available';
        if (status === 'occupied') return 'room occupied';
    };
  return (
    <Main>
     
      <div className="app">
      <div className='d-flex align-items-center col-12 justify-content-evenly '>
     <i> <MdOutlineBed /></i>
      <h4 className=''>6 Bedded Bunker</h4>
      <div className='sty'>
        Floor No. 7
      </div>
      <div className='d-flex sty'>
    <i className='me-1 '>  <RiBuilding2Line /></i>
      <h5>H1</h5>
      </div>
      </div>
            <div className="room-grid">
                {rooms.map((status, index) => (
                    <div
                        key={index}
                        className={getStatusClass(status)}
                        onClick={() => handleRoomClick(index)}
                    >
                        {index + 101}
                    </div>
                ))}
            </div>
        </div>
    </Main>
  )
}
const Main = styled.div`
.app {
    background-color: #202020;
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
}

.room-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
}

.room {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-size: 14px;
}

.room.available {
    background-color: #111111;
}

.room.occupied {
    background-color: #FF0000;
}

i{
    font-size: 25px;
}
.sty{
    background-color: #111111;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
export default Box1
