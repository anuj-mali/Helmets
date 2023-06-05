import React from 'react';
import styled from 'styled-components';

const Feedback = () => {
  return (
    <>
    <Wrapper>
        <div className="container my-4">
            <p>Customers Feedback</p>
        <div className="grid grid-three-column border">
            <div className='border'>
                
            </div>
            <div>
                Hello
            </div>
            <div>
                Hello
            </div>
        </div>
        </div>
    </Wrapper>

    </>
  )
}
const Wrapper =styled.section`
.container {
    max-width: 75%;
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
  }
  
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .border{
    border-style: solid;
  }
  `;

export default Feedback