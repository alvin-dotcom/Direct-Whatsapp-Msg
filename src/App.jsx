import React, { useState } from 'react';
import './index.css'; // Import CSS file for styling

function WhatsAppDirectMessage() {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (e) => {
    let input = e.target.value.replace(/\D/g, '').slice(0, 5);
    if (!input.startsWith('+')) {
      input = '+' + input;
    }
    setCountryCode(input);
  };

  function generateWhatsAppLink() {
    const defaultMessage = "Hi there! I'm contacting you via WhatsApp.";
    const message = encodeURIComponent("Hi!");

    const link = `https://api.whatsapp.com/send?phone=${countryCode}${phoneNumber}&text=${message}`;
    const whatsappWindow = window.open(link, '_blank');
    
    setTimeout(() => {
      whatsappWindow.close();
    }, 2000);
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">WhatsApp Direct Message</h1>
        <p>Send a direct message via WhatsApp without saving contact number</p>
        <br />
        <form>
          <div className="input-group">
            <label htmlFor="country_code">Country Code:</label>
            <input
              type="text"
              id="country_code"
              placeholder="Country Code"
              value={countryCode}
              onChange={handleCountryCodeChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="text"
              id="phone_number"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button className="send-btn" onClick={generateWhatsAppLink}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default WhatsAppDirectMessage;
