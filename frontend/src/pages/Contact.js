import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000); 
  };

  return (
    <div className='theContact'>
      {!submitted ? (
        <div>
          <p className='paragraph'>Connect with us to explore limitless possibilities. Your feedback matters; let's make your inquiries or suggestions the cornerstone of our progress</p>
          <br /><br /><br /><br /><br />
          <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <p className='paragraph'>Thank you! Your message has been sent.</p>
        
      )}
    </div>
  );
};

export default Contact;