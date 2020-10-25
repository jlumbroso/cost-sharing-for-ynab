import React from 'react';
import { func } from 'prop-types';
import '../styles/Nav.css';

const Nav = ({ setPrivacyActive }) => (
  <div id="nav-container">
    <a
      className="link-btn"
      href="/"
    >
      Home
    </a>
    <a
      className="link-btn"
      href="#"
      id="priv-pol-btn"
      onClick={() => setPrivacyActive(true)}
    >
      Privacy Policy
    </a>
    <a
      className="link-btn"
      href="https://github.com/chelseaSchmidt/cost-sharing-for-ynab/issues"
      target="_blank"
      rel="noreferrer"
    >
      Report a bug by opening an issue in GitHub
    </a>
  </div>
);

Nav.propTypes = {
  setPrivacyActive: func.isRequired,
};

export default Nav;
