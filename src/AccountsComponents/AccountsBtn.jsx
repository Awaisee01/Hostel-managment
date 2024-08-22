import React from 'react'
import styled from 'styled-components';
import { Button } from '../Components/StudentsComponents/AddRemove';
import { Remove } from '../Components/StudentsComponents/AddRemove';
const AccountsBtn = () => {
  return (
    <Main>
      <Button className='btnd'>  Request Payment</Button>
      <Remove className='btnd'> Make Payout</Remove>
    </Main>
  )
}
const Main = styled.div`
.btnd{
    width: 350px;
    margin: 20px;
}
`;
export default AccountsBtn
