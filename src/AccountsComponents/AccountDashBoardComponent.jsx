import React from 'react'
import styled from 'styled-components'
import FeesCollection from '../Components/DashComponents/FeesCollection';
import CreditComponenet from './CreditComponenet';
import DebitComponent from './DebitComponent';
import AccountsBtn from './AccountsBtn';

const AccountDashBoardComponent = () => {
  return (
    <Main>
     <div className='d-flex'>
     <FeesCollection  mode={"AcDashboard"}/>
     <AccountsBtn/>
 
     </div>

      <div className=' d-flex justify-content-between mt-4 col-9'>
        <CreditComponenet/>
        <DebitComponent/>
      </div>
    </Main>
  )
}
const Main = styled.div`
width: 100%;
`;
export default AccountDashBoardComponent
