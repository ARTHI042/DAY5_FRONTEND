import React from 'react'
import './home.css';
import './login';
import {Link} from 'react-router-dom';

function logins() {
  return (
    <div>
  <header class="header">
    <a href="#" class="logo">SafeWheels</a>
    <nav class="nav-items">
      <Link to="/login"><a>Login</a></Link>
      <a href="#">About</a>
      <a href="#">Contact</a> 
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Automobile Insurance</h1>
      <Link to="/Login">
      <button>Register</button>
      </Link>
    </div>
    <div class="about-me">
      </div>
    </main>
    </div>
)
}

export default logins