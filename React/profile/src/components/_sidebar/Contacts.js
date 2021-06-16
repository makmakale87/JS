import React from 'react';
import gmail from '../../images/social/gmail.png';
import smartphone from '../../images/social/smartphone.png';
import telegram from '../../images/social/telegram.png';
import viber from '../../images/social/viber.png';
import skype from '../../images/social/skype.png';
import linkedin from '../../images/social/linkedin.png';
import github from '../../images/social/github.png';

const Contacts = () => {
  return (
    <section>
      <div className="sidebar__section_header">
        Contacts
      </div>

      <div className="sidebar__section_body">
        <ul className="contacts__list">
          <li className="contacts__list_item">
            <img src={gmail} alt="makmakale87@gmail.com"/>
            <a href="mailto:makmakale87@gmail.com">makmakale87@gmail.com</a>
          </li>
          <li className="contacts__list_item">
            <img src={smartphone} alt="phone"/>
            +375 (29) 378-37-72
            <a href="https://telegram.me/makmakale"><img src={telegram} alt="telegram"/></a>
            <a href="viber://chat?number=%2B375293783772"><img src={viber} alt="viber"/></a>
          </li>
          <li className="contacts__list_item">
            <img src={skype} alt="skype"/>
            <a href="skype:live:.cid.b6a3d093a7c1e3b0">Skype</a>
          </li>
          <li className="contacts__list_item">
            <img src={linkedin} alt="linkedin"/>
            <a href="https://www.linkedin.com/in/makmakale/">LinkedIn</a>
          </li>
          <li className="contacts__list_item">
            <img src={github} alt="github"/>
            <a href="https://github.com/makmakale87">GitHub</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
