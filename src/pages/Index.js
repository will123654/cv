import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link> or <Link to="/projects">projects</Link>.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/will123654/cv">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
