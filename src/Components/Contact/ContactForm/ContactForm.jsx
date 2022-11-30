import { useEffect, useState } from 'react';
import '../contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log(isSubmitted);
  };
  const sendFormToEmail = async () => {
    if (name && email && message) {
      const response = await fetch(
        'http://localhost:5000/api/contact/createForm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        },
      );
      const data = await response.json();
      console.log(data);
    }
    setIsSubmitted(false);
  };

  useEffect(() => {
    sendFormToEmail();
  }, [isSubmitted]);

  return (
    <>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Full name"
          id="name"
          required
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <label htmlFor="name" className="form__label">
          Full name
        </label>
      </div>
      <div className="form__group">
        <input
          type="email"
          className="form__input"
          placeholder="Email address"
          id="email"
          required
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="email" className="form__label">
          Email address
        </label>
      </div>
      <div className="form__group">
        <input
          type="text"
          className="form__input"
          placeholder="Message"
          id="Message"
          required
          onChange={(e) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
        />
        <label htmlFor="Message" className="form__label">
          Message
        </label>
      </div>
      <div className="form__group">
        <a className="btn-decor btn--green" href="/">
          <button
            className="btn btn--green"
            type="submit"
            onClick={handleSubmit}
          >
            Send &rarr;
          </button>
        </a>
      </div>
    </>
  );
};

export default ContactForm;
