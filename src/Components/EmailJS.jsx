import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactEmail() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    subject: '',
    message: ''
  });

  const form = useRef();
  const serviceId = 'service_8pel36j';
  const myPublicKey = 'nTnTLLyPBzgxEpz4o';

  const handleFormChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailRegex.test(value));
  };

  const sendAutoReplyEmail = (e) => {
    e.preventDefault(); // Prevents page reload on send.

    // Template for Auto-Reply
    emailjs.sendForm(serviceId, 'template_nwutrvd', form.current, myPublicKey);
  };

  const sendFormEmail = (e) => {
    e.preventDefault(); // Prevents page reload on send.
    
    // Prevent email form from sending if email address is not valid.
    if (!isValid) {
      return;
    };
    // Prevent form submission if any other inputs in the form are empty.
    const { name, organization, subject, message } = formData;
    if (
      !name.trim() || 
      !organization.trim() || 
      !subject.trim() || 
      !message.trim()
    ) {
      alert('All fields are required.');
      return;
    }

    // Template for Form Email
    emailjs
      .sendForm(serviceId, 'template_k64cu87', form.current, myPublicKey)
      .then(
        () => {
          sendAutoReplyEmail(e);
          alert('Thanks for your message! It has been submitted.');
          form.current.reset();
          setEmail('');
        },
        (error) => {
          alert(`An error occurred: ${error.text}`);
        },
      );
  };

  return (
    <form id="contact-form" ref={form} onSubmit={sendFormEmail}>
      <label htmlFor="name-input">Name:</label>
      <input 
        type="text" 
        id="name-input"
        className="form-elements"
        name="name" 
        placeholder="Your first and last name" 
        onChange={handleFormChange} 
        required 
      />

      <label htmlFor="email-input">Email:</label>
      <input 
        type="email" 
        id="email-input"
        className={!isValid ? "invalid-input form-elements" : "form-elements"}
        name="email" 
        value={email} 
        onChange={handleEmailChange} 
        required 
      />
      {!isValid && 
        <div id="email-error-container">
          <div className="arrow-up"></div> 
          <p id="email-error">Invalid email format</p> 
        </div>
      }

      <label htmlFor="organization-input">Organization:</label>
      <input 
        type="text" 
        id="organization-input" 
        className="form-elements"
        name="organization" 
        onChange={handleFormChange} 
        required 
      />

      <label htmlFor="subject-input">Subject:</label>
      <input 
        type="text" 
        id="subject-input" 
        className="form-elements"
        name="subject" 
        onChange={handleFormChange} 
        required 
      />

      <label htmlFor="contact-message">Message:</label>
      <textarea 
        id="contact-message" 
        className="form-elements"
        name="message" 
        placeholder="Start typing your message here..." 
        rows="4" 
        cols="50" 
        onChange={handleFormChange} 
        required
      >
      </textarea>
      <button 
        type="submit" 
        id="submit-button" 
        className="form-elements" 
        value="Send"
      >
        Send
      </button>
    </form>
  );
};