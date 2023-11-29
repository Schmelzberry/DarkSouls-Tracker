import React from 'react';
import SoulsImage from "./../img/Souls.avif";
import './App.css';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

function GeneralInfo(props){
  return(
    <React.Fragment>
      
      
      <h2> Dark Souls is an action role-playing game developed by <a href="https://www.fromsoftware.jp/ww/" >FromSoftware</a>, a video game development company based in Japan.</h2>
      <hr />
      <h3> The trilogy of games are known for:</h3>
      
      <ul>
        <li><strong>Challenging Gameplay:</strong> Dark Souls is renowned for its difficulty. Players face tough enemies and formidable bosses, requiring strategic thinking and precise timing in combat.</li>
        <li><strong>Open World Design:</strong> The game features an interconnected world where players can explore various locations seamlessly. It's designed as a dark and atmospheric fantasy world filled with dungeons, castles, and other mysterious environments.</li>
        <li><strong>Role-Playing Elements:</strong> Players can customize their character's appearance and choose a class at the beginning of the game. The game includes a deep progression system with various stats and abilities to enhance.</li>
        <li><strong>Bonfire System:</strong> Bonfires serve as checkpoints where players can rest, level up, and respawn after death. However, resting at a bonfire respawns all enemies in the area, adding an extra layer of challenge.</li>
        <li><strong>Multiplayer Integration:</strong> Dark Souls has a unique multiplayer system where players can leave messages for each other, summon each other for cooperative play, or invade other players' worlds for player-vs-player combat.</li>
        <li><strong>Artistic Design:</strong> Dark Souls has a distinctive art style that combines dark, gothic aesthetics with intricate level design. The world is filled with atmospheric locations and memorable, imposing bosses.</li>
      </ul>
      <hr />
      <img id="knight" src={SoulsImage} alt="An image of a knight" />
      <p><em>* One of many ways that a character can look like in the DS series</em></p>
      <CharacterList characterList={props.characterList} />
    </React.Fragment>
  );
 
}

GeneralInfo.propTypes = {
  characterList: PropTypes.array
};

export default GeneralInfo;