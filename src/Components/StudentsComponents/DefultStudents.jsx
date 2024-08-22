import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import { CiShare1, CiSearch } from "react-icons/ci";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/FireBase";
import { FaRegUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import AddDefultModel from './AddDefultModel';
const DefultStudents = () => {
  const [defult, setDefult] = useState([]);

  useEffect(() => {
    const getDefult = async () => {
      try {
        const defultRef = collection(db, "defult");
        onSnapshot(defultRef, (snapshot) => {
          const defultList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDefult(defultList);
        });
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };
    getDefult();
  }, []);
  const deleteDefult = async (id) => {
    try {
      await deleteDoc(doc(db, "defult", id));
      // toast.success("Student Deleted Successfully");
    } catch (error) {
      console.error("Error deleting student: ", error);
      // toast.error("Error deleting student");
    }
  };
  const filterDefult = (e) => {
    const value = e.target.value.toLowerCase();
    const defultRef = collection(db, "defult");
    onSnapshot(defultRef, (snapshot) => {
      const defultList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredDefult = defultList.filter((defult) =>
        defult.name?.toLowerCase().includes(value)
      );
      setDefult(filteredDefult);
    });
  };

  return (
    <Defult>
     <div className="">
     <div className="students ">
        <h5>
        Defaulters Students <CiShare1 />
        </h5>
        <div className="top-flex">
          <i>
            <CiSearch />
          </i>
          <input
            onChange={filterDefult}
            type="text"
            placeholder="Search ..."
          />
          <AddDefultModel/>
        </div>
      </div>
      <div className="divi mt-2 ">
        {defult.map((defults) => (
          <div
            key={defults.id}
            className="fire mt-3 d-flex justify-content-between "
          >
            <div className="d-flex col-lg-12 flex-column  p-2">
              <div className='d-flex mb-2'>
              <i>
                <FaRegUserCircle />
              </i>
              <p className="ms-4 mt-3">
                {defults.name}
              </p>
              </div>
              <p>
                {defults.bad}
              </p>
             <div className='d-flex brod'>
             <p className='col-5 p-2'>
                FIne : {defults.fine}
              </p>
              <p className='col-5 p-2 '>
              <SlCalender /> {defults.date}
              </p>
             
             </div>
             <div className='d-flex justify-content-between'>

             <Remove  onClick={() => deleteDefult(defults.id)}> Remove Defaulter </Remove>
             <Send>Send Payment Link</Send>
             </div>
            </div>
           
          </div>
        ))}
      </div>
     </div>
    </Defult>
  )
}
const Defult = styled.div`
  background-color:#2E2E2E;
  width: 45%;
  height: 400px;
  border-radius: 10px;
  margin-top: 13px;
  padding: 10px;

  .top-flex {
    position: relative;
    display: flex;
    justify-content: space-evenly;
  }
  .fire i {
    font-size: 35px;
  }
  
  .fire{
    line-height: 10px;
    background-color: #111111;
    border-radius: 10px;
    
  }
  .divi{
    height: 290px;
    overflow: auto;
  }
  .brod p{
    border: 1px solid #2E2E2E
    ;
    margin-right: 15px;
    text-align: center;
    border-radius: 10px;
  }
  .fire p{
    font-size: 18px;
    align-content: center;
  }
  input {
    width: 70%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 45px;
    background-color: #111111;
    border-radius: 10px;
    color: white;
  }
  .top-flex i {
    top: -2px;
    left: 13px;
    width: 25px;
    height: 25px;
    font-size: 30px;
    position: absolute;
    color: #b0b0b0;
  }
`;


const Send = styled.div`

background: transparent;
  width: 45%;
  height: 50px;
  border: 2px solid #00fff5;
  text-align: center;
  align-content: center;
  color: #00fff5;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

`;
const Remove = styled(Send)`
  border: 2px solid #ff2a2a;
  color: #ff2a2a;
`;

export default DefultStudents
