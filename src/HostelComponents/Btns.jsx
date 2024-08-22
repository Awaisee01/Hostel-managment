import React, { useState } from 'react'
import styled from 'styled-components'
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";
import { Proceed } from '../Components/StudentsComponents/AddRemove'
import { Back } from '../Components/StudentsComponents/AddRemove'
const Btns = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Main>
      <Back>Total Hostels 4</Back>
      <Proceed onClick={onOpen}>+Add Hostel</Proceed>
      {isOpen && (
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
          >
            <Form>
              <Div>
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
                      placeholder="Name of Hostel"
                    />
                  </div>
                  <div className="box-1 d-flex justify-content-between">
                   
                    <Field
                      type="text"
                      name="contact"
                      placeholder="Number of Floors"
                    />
                  </div>
                  <div className="box-1 d-flex justify-content-between">
                    
                    <Field
                      type="text"
                      name="emergency"
                      placeholder="Number of Kitchens/ Cafeterias"
                    />
                  </div>
                  <div className="box-1">
                    <Field
                      type="email"
                      placeholder="Number of Washrooms"
                      name="email"
                      id=""
                    />
                  </div>
                  <div className="top d-flex justify-content-between mt-3">
                    <h4>Hostel Address</h4>
                  </div>
                  <div className="box-1">
                    <Field
                      type="text"
                      name="address"
                      placeholder="Address Line 1"
                    />
                  </div>
                  <div className="box-2 d-flex justify-content-between">
                    <Field
                      type="text"
                      name="line"
                      className="col-3 me-2"
                      placeholder="Address Line 2"
                    />
                    <Field type="text" name="pincode" placeholder="Pincode" />
                  </div>
                  <div className="box-2 d-flex justify-content-between">
                    <Field
                      type="text"
                      name="district"
                      className="me-2"
                      placeholder="District"
                    />
                    <Field
                      type="text"
                      name="state"
                      className="me-2"
                      placeholder="State"
                    />
                    <Field
                      type="text"
                      name="country"
                      className="me-2"
                      placeholder="Country"
                    />
                  </div>
                  <div className="btnss d-flex justify-content-between mt-4">
                    <Proceed onClick={onClose} >Proceed</Proceed>
                    <Back onClick={onClose}>Back</Back>
                  </div>
                </div>
              </Div>
            </Form>
          </Formik>
        )}
    </Main>
  )
}
const Main = styled.div`
display: flex;
width: 45%;
justify-content: space-between;
margin-top: 10px;



`;
export const Div = styled.div`
   right: 0px;
    top: 0px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    width: 100%;
    height: 100%;
    z-index: 7888;
.students {
    border-radius: 10px;
    color: black;
    right: 600px;
    top: 70px;
    position: absolute;
    height: 650px;
    width: 600px;
    background-color: #2e2e2e;
  }
 
 


  input {
    background-color: #111111;
    border-radius: 10px;
    border: none;
    outline: none;
    height: 50px;
    padding: 20px;
    color: #b0b0b0;
    margin-top: 10px;
    align-content: center;
    /* font-size: 14px; */
    
  }

  .students i {
    font-size: 20px;
    cursor: pointer;
  }

  .box-1 input {
    width: 100%;
  }

  .box-2 input {
    width: 75%;
  }
`;
export default Btns
