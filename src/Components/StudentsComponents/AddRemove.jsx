import React, { useState } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/FireBase";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const AddRemove = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const addStudent = async (students) => {
    try {
      const studentRef = collection(db, "students");
      onClose();

      await addDoc(studentRef, students);
      // toast.success("Student Added Successfully");
      onClose();
    } catch (error) {
      console.error("Error adding student: ", error);
      // toast.error("Error adding student");
    }
  };
  //   const [showAllStudent, setShowAllStudent] = useState(false);

  //   const handleOpenClick = () => {
  //     setShowAllStudent(prevState => !prevState);
  //   };
  //  const handleRemoveClick = () =>{
  //   setShowAllStudent(prevState => !prevState);
  //  }
  return (
    <>
      <Main>
        <Button onClick={onOpen}>+ Add Students</Button>
        <Remove>Remove Student</Remove>

        {isOpen && (
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            onSubmit={(values) => {
              addStudent({ name: values.name, email: values.email });
            }}
          >
            <Form>
              <div className="div">
                <div className="students p-3">
                  <div className="top d-flex justify-content-between">
                    <h4> Add Students</h4>
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
                  <div className="box-2 d-flex justify-content-between">
                    <label>+92</label>
                    <Field
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="box-2 d-flex justify-content-between">
                    <label>+92</label>
                    <Field
                      type="text"
                      name="emergency"
                      placeholder="Emergency Contact Number"
                    />
                  </div>
                  <div className="box-1">
                    <Field
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      id=""
                    />
                  </div>
                  <div className="top d-flex justify-content-between mt-3">
                    <h4>Residential Address</h4>
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
                    <Proceed type="submit">
                      <button type="submit">Proceed</button>
                    </Proceed>
                    <Back onClick={onClose}>Back</Back>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        )}
        {/* <ToastContainer /> */}
      </Main>

      {/* <Neww>
       {showAllStudent && (
     <>
      <i><RxCross1 onClick={handleRemoveClick} /></i>
      <AllStudents/>
     </>
       )}
      
      </Neww> */}
    </>
  );
};
// const Neww = styled(Mainn)`
// position: absolute;
// `;
const Main = styled.div`
  height: 200px;
  margin: 20px;
  min-width: 20%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  button {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
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

  .box-2 input {
    width: 75%;
  }

  label {
    background-color: #3e3e3e;
    width: 20%;
    height: 50px;
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
    align-content: center;
    color: #b0b0b0;
    font-size: 18px;
  }
`;

 export const Button = styled.div`
  background: transparent;
  width: 80%;
  height: 40%;
  border: 2px solid #00fff5;
  text-align: center;
  align-content: center;
  color: #00fff5;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const Remove = styled(Button)`
  margin-top: 19px;
  border: 2px solid #ff2a2a;
  color: #ff2a2a;
`;

export const Proceed = styled(Button)`
  height: 60px;
  width: 150px;
  background-color: #00868d;
  border: none;
  color: #fff;
  font-size: 14px;
`;

export const Back = styled(Button)`
  height: 60px;
  width: 150px;
  border: 2px solid #3f3f3f;
  background-color: #2e2e2e;
  color: #fff;
  font-size: 14px;  

`;

export default AddRemove;
