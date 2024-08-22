import React, { useState } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/FireBase";
import { Button } from '../../Components/StudentsComponents/AddRemove';
const GrantLeaveBtn = () => {
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    const addleave = async (leave) => {
      try {
        const leaveRef = collection(db, "leave");
        onClose();
  
        await addDoc(leaveRef, leave);
        // toast.success("Student Added Successfully");
        onClose();
      } catch (error) {
        console.error("Error adding student: ", error);
        // toast.error("Error adding student");
      }
    };
  return (
    <Main>
      <New onClick={onOpen}>Grant Leave</New>
      {isOpen && (
          <Formik
            initialValues={{
              name: "",
              reason: "",
              date: "",
            }}
            onSubmit={(values) => {
                addleave({ name: values.name, reason: values.reason, date: values.date, });
            }}
          >
            <Form>
              <div className="div">
                <div className="students p-3">
                  <div className="top d-flex justify-content-between">
                    <h4>Grant Leave</h4>
                    <i>
                      <RxCross1 onClick={onClose} />
                    </i>
                  </div>
                  <div className="box-1">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name of Students"
                    />
                  </div>
                  <div className="box-1 d-flex justify-content-between">
                    <Field
                      type="text"
                      name="leave"
                      placeholder="Remark for Leave"
                    />
                  </div>
                  <div className="top d-flex justify-content-between mt-3">
                    <h4>Leave Duration</h4>
                  </div>
                  <div className="box-1">
                    From
                    <Field
                      type="date"
                      name="date"
                    
                    />
                  </div>
                  <div className="box-1">
                    To
                    <Field
                      type="date"
                      name="date"
                    
                    />
                  </div>
                
                  <div className="btnss d-flex justify-content-between mt-4">
                    
                      <button type="submit">Proceed</button>
        
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        )}
    </Main>
  )
}
const Main = styled.div`


  .students {
    border-radius: 10px;
    color: black;
    right: 500px;
    top: 70px;
    position: absolute;
    height: 550px;
    width: 500px;
    background-color: #2e2e2e;
  }



  .div {
    right: 0px;
    top: 0px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    width: 100%;
    height: 100%;
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
  }

  .students i {
    font-size: 20px;
    cursor: pointer;
  }

  .box-1 input {
    width: 100%;
  }

 

 
  button{
height: 60px;
  width: 250px;
  background-color: #00868d;
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  }

`;
const New = styled(Button)`
width: 200px;
height: 70px;
margin-top: 30px;

`;
export default GrantLeaveBtn
