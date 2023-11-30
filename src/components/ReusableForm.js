import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const { formSubmissionHandler, btnText } = props;

  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
      
        /><br />
        <label>
          Weapon Category:
        <input
          type="text"
          name="weaponType"
          placeholder="How will you arm yourself?"
      
        /></label><br />
        <label>
          Starting Class:
          <select name="startingClass">
            <option value="warrior">Warrior</option>
            <option value="knight">Knight</option>
            <option value="wanderer">Wanderer</option>
            <option value="thief">Thief</option>
            <option value="bandit">Bandit</option>
            <option value="hunter">Hunter</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="pyromancer">Pyromancer</option>
            <option value="cleric">Cleric</option>
            <option value="deprived">Deprived</option>
          </select>
        </label><br />
        <button type="submit">{btnText}</button>
        <hr />
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  btnText: PropTypes.string,
};

export default ReusableForm;

