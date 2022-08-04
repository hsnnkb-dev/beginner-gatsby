import React from 'react';
import Navbar from './Navbar';
import * as styles from '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar/>
      <div className="content">
        { children }
      </div>
      <footer>
        <p>Copyright 2022 Web Developer</p>
      </footer>
    </div>
  )
}
