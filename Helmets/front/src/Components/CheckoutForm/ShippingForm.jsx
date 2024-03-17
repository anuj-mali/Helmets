import React, { useState } from 'react';

const ShippingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone,setPhone] = useState('');
  const [city, setCity] = useState('Kathmandu');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form submission logic here
    // Access the collected data from the state variables (name, email, address, city)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={handlePhoneChange} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} required />
      </div>
      <div class="city-field">
          <label for="city">City:</label>
          <select id="city">
            <option value="Kathmandu">Kathmandu</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Bhaktapur">Bhaktapur</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
    </form>
  );
};

export default ShippingForm;
