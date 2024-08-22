import React from 'react'
import styled from 'styled-components';

const DebitComponent = () => {
    const transactions = [
        {  name: 'Ramakant Sharma', amount: '₹1,56,000' },
        { name: 'Ramakant Sharma', amount: '₹1,56,000' },
        {  name: 'Ramakant Sharma', amount: '₹1,56,000' },
        { name: 'Ramakant Sharma', amount: '₹1,56,000' },
        {  name: 'Ramakant Sharma', amount: '₹1,56,000' },
        { name: 'Ramakant Sharma', amount: '₹1,56,000' },
      ];
  return (
    <Main>
        <div className="credit ">
          <h2>Debit</h2>
          {transactions.map((transaction, index) => (
              <div key={index} className='d-flex  justify-content-between p-2 mt-2'>
                <p>{transaction.name}</p>
                <p style={{color: "#FF2A2A"}}>{transaction.amount}</p>

              </div>
            ))}
        </div>
    </Main>
  )
}
const Main = styled.div`
width: 40%;
.credit {
  background-color: #202020;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}
.d-flex {
    border-radius: 10px;
   background-color: #111111;
}


`;
export default DebitComponent
