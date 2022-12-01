import './footer.css';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <div style={{ height: '10vh', width: '50%' }}>
                <div
                  id="map-container-google-2"
                  className="z-depth-1-half map-container"
                  style={{ height: '200px' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.4551826345257!2d32.81764227828308!3d39.922348307808974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34580ac4a4ee1%3A0xa59a441b71b6849e!2zTEFSQSBNw5xIRU5ExLBTTMSwSw!5e0!3m2!1str!2str!4v1668593280302!5m2!1str!2str"
                    loading="lazy"
                    frameBorder="0"
                    style={{ border: '0' }}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="myFrame"
                  ></iframe>
                </div>
              </div>
              <div className="contact">
                <h3 className="contact_us">Contact</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href={`tel:+905343751745`} className="footer__link">
                      Phone No: +905343751745
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      href={`mailto:topraksiztarimantalya@gmail.com`}
                      className="footer__link"
                    >
                      E-mail: topraksiztarimantalya@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a
                      href={'https://www.instagram.com/topraksiztarimantalya'}
                      className="footer__link"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      className="footer__link"
                      href="https://wa.me/+905466870726?text=I%27d%20like%20to%20chat%20with%20you"
                    >
                      WP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Copyright &copy; by Ercan AKALAR. 2022!
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
