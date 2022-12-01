import './contactWp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactWp = () => {
  return (
    <>
      <div className="container__wp">
        <div className="wp-box">
          <a href="tel:+905466870726" className="wp-number">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ height: '5rem', color: 'green' }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactWp;
