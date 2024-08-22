import React, { useState } from 'react'
import styled from 'styled-components'
import img2 from './Vector (1).png'
const Emergency = () => {
    const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Main>
      <div className="divi ">
        <div className="img mt-3">
        <img src={img2} alt="" />
        </div>
        <p>Press only in Case of Emergency</p>
        <button onClick={onOpen}>EMERGENCY</button>
      </div>
      {isOpen && (

        <div>
           asahw
           
        </div>
      )}
    </Main>
  )
}
const Main = styled.div`
height: 200px;
width: 300px;
border-radius: 10px;
background-color: #111111;
.img{
    text-align: center;
    align-content: center;
    height: 90px;
    width: 90px;
    background-color: #f700003b    ;
    border-radius: 50%;
}
.divi{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
button {
height: 50px;
width: 200px;
background: linear-gradient(#FF0808,
#8D0000);
outline: none;
border: none;
}
`;
export default Emergency
