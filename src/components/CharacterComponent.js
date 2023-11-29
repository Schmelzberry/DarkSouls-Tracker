import React from "react";
import PropTypes from "prop-types";

function CharacterComponent(props) {
  return (
    <React.Fragment>
      <div onClick={() => {
        console.log("whenCharacterClicked called");
        props.whenCharacterClicked(props.id)
      }}>
        <h3>{props.name}</h3>
        <ul>
          <li>{props.weaponType}</li>
          <li>{props.fightingStyle}</li>
        </ul>
        <hr />
      </div>
    </React.Fragment>
  );
}

CharacterComponent.propTypes = {
  name: PropTypes.string,
  weaponType: PropTypes.string,
  fightingStyle: PropTypes.string,
  id: PropTypes.string, 
  whenCharacterClicked: PropTypes.func 
};

export default CharacterComponent;