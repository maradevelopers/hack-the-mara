import React from 'react';
import ReactDOM from 'react-dom';
import NAV from './containers/navbar/App.jsx';
import {CalenderContextProvider} from './Context/calender.context';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <React.Fragment>
    <CalenderContextProvider>
      <NAV />
    </CalenderContextProvider>
  </React.Fragment>,
  rootElement
);
