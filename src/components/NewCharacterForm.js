import React from 'react';

function NewCharacterForm() {

  function handleNewCharacterFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCharacterFormSubmission}>
        <input
          type='text'
          name='name of character'
          placeholder='name here ya silly goose' />
        <input
          type='text'
          name='weapon type'
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