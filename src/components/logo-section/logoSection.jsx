import React from 'react';
import './logoSection.css';

import mara from '../../Module/Assets/sponsorsLogos/mara.png';

import {MIDDLE_SECTION} from '../../Module/General';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
    myLogo = (
      <div className="logoS">
        <img className="Logo logo1" src={mara} alt="mara" />
      </div>
    );
  
  return myLogo;
}

export {Logo, LogoSectionAbout};
