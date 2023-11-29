import React from "react";

function Character(){
  const name = "Smelsberry";
  const weaponType = "Dragon Tooth";
  const fightingStyle = "Magic from range fer dayz";
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <ul>
        <li>{weaponType}</li>
        <li>{fightingStyle}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

export default Character;