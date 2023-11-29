import React from 'react';
import CharacterComponent from './CharacterComponent';
import PropTypes from 'prop-types';

function CharacterList(props) {
  console.log("onCharacterSelection:", props.onCharacterSelection);
  return (
    <React.Fragment>
      <hr />
      {props.characterList.map((character) =>
        <CharacterComponent
          whenCharacterClicked={props.onCharacterSelection}
          name={character.name}
          weaponType={character.weaponType}
          fightingStyle={character.fightingStyle}
          id={character.id}
          key={character.id} />
      )}
    </React.Fragment>
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.array,
  onCharacterSelection: PropTypes.func
};

export default CharacterList;