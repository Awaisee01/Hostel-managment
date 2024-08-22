import React from 'react'
import styled from 'styled-components'
import { frame1 } from '../Dummy'
import { frame12} from '../Dummy'
import { frame13 } from '../Dummy'
const Frame1 = () => {
  return (
    <div>
      <Main>
      <div className="main ">
        <div className="box-1 d-flex ">
        {frame1.map((val, i) => (
            <div className=" b">
              <p><span style={{ color: val.color }}>{val.icon}</span> {val.t }</p>
            </div>
          ))}
        
        </div>
        <div className="box-1 d-flex ">
        {frame12.map((val, i) => (
            <div className=" b">
              <p>{val.p} </p>
              <p style={{ color: val.color }}>{val.t }</p>
            </div>
          ))}
        
        </div>
        <div className="box-2 d-flex  ">
        {frame13.map((val, i) => (
            <div className=" b">
              <p>{val.p} </p>
              <p style={{ color: val.color }}>{val.t }</p>
            </div>
          ))}
        </div>
      </div>
    </Main>
    </div>
  )
}
const Main = styled.div`
height: 100%;
 .b{
    width: 80%;
    margin: 15px;
    padding: 8px;
    background-color: #141414;
    border-radius: 10px;
    line-height: 17px; 
    text-align: center;
    align-content: center;
} 
p{
    font-size: 14px;
    margin-bottom: 0px !important;
}
.box-2{
    border-radius: 10px;
    background-color: #141414;

}




`;
export default Frame1
