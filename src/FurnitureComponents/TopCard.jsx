import React from 'react'
import styled from 'styled-components'

const TopCard = () => {
  return (
    <Main>
      <div className="dashboard">
    <div className=' col-4  d-flex flex-wrap justify-content-evenly '>

    <div className="card">
        <div className="title">Total</div>
        <div className="value">45,689</div>
      </div>
      <div className="card">
        <div className="title">Utilized</div>
        <div className="value utilized">24,569</div>
      </div>
      <div className="card">
        <div className="title">Unutilized</div>
        <div className="value unutilized">21,120</div>
      </div>
      <div className="card">
        <div className="title">Damaged</div>
        <div className="value damaged">569</div>
      </div>
      <div className=" full  col-12 ">
        <div className="title ms-3">Categories : 56</div>
        <button className="view-all ms-3">View All</button>
      </div>
    </div>
      
      <div className=" main d-flex    col-6 justify-content-between ">
      <div className=' col-5'>
      <div className="title">Expense Monitor</div>
        <div className="mb-4">
          <p>Total Expense</p>
          <p style={{color: '#FFE605'}}> 5,24,45,685</p>
        </div>
        <div className=" mt-3 ">
          <p>Unpaid Payments</p>
          <p style={{color: '#FF1010'}}>5,24,45,685</p>
      </div>
        </div>
      <div className=' col-6  '>
      <div className=" d-flex m-2">
        <div className="cards">
          <p>Highest Expense</p>
          <p>Beds</p>
          <p style={{color:'#FF05C8'}}>24,45,685</p>
        </div>
      </div>
      <div className="d-flex m-2">
        <div className="cards">
          <p>Lowest Expense</p>
          <p>Irons</p>
          <p style={{color:'#00FFF5'}}>4,45,685</p>
        </div>
      </div>
      </div>
      </div>
      
    </div>
    </Main>
  )
}
const Main = styled.div`

.dashboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 10px;
  background-color: #141414;
  border-radius: 10px;
  margin-top: 10px;
}
div{
    font-size: 10px;

}
.main{
  background-color: #000000;
    padding: 10px;
    border-radius: 10px;
}
.card {
  background-color: #000000;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin: 5px;
}
.cards{
  border-radius: 10px;
  color: white;
  padding: 10px;
  border: 1px solid #353535;
}

.full {
  background-color: #303030;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
}


.title {
  font-size: 14px;
  margin-bottom: 10px;
}

.value {
  font-size: 14px;
  font-weight: bold;
}

.utilized {
  color: #24e5ff;
}

.unutilized {
  color: #ffec24;
}

.damaged {
  color: #ff2465;
}

.view-all {
  padding: 10px 20px;
  background-color: #404040;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.expense-monitor  {
  background-color: #303030;
  margin-bottom: 10px;
}

.expense {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.expense-value {
  font-size: 18px;
  font-weight: bold;
}

.expense-value.unpaid {
  color: #ff2465;
}

.expense-value.highest {
  color: #e524ff;
}

.expense-value.lowest {
  color: #24ff8a;
}
`;

export default TopCard
