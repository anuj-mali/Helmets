import React from 'react';
import styled from 'styled-components';


const Contact = () => {
  return (
    <>
    <Wrapper>
        <h4 className='common-heading'>Contact Page</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.5370101697592!2d85.3124786780801!3d27.684107026195875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b52fc9c115%3A0xdd062d24ab70c0d!2sBakhundol%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1684935137380!5m2!1sen!2snp" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="container mt-3">
          <div className="contact-form">
          <form className='contact-inputs'>
              <div class="form-group mb-0">
              <input type="text" id="form4Example1" class="form-control" placeholder='Name' />
              
            </div>

            <div class="form-group mb-0">
              <input type="email" id="form4Example2" class="form-control" placeholder='Email' />
              
            </div>

            <div class="form-group mb-0">
              <textarea class="form-control" id="form4Example3" rows="5" placeholder='Write message'></textarea>
              
            </div>
            <button class="btn btn-lg btn-block">Send</button>
          </form>
        </div>
        </div>
    </Wrapper>
    </>
  )
}
const Wrapper =styled.section`
*{
  margin:auto; 

}
.contact-inputs{
  display: flex;
  flex-direction: column;
  gap:2rem;
}
.common-heading {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-transform: capitalize;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;
    text-align:center;
}

h1 {
  
  font-size: 6rem;
  font-weight: 900;
}

 h2 {

   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}
.container {
  width:40%;
  margin:auto;
}
button{
  max-width:5rem;
}
`;

export default Contact