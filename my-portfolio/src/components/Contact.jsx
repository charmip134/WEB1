import React from 'react';


const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <form action="/send-message" method="POST">
      <h4>
        First Name:
        <input type="text" name="firstName" />
      </h4>
      <h4>
        Last Name:
        <input type="text" name="lastName" />
      </h4>
      <h4>
        Contact No:
        <input type="tel" name="contactNo" />
      </h4>
      <h4>
        Email Address:
        <input type="email" name="email" />
      </h4>
      <h4>
        Message:
        <textarea name="message"></textarea>
        </h4>
      <button type="submit">Send</button>
      
    </form>
  </div>
);

export default Contact;

