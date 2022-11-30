import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ headTitle, buttonCase }) => {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <Link to={'/'}>
            <img
              src="../img/logoHeader.jpg"
              alt="Logo"
              className="header__logo"
            />
          </Link>
        </div>

        <div className="header__text-box">
          {headTitle ? (
            <>
              <h1 className="heading-primary">
                <span className="heading-primary--main">{headTitle}</span>
              </h1>

              <a href={'/'} className="btn btn--white btn--animated">
                Go Back
              </a>
            </>
          ) : (
            <>
              <h1 className="heading-primary">
                <span className="heading-primary--main">DRN</span>
                <span className="heading-primary--sub">Greenhouse</span>
              </h1>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
