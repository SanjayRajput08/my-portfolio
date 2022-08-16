import "./index.scss";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Navbar Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname
          ="active" to='/'>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname
          ="active" to='/about' className='about-link'> 
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname
          ="active" to='/contact' className='contact-link  '>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target='_blank' rel='noreferrer' href=''> 
            <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </li>

        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/SanjayRajput08'> 
            <FontAwesomeIcon icon={faGithub}/>
            </a>
        </li>

        <li>
            <a target='_blank' rel='noreferrer' href='skype:live:.cid.cd4d2c95c50324ae'> 
            <FontAwesomeIcon icon={faSkype}/>
            </a>
        </li>

        <li>
            <a target='_blank' rel='noreferrer' href=''> 
            <FontAwesomeIcon icon={faInstagram}/>   
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
