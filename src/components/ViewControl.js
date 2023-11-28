import React from 'react';
import GeneralInfo from './GeneralInfo';
import Bosses from './Bosses';
import Armor from './Armor';

class ViewControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bossesVisibleOnPage: false,
      armorVisibleOnPage: false
    };
  }

  handleClickBosses = () => {
    this.setState(prevState => ({
      bossesVisibleOnPage: !prevState.bossesVisibleOnPage,
      armorVisibleOnPage: false
    }));
  }
  handleClickArmor = () => {
    this.setState(prevState => ({
      armorVisibleOnPage: !prevState.armorVisibleOnPage,
      bossesVisibleOnPage: false
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonText2 = null;

    if (this.state.bossesVisibleOnPage) {
      currentlyVisibleState = <Bosses/>
      buttonText = "Home"
      buttonText2 = "Armor"
    } 
    
    else if (this.state.armorVisibleOnPage) { 
      currentlyVisibleState = <Armor/>
      buttonText = "Bosses"
      buttonText2 = "Home"
    }

     else {
      currentlyVisibleState = <GeneralInfo/>
      buttonText = "Bosses"
      buttonText2 = "Armor"
      
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button class="nav" onClick={this.handleClickBosses}>{buttonText}</button>
        <button class="nav" onClick={this.handleClickArmor}>{buttonText2}</button>
      </React.Fragment>
    );
  }
}
export default ViewControl;