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
        <input
          type="text"
          name="weaponType"
          placeholder="How will you arm yourself?"
      
        /><br />
        <textarea
          name="fightingStyle"
          placeholder="Describe how you plan on fighting back!"
        /><br />
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