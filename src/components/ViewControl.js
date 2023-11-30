import React from 'react';
import GeneralInfo from './GeneralInfo';
import Bosses from './Bosses';
import Armor from './Armor';
import NewCharacterForm from './NewCharacterForm';
import CharacterDetail from './CharacterDetail';
import EditCharacterForm from './EditCharacterForm';

class ViewControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bossesVisibleOnPage: false,
      armorVisibleOnPage: false,
      formVisibleOnPage: false,
      mainCharacterList: [],
      selectedCharacter: null,
      editing: false
    };
  }

  handleClickBosses = () => {
    this.setState(prevState => ({
      bossesVisibleOnPage: !prevState.bossesVisibleOnPage,
      armorVisibleOnPage: false,
      formVisibleOnPage: false,
    }));
  }

  handleClickArmor = () => {
    this.setState(prevState => ({
      armorVisibleOnPage: !prevState.armorVisibleOnPage,
      bossesVisibleOnPage: false,
      formVisibleOnPage: false,
    }));
  }
  handleClickForm = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
      bossesVisibleOnPage: false,
      armorVisibleOnPage: false,
      selectedCharacter: null,
    }));
  }

  handleAddingNewCharacterToList = (newCharacter) => {
    const newMainCharacterList = this.state.mainCharacterList.concat(newCharacter);
    this.setState({
      mainCharacterList: newMainCharacterList,
      newMainCharacterList: newMainCharacterList,
      bossesVisibleOnPage: false,
      armorVisibleOnPage: false,
      formVisibleOnPage: false,
    });
  }

  handleChangingSelectedCharacter = (id) => {
    const selectedCharacter = this.state.mainCharacterList.
      filter(character => character.id === id)[0];
    this.setState({ selectedCharacter: selectedCharacter });
  }

  handleDeletingCharacter = (id) => {
    const newMainCharacterList = this.state.mainCharacterList.filter(character => character.id !== id);
    this.setState({
      mainCharacterList: newMainCharacterList,
      selectedCharacter: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingCharacterInList = (characterToEdit) => {
    const editedMainCharacterList = this.state.mainCharacterList
      .filter(character => character.id !== this.state.selectedCharacter.id)
      .concat(characterToEdit);
    this.setState({
        mainCharacterList: editedMainCharacterList,
        editing: false,
        selectedCharacter: null
      });
  }

  handleClick = () => {
    if (this.state.selectedCharacter != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCharacter: null,
        editing: false 
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonText2 = null;
    let buttonText3 = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCharacterForm
          character={this.state.selectedCharacter}
          onClickingDelete={this.handleDeletingCharacter}
          onClickingEdit={this.handleEditClick}
          onEditCharacter = {this.handleEditingCharacterInList}
          buttonText="Bosses"
          buttonText2="Armor"
          buttonText3="Home"
        />
      );
    }
    else if (this.state.selectedCharacter != null) {
      currentlyVisibleState =
        <CharacterDetail
          character={this.state.selectedCharacter}
          onClickingDelete={this.handleDeletingCharacter}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Bosses"
      buttonText2 = "Armor"
      buttonText3 = "Home"
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCharacterForm onNewCharacterCreation={this.handleAddingNewCharacterToList} />
      buttonText = "Bosses"
      buttonText2 = "Armor"
      buttonText3 = "Home"
    }
    else if (this.state.bossesVisibleOnPage) {
      currentlyVisibleState = <Bosses />
      buttonText = "Home"
      buttonText2 = "Armor"
      buttonText3 = "Create New Character"
    }

    else if (this.state.armorVisibleOnPage) {
      currentlyVisibleState = <Armor />
      buttonText = "Bosses"
      buttonText2 = "Home"
      buttonText3 = "Create New Character"
    }

    else {
      currentlyVisibleState = <GeneralInfo characterList={this.state.mainCharacterList} onCharacterSelection={this.handleChangingSelectedCharacter} />
      buttonText = "Bosses"
      buttonText2 = "Armor"
      buttonText3 = "Create New Character"

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="nav" onClick={this.handleClickBosses}>{buttonText}</button>
        <button className="nav" onClick={this.handleClickArmor}>{buttonText2}</button>
        <button className="nav" onClick={this.handleClickForm}>{buttonText3}</button>
      </React.Fragment>
    );
  }
}
export default ViewControl;