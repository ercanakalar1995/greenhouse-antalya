import './contact.css';
import ContactForm from './ContactForm/ContactForm';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <>
      <div className="section-book">
        <div className="book">
          <div className="book__form">
            <form className="form">
              <ContactTitle />
              <ContactForm />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
