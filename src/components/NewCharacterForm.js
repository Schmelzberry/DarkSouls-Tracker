import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'; 
import ReusableForm from './ReusableForm';

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
      <ReusableForm
      formSubmissionHandler={handleNewCharacterFormSubmission}
      btnText="Don't go hollow!"/>
    </React.Fragment>
  )
}

NewCharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
};

export default NewCharacterForm;