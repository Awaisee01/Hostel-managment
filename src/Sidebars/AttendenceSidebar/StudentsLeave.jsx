import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/FireBase";
import { FaRegUserCircle } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import styled from 'styled-components';
import { MdOutlineBed } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { RiBuilding2Line } from "react-icons/ri";
const StudentsLeave = () => {
    const [leave, setLeaves] = useState([]);

    useEffect(() => {
      const getLeaves = async () => {
        try {
          const leaveRef = collection(db, "leave");
          onSnapshot(leaveRef, (snapshot) => {
            const leaveList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setLeaves(leaveList);
          });
        } catch (error) {
          console.error("Error fetching students: ", error);
        }
      };
      getLeaves();
    }, []);
  
    const deleteStudent = async (id) => {
      try {
        await deleteDoc(doc(db, "leave", id));
        // toast.success("Student Deleted Successfully");
      } catch (error) {
        console.error("Error deleting student: ", error);
        // toast.error("Error deleting student");
      }
    };
  return (
    <Main>
        <div className="students ">
        <h5>
          Students on Leave
        </h5>

      </div>
      <div className="divi mt-2 ">
        {leave.map((leaves) => (
          <div
            key={leaves.id}
            className="fire mt-3  p-1"
          >
            <div className="d-flex justify-content-between p-2 align-items-center ">
              <p> <FaRegUserCircle /> {leaves.name}</p> 
              <p><CiLogout style={{color : "#FFE605"}} /> 12:25</p>
              <p><MdOutlineBed />  Room:101</p>
              <p><RiBuilding2Line />  H1   </p>
            </div>
            <div className='d-flex  justify-content-between align-items-center p-2'>
                <p>Leave Taken On {leaves.date}</p>
                <p>Duration 7 Days</p>
                <p>Expected Arrival 1 Week Later </p>
                <button onClick={() => deleteStudent(leaves.id)} >Remove Student</button>

            
            </div>
          </div>
        ))}
      </div>
    </Main>
  )
}
const Main = styled.div`
       background-color: #2E2E2E;
       padding: 10px;
       border-radius: 10px;
       margin-left:20px ;
.students{
}
.divi{
    height: 350px;
  overflow: auto;

  }
  .fire {
    background-color: #111111;
    border-radius: 10px;
  }
  .fire i {
    font-size: 35px;
  }
button{
    background-color: transparent;
    width: 150px;
    height: 60px;
    border: 1px solid red;
    outline: none;
    color: red;
    border-radius: 10px;
}

`;
export default StudentsLeave
