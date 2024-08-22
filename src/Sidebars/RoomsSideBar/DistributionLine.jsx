import React from 'react'
import styled from 'styled-components'

const DistributionLine = () => {
  return (
    <Main>
      <div className="distribution-container">
      <div className="distribution-section red"></div>
      <div className="distribution-section purple"></div>
      <div className="distribution-section blue"></div>
      <div className="distribution-section green"></div>
      <div className="distribution-section yellow"></div>
      <div className="distribution-section cgreeen"></div>

    </div> 
    </Main>
  )
}
const Main = styled.div`
.distribution-container {
  display: flex;
  height: 20px;
  width: 100%;
  border-radius: 10px;
}

.distribution-section {
  height: 50%;
}

.red {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  background-color: #CE1A1A;
  flex: 3;
}

.purple {
  background-color: #9747FF;
  flex: 0.5;
}

.blue {
  background-color: blue;
  flex: 1;
}

.green {
  background-color: #00FFA3;
  flex: 1;
}

.yellow {
  background-color: #FFE605;
  flex: 1;
}
.cgreeen {
  background-color: #0094FF;
  flex: 3;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

`;
export default DistributionLine
