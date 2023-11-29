import React from 'react';
import GeneralInfo from './GeneralInfo';
import Bosses from './Bosses';
import Armor from './Armor';
import NewCharacterForm from './NewCharacterForm';

class ViewControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bossesVisibleOnPage: false,
      armorVisibleOnPage: false,
      formVisibleOnPage: false,
      mainCharacterList: []
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
  handleClickForm = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }

  handleAddingNewCharacterToList = (newCharacter) => {
    const newMainCharacterList = this.state.mainCharacterList.concat(newCharacter);
    this.setState({mainCharacterList: newMainCharacterList,
    formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonText2 = null;
    let buttonText3 = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCharacterForm onNewCharacterCreation={this.handleAddingNewCharacterToList}/>
      buttonText = "Bosses"
      buttonText2 = "Armor"
      buttonText3 = "Home"
    } 
    else if (this.state.bossesVisibleOnPage) {
      currentlyVisibleState = <Bosses/>
      buttonText = "Home"
      buttonText2 = "Armor"
      buttonText3 = "Create New Character"
    } 
    
    else if (this.state.armorVisibleOnPage) { 
      currentlyVisibleState = <Armor/>
      buttonText = "Bosses"
      buttonText2 = "Home"
      buttonText3 = "Create New Character"
    }

     else {
      currentlyVisibleState = <GeneralInfo characterList={this.state.mainCharacterList}/>
      buttonText = "Bosses"
      buttonText2 = "Armor"
      buttonText3 = "Create New Character"
      
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button class="nav" onClick={this.handleClickBosses}>{buttonText}</button>
        <button class="nav" onClick={this.handleClickArmor}>{buttonText2}</button>
        <button class="nav" onClick={this.handleClickForm}>{buttonText3}</button>
      </React.Fragment>
    );
  }
}
export default ViewControl;