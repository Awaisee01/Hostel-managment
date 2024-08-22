import React from 'react'
import AccountSideBar from '../Sidebars/AccountSideBar/AccountSideBar'
import AccountDashBoardComponent from '../AccountsComponents/AccountDashBoardComponent'

const Accounts = () => {
  return (
    <div className='d-flex'>
      <AccountSideBar/>
      <AccountDashBoardComponent/>
    </div>
  )
}

export default Accounts
