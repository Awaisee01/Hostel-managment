import React, { useState } from 'react'
import RoomSidebar from './RoomSidebar'
import Search from '../../RoomsComponents/Search'
import styled from 'styled-components'
import { Proceed } from '../../Components/StudentsComponents/AddRemove'
import { Back } from '../../Components/StudentsComponents/AddRemove'
import {NewDiv} from '../../HostelComponents/H1'
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";

import ComponentRoom from '../../Roomss/ComponentRoom';

const Roomss = () => {
  const top = [
    {
      id: 1,
      n: "Occupied",
      t: "358",
      color : "#00FFF5",
    },
    {
      id: 1,
      n: "Vacant",
      t: "98",
      color : "#FFE605",
    },
    {
      id: 1,
      n: "Types",
      t: "14",
    },
    {
      id: 1,
      n: "Tenants",
      t: "750",
    }
  ]

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Main>
    <RoomSidebar/>
    <div className='center col-lg-9'>
    <Search/>
    <div className='d-flex col-5 justify-content-between  mt-3'>
    <Back>Total Rooms 456</Back>
    <Proceed onClick={onOpen}>+Add Rooms</Proceed>
    {
                isOpen && (
                    <Formik>
            <Form>
              <NewDiv>
                <div className="students p-3">
                  <div className="top d-flex justify-content-between">
                    <h4> Add Rooms</h4>
                    <i>
                      <RxCross1 onClick={onClose} />
                    </i>
                  </div>
                  <div className="box-1">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name of Room"
                    />
                  </div>
                  <div className="box-1">
                    <Field
                      type="text"
                      name="occupy"
                      placeholder="Occupancy"
                    />
                  </div>

                  <div className="box-2 d-flex justify-content-between">
                    <Field
                      type="text"
                      name="line"
                      className="col-3 me-2"
                      placeholder="Rent Amount / Guest"
                    />
                    <Field type="text" name="pincode" placeholder="Per Month" />
                  </div>
                  
                  <div className="btnss d-flex justify-content-center mt-4">
                    <Proceed onClick={onClose} >Proceed</Proceed>
                  </div>
                </div>
              </NewDiv>
            </Form>
          </Formik>
                )
             }
    </div>
    <div className='col-8 d-flex mt-3 '>
      {top.map((val, i) => (
            <div className=" col-2 top-1">
              <p>{val.n}</p>
              <p style={{ color: val.color }}> {val.t} </p>
            </div>
          ))}
      </div>
    <div className="over">
      
          <ComponentRoom/>
          <ComponentRoom/>
          <ComponentRoom/>
    </div>
    </div>

  </Main>
  )
}
const Main = styled.div`
display: flex;
height: 90vh;
.top-1{
  background-color: #141414;
  padding: 15px;
  margin: 5px;
  border-radius: 10px;
  line-height: 20px;
}
.top-2{
  
  width:22%;

}
.top-1 p{
  font-size: 18px;
}
.fex i{
  font-size: 30px;
  align-content: center;
}

.fex{
  background-color: #202020;
  height: 100% ;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.total{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.over{
  height: 53%;
  overflow: auto;
  padding: 10px;
}
`;

export default Roomss
