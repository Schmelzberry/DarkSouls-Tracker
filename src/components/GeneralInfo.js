import React from 'react';
import SoulsImage from "./../img/Souls.avif";

function GeneralInfo(){
  return(
    <React.Fragment>
      <h2> Dark Souls is an action role-playing game developed by FromSoftware.</h2>
      <ul>
        <li>Challenging Gameplay: Dark Souls is renowned for its difficulty. Players face tough enemies and formidable bosses, requiring strategic thinking and precise timing in combat.</li>
        <li>Open World Design: The game features an interconnected world where players can explore various locations seamlessly. It's designed as a dark and atmospheric fantasy world filled with dungeons, castles, and other mysterious environments.</li>
        <li>Role-Playing Elements: Players can customize their character's appearance and choose a class at the beginning of the game. The game includes a deep progression system with various stats and abilities to enhance.</li>
        <li>Bonfire System: Bonfires serve as checkpoints where players can rest, level up, and respawn after death. However, resting at a bonfire respawns all enemies in the area, adding an extra layer of challenge.</li>
        <li>Multiplayer Integration: Dark Souls has a unique multiplayer system where players can leave messages for each other, summon each other for cooperative play, or invade other players' worlds for player-vs-player combat.</li>
        <li>Artistic Design: Dark Souls has a distinctive art style that combines dark, gothic aesthetics with intricate level design. The world is filled with atmospheric locations and memorable, imposing bosses.</li>
      </ul>
      <img id="knight" src={SoulsImage} alt="An image of a knight" />
    </React.Fragment>
  );
 
}

export default GeneralInfo;