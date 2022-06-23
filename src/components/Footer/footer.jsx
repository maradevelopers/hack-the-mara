import React from 'react';
import './footer.scss';
import Insta from './icons8-instagram.svg';
import Dis from './icons8-discord.svg';
import Linked from './icons8-linkedin-2.svg';
import Mail from './icons8-mail.svg';
import Twitter from './icons8-twitter.svg';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import {SOCIALS, TOP_SECTION} from '../../Module/General';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
        </div>
      </div>
    </div>
  );
}
