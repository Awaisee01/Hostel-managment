import React from 'react'
import styled from 'styled-components'
import {  CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <Main>
        <i><CiSearch /></i>
      <input type="text" placeholder='Search...'/>
    </Main>
  )
}
const Main = styled.div`
input{
    margin-top: 20px;
    width: 350px;
    height: 60px;
    border-radius: 10px;
    background-color: #141414;
    border: none;
    padding-left: 50px;
    outline: none;
    color: #B0B0B0;
}
i{
    position: absolute;
    font-size: 34px;
    top: 80px;
    margin-left: 10px;
}


`;
export default Search
