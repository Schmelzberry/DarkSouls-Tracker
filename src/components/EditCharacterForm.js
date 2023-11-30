import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCharacterForm (props) {
  const { character } = props;

  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    props.onEditCharacter({name: event.target.name.value, weaponType: event.target.weaponType.value, fightingStyle: event.target.fightingStyle.value, id: character.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCharacterFormSubmission}
        btnText="Update Character" />
    </React.Fragment>
  );
}

EditCharacterForm.propTypes = {
  character: PropTypes.object,
  onEditCharacter: PropTypes.func
};

export default EditCharacterForm;