import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CiShare1, CiSearch } from "react-icons/ci";
import { MdFilterList } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/FireBase";
import { Button } from "./Top";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const studentsRef = collection(db, "students");
        onSnapshot(studentsRef, (snapshot) => {
          const studentsLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setStudents(studentsLists);
        });
      } catch (error) {
        console.error("Error fetching students: ", error);
      }
    };
    getStudents();
  }, []);

  const filterStudents = (e) => {
    const value = e.target.value.toLowerCase();
    const studentsRef = collection(db, "students");
    onSnapshot(studentsRef, (snapshot) => {
      const studentsLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const filteredStudents = studentsLists.filter((student) =>
        student.name?.toLowerCase().includes(value)
      );
      setStudents(filteredStudents);
    });
  };

  const deleteStudent = async (id) => {
    try {
      await deleteDoc(doc(db, "students", id));
      // toast.success("Student Deleted Successfully");
    } catch (error) {
      console.error("Error deleting student: ", error);
      // toast.error("Error deleting student");
    }
  };

  return (
    <Mainn>
      <div className="students ">
        <h5>
          Students <CiShare1 />
        </h5>
        <div className="top-flex">
          <i>
            <CiSearch />
          </i>
          <input
            onChange={filterStudents}
            type="text"
            placeholder="Search ..."
          />
          <NewButton>
            <MdFilterList /> Filter
          </NewButton>
        </div>
      </div>
      <div className="divi mt-2 ">
        {students.map((student) => (
          <div
            key={student.id}
            className="fire mt-3 d-flex justify-content-between p-1"
          >
            <div className="d-flex col-lg-6">
              <i>
                <FaRegUserCircle />
              </i>
              <i style={{ fontSize: "20px" }} className="ms-4 mt-3">
                {student.name}
              </i>
            </div>
            <i>
              <GoTrash onClick={() => deleteStudent(student.id)} />
            </i>
          </div>
        ))}
      </div>
      {/* <ToastContainer /> */}
    </Mainn>
  );
};

export const Mainn = styled.div`
  background-color: #2e2e2e;
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
  .divi{
    height: 290px;
  overflow: auto;

  }
  input {
    width: 55%;
    height: 50px;
    border: none;
    outline: none;
    padding-left: 35px;
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
  .fire {
    background-color: #111111;
    border-radius: 10px;
  }
  .fire i {
    font-size: 35px;
  }
`;

const NewButton = styled(Button)`
  width: 30%;
`;

export default AllStudents;
