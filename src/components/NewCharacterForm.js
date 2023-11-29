import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'; 

function NewCharacterForm(props) {

  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    props.onNewCharacterCreation({
      name: event.target.name.value,
      weaponType: event.target.weaponType.value,
      fightingStyle: event.target.fightingStyle.value,
      id: v4()
    });
    
  }

  

  return (
    <React.Fragment>
      <h2>Character Builder</h2>
      <p>Planning an adventure to the land of Lordran soon? Track your adventure below!</p>
      <hr />
      <h3>Character Form</h3>
      <form onSubmit={handleNewCharacterFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='name of character' />
          <br/>
        <input
          type='text'
          name='weaponType'
          placeholder='sword/magic staff/axe/etc.' />
          <br/>
        <textarea
          name='fightingStyle'
          placeholder='How do you want to be slaying monsters?' />
          <br/>
        <button type='submit'>Don't Go Hollow!</button>
      </form>
      
    </React.Fragment>
  )
}

NewCharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
};

export default NewCharacterForm;