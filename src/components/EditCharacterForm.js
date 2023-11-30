import React, { useState, useEffect } from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditCharacterForm(props) {
  const { character, onEditCharacter } = props;

  const [formData, setFormData] = useState({
    name: '',
    weaponType: '',
    fightingStyle: '',
  });

  // Update form data when the character prop changes
  useEffect(() => {
    setFormData({
      name: character.name || '',
      weaponType: character.weaponType || '',
      fightingStyle: character.fightingStyle || '',
    });
  }, [character]);

  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    onEditCharacter({
      name: formData.name,
      weaponType: formData.weaponType,
      fightingStyle: formData.fightingStyle,
      id: character.id,
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCharacterFormSubmission}
        btnText="Update Character"
        handleInputChange={handleInputChange}
        formData={formData}
      />
    </React.Fragment>
  );
}

EditCharacterForm.propTypes = {
  character: PropTypes.object,
  onEditCharacter: PropTypes.func,
};

export default EditCharacterForm;







// import React from "react";
// import ReusableForm from "./ReusableForm";
// import PropTypes from "prop-types";

// function EditCharacterForm (props) {
//   const { character } = props;

//   function handleEditCharacterFormSubmission(event) {
//     event.preventDefault();
//     props.onEditCharacter({
//       name: event.target.name.value,
//        weaponType: event.target.weaponType.value,
//         fightingStyle: event.target.fightingStyle.value,
//          id: character.id
//         });
//   }

//   return (
//     <React.Fragment>
//       <h1>Edit Character</h1>
//       <ReusableForm
//         formSubmissionHandler={handleEditCharacterFormSubmission}
//         btnText="Update Character" />
//     </React.Fragment>
//   );
// }

// EditCharacterForm.propTypes = {
//   character: PropTypes.object,
//   onEditCharacter: PropTypes.func
// };

// export default EditCharacterForm;

