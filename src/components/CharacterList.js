import React from 'react';
import CharacterComponent from './CharacterComponent';
import PropTypes from 'prop-types';

function CharacterList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.characterList.map((character, index) => (
        <CharacterComponent
          name={character.name}
          weaponType={character.weaponType}
          fightingStyle={character.fightingStyle}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

CharacterList.propTypes = {
  characterList: PropTypes.array
};

export default CharacterList;