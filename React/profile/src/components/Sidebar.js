import React from 'react';
import Logo from '../images/me.jpg';
import 'react-medium-image-zoom/dist/styles.css';
import {Certificates, Languages, Skills, Contacts} from './_sidebar';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo_container">
        <div className="sidebar__logo_innerContainer">
          <img src={Logo} alt="Me"/>
        </div>
      </div>
      <div className="sidebar__logo_container-rightCorner">
        <div className="sidebar__logo_container-rightCorner_front"/>
      </div>

      <div className="sidebar__section">
        <Contacts/>
        <Skills/>
        <Languages/>
        <Certificates/>
      </div>
    </div>
  );
};

export default Sidebar;
