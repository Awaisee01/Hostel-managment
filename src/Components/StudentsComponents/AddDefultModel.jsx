import React, { useState } from 'react'
import styled from 'styled-components'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/FireBase";
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";

const AddDefultModel = () => {

    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    const addDefult = async (defult) => {
      try {
        const defultRef = collection(db, "defult");
        onClose();
  
        await addDoc(defultRef, defult);
        // toast.success("Student Added Successfully");
        onClose();
      } catch (error) {
        console.error("Error adding student: ", error);
        // toast.error("Error adding student");
      }
    };
  return (
    <Main >
     <NewButton onClick={onOpen}>+ADD</NewButton>

    {isOpen && (
          <Formik
            initialValues={{
              name: "",
              bad: "", 
              fine: "",
              date: "",
            }}
            onSubmit={(values) => {
                addDefult({ name: values.name, bad: values.bad, fine: values.fine, date: values.date });
            }}
          >
            <Form>
              <div className='div'>
                <div className="students p-3">
                  <div className="top d-flex justify-content-between">
                    <h4> Add Defaulter</h4>
                    <h4> 
                      <RxCross1 onClick={onClose} />
                    
                    </h4>
                    
                  </div>
                  <div className="box-1 m-3">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name of Students"
                    />
                  </div>
                  <div className="box-1 m-3">
                    <Field
                      type="text"
                      placeholder="Write Default"
                      name="bad"
                      id=""
                    />
                  </div>
                  <div className="box-1 m-3">
                    <Field
                      type="text"
                      placeholder="Amount"
                      name="fine"
                      id=""
                    />
                  </div>
                  <div className="box-1 m-3 d-flex flex-column ">
                    <label className='mb-2' htmlFor="">Due Date</label>
                    <Field
                      type="date"
                      
                      name="date"
                      id=""
                    />
                  </div>
                 
                 
                  <div className="mt-5 ms-3">

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

input[type="file"] {
align-content: center;
}
.div{
    position: absolute;
    top: -356px;
    height: 100vh;
    width: 1790px;
    left: -995px;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
}

.students {

    border-radius: 10px;
    color: black;
    right: 500px;
    top: 60px;
    position: absolute;
    height: 650px;
    width: 600px;
    background-color: #2e2e2e;
    button{
        height: 60px;
  width: 250px;
  background-color: #00868d;
  border: none;
  color: #fff;
  border-radius:10px ;
    }
  }

`;
const NewButton = styled.div`
background-color: #00FFF5;
height: 50px;
width: 100px;
text-align: center;
align-content: center;
border-radius: 10px;
color: #000000;

 
`;


export default AddDefultModel
