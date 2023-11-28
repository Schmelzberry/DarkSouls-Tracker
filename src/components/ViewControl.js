import React from 'react';
import GeneralInfo from './GeneralInfo';
import Bosses from './Bosses';

class ViewControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bossesVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      bossesVisibleOnPage: !prevState.bossesVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.bossesVisibleOnPage) {
      currentlyVisibleState = <Bosses/>
      buttonText = "Return to General Info"
    } else {
      currentlyVisibleState = <GeneralInfo/>
      buttonText = "Show Bosses"
      
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default ViewControl;