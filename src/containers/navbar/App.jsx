import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './ham-c.svg';
import hamLogo from './ham.svg';
import './styles.scss';

const Wrapper = styled.div`
  display: block;
  width: 40%;
  margin-top: 20px;

  @media (max-width: 1000px) {
    margin: 0;
    display: ${props => (props.toggle ? 'none' : 'static')};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? '-1000px' : '0px')};
    transition: top 1s;
    .nav-content {
      height: 25%;
      background-color: #ff7500;
    }
  }
`;

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);

  const navigation = useRef();

  const handleOutsideClick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', e =>
      handleOutsideClick(e, navigation)
    );

    return () => {
      document.removeEventListener('mousedown', e =>
        handleOutsideClick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className="nav_bar" style={{backgroundColor: '#ff7500'}}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className="links">Home </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">prizes </span>{' '}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">sponsors </span>{' '}
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
                alt="close"
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
          alt="open"
        />
      </nav>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NAVBAR;
