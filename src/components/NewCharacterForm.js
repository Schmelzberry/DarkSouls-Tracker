import React from 'react';

function NewCharacterForm() {

  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.weaponType.value);
    console.log(event.target.fightingStyle.value);
  }

  return (
    <React.Fragment>
      <h2>Character Builder</h2>
      <p>Planning an adventure to the land of Lordran soon? Track your adventure below!</p>
      <hr />
      <form onSubmit={handleNewCharacterFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='name here ya silly goose' />
        <input
          type='text'
          name='weaponType'
          placeholder='sword/magic staff/axe/etc.' />
        <textarea
          name='fightingStyle'
          placeholder='How do you want to be slaying monsters?' />
        <button type='submit'>Don't Go Hollow!</button>
      </form>
      
    </React.Fragment>
  )
}

export default NewCharacterForm;