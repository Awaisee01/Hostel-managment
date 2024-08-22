import React, { useState } from "react";
import styled from 'styled-components';
import AccountSideBar from './AccountSideBar';
import { RxCross1 } from "react-icons/rx";
import { Formik, Form, Field } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/FireBase";
import AllVendor from "../../AccountsComponents/AllVendor";
const Vendor = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const addVendors = async (vendors) => {
    try {
      const vendorRef = collection(db, "vendors");
      onClose();

      await addDoc(vendorRef, vendors);
      // toast.success("Student Added Successfully");
      onClose();
    } catch (error) {
      console.error("Error adding student: ", error);
      // toast.error("Error adding student");
    }
  };
  return (
    <Main>
    <AccountSideBar />
    <div className='m-4 col-9'>
     <div className='d-flex  col-12 justify-content-between'>
     <div>
     <h1>Vendors</h1>
     <p>Showing Total Vendors</p>
     </div>
     <div>
      <button onClick={onOpen}>+Add Vendor</button>
      {isOpen && (
          <Formik
            initialValues={{
              name: "",
              amount: "",
            }}
            onSubmit={(values) => {
              addVendors({ name: values.name, amount: values.amount });
            }}
          >
            <Form>
              <div className="div">
                <div className="students p-3">
                  <div className="top d-flex justify-content-between">
                    <h4> Add Vendor</h4>
                    <i>
                      <RxCross1 onClick={onClose} />
                    </i>
                  </div>
                  <div className="box-1">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name of Vendor"
                    />
                  </div>
                  <div className="box-1 d-flex justify-content-between">
                    
                    <Field
                      type="text"
                      name="amount"
                      placeholder="GSTIN / LLP No. / Prop No."
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
                  <div className="btnss d-flex justify-content-center mt-4">
                 
                      <button type="submit">Proceed</button>
                   
                
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        )}
     </div>
     </div>

      <div>
      <AllVendor/>
      </div>
    </div>
    </Main>
  )
}
const Main = styled.div`
display: flex;
width: 100%;
button{
  height: 70px;
  width: 300px;
  color: white;
  background-color: #00868D;
  outline: none;
  border: none;
}
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
export default Vendor
