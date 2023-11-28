import React from 'react';
import Bonfire from "./../img/Bonfire.jpg";
function Navbar() {
  return ( <React.Fragment>
      <h1>Dark Souls Guide</h1>
      <h4>|| Bosses || Armor || Weapons || Locations || Classes ||</h4> 
      <div style={headerImageStyles}>
        <img id="fire" src={Bonfire} alt="Big Ole Fire" />
      </div>
      </React.Fragment>
  );
}

export default Navbar;

{/* <h1>Hardest Dark Souls Bosses</h1>
      <ul>
        <li>Knight Artorias</li>
        <li>Ornstein & Smough</li>
        <li>Four Kings</li>
      </ul> */}