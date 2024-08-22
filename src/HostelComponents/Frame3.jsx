import React from 'react'
import styled from 'styled-components'
import {FeeCircle} from '../Components/DashComponents/FeesCollection'

const Frame3 = () => {
  return (
    <Main>
      <div className="div">
      <CollectionCricle>
            <h5>Collection </h5>
            <div class="circle">
                <div class="circle-inner">
                  <div class="circle-center">50%</div>
                </div>
              </div>
        </CollectionCricle>
        
      </div>
    </Main>
  )
}
const Main = styled.div`

`;

export const CollectionCricle = styled(FeeCircle)`
background-color: #141414;
border-radius: 10px;
/* width: 20%; */
padding: 25px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.circle {

    width: 180px;
    height: 180px;
    
  }

  .circle-inner {

    width:160px;
    height: 160px;

  }


`;



export default Frame3
