import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/pic.jpg`} alt="" />
      </Link>
      <header>
        <h2>William<br />(Woo Jung)<br />Lee</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/" className="button">
              Home
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Woo Jung Lee <Link to="/">wjlee.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
