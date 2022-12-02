import './footer.css';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <div style={{ height: '8vh', width: '87%' }}>
                <div id="map-container-google-2" className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.1899422273361!2d30.769659835945713!3d36.8482290679243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x279491ae2d25e537!2zMzbCsDUwJzUzLjYiTiAzMMKwNDYnMTQuOCJF!5e0!3m2!1str!2str!4v1670016252661!5m2!1str!2str"
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
                      href="https://wa.me/+905466870726?text=I%27d%20like%20to%20take%20mare%20information"
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
