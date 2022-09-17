import { Link, useLocation } from "react-router-dom";
import Aos from "aos";

const SecHeader = ({ HeaderLogo, HeaderLogo2, dropdownItem }) => {
  Aos.init();

  return (
    <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <img src={HeaderLogo} alt="Logo" width="70" draggable="false" />
        </a>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ecosystem">
                Eco System
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu">
                {dropdownItem &&
                  dropdownItem.map((item, key) => (
                    <a key={key} className="dropdown-item" href={item.path}>
                      {item.nameLink}
                    </a>
                  ))}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="lh-55px">
              <Link
                to={`/index-demo-4/login`}
                className="btn login-btn ml-50"
                data-hover
              >
                <span className="test" data-hover="Coming Soon..">
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;
