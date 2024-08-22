import React, { useEffect, useState } from 'react'
import { GoTrash } from 'react-icons/go';
import styled from 'styled-components'
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/FireBase";         
const AllVendor = () => {
    const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const getVendors = async () => {
      try {
        const vendorsRef = collection(db, "vendors");
        onSnapshot(vendorsRef, (snapshot) => {
          const vendorsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setVendors(vendorsList);
        });
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };
    getVendors();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await deleteDoc(doc(db, "vendors", id));
      // toast.success("Student Deleted Successfully");
    } catch (error) {
      console.error("Error deleting student: ", error);
      // toast.error("Error deleting student");
    }
  };
  return (
    <Main>
       <div className="divi mt-2 ">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="fire mt-3 col-6 d-flex justify-content-between  p-1"
          >
            <div className="d-flex"> 
                <p className="ms-4 mt-3"> {vendor.name} </p>
            </div>
          <div className=' mt-3'>
          <p>${vendor.amount}</p>
          </div>
            <i><GoTrash onClick={() => deleteStudent(vendor.id)} /></i>
          </div>
        ))}
      </div>
    </Main>
  )
}
const Main = styled.div`
  .top-flex {
    position: relative;
    display: flex;
    justify-content: space-evenly;
  }
  .divi{
  overflow: auto;
  height: 550px;

  }

 
  .fire {
    background-color: #111111;
    border-radius: 10px;
  }
  .fire i {
    font-size: 35px;
  }



`;
export default AllVendor
