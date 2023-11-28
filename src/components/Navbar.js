import React from 'react';
import Bonfire from "./../img/Bonfire.jpg";
import './App.css';

function Navbar() {
  return (<React.Fragment>

    <div className="navbar-container">
      <h1>Dark Souls Guide</h1>
      <img id="fire" src={Bonfire} alt="Big Ole Fire" />
    </div>
    < hr/>
  </React.Fragment>
  );
}

export default Navbar;

