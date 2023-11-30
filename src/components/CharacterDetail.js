import React from 'react';
import PropTypes from "prop-types";

function CharacterDetail(props){
  const { character, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>{character.name} Details</h1>
      <h3>{character.weaponType}</h3>
      <h3>{character.fightingStyle}</h3>
      <button onClick={ props.onClickingEdit }>Update Character</button>
      <button onClick={()=> onClickingDelete(character.id) }>Delete Adventure</button>
      <hr />
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CharacterDetail;