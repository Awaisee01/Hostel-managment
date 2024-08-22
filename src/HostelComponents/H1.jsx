import React, { useState } from 'react'
import Frame1 from './Frame1';
import Frame2 from './Frame2';
import Frame3 from './Frame3';
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";
import { Newcircle } from '../RoomsComponents/Hostel1';
import styled from 'styled-components';
import { Proceed } from '../Components/StudentsComponents/AddRemove';
import Frame4 from './Frame4';
import { Div } from './Btns';
const H1 = () => {
    const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Main>
        <div className="h1  p-4 mt-3">
            <Newcircle className='d-flex justify-content-center align-items-center flex-column col-3'>
            <h4>Hostel 1</h4>
            <p className='col-12 p-2'>Plot number 206, Tihri Nagar, Main Hawai Sadak
            Jaipur - Rajasthan - 302021 India</p>
              <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
             <Proceed className='mt-4' onClick={onOpen}> +Add Room </Proceed> 
             {
                isOpen && (
                    <Formik>
            <Form>
              <NewDiv>
                <div className="students p-3">
                  <div className="top d-flex justify-content-between">
                    <h4> Add Hostel</h4>
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
           
            </Newcircle>
         <div className="div">
         <Frame1/>
          <Frame3/>
          <Frame2/>
          <Frame4/>
         </div>
          </div>
    </Main>
  )
}
const Main = styled.div`
   width: 100%;
    .h1 {
    background-color: #202020;
    width: 100%;
    display: flex;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
  }
  .div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  input {
    font-size: 14px;
    
  }
`;
export const NewDiv = styled(Div)`
.students {
    top: 200px;
    left: 600px;
    height: 350px;
    width: 450px;
  }
  .box-2 input {
    width: 65%;
  }
`;

export default H1
