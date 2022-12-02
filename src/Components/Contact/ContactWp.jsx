import './contactWp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactWp = () => {
  return (
    <>
      <div className="container__wp">
        <div className="wp-box">
          <a href="https://wa.me/+905466870726?text=I%27d%20like%20to%20take%20mare%20information">
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
