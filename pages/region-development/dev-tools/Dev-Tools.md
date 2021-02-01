# Dev Tools

The **Dev Tools** are a collection of in-game tools used by the developers for testing the game and editing map properties. They are a good starting point for modders, as the tools are fairly easy to use, and provide some basic modding capabilities. They can be installed from the Tools section of [RainDB](http://www.raindb.net/).



## Controls

---

The following keyboard shortcuts are available for use once the Dev Tools have been activated in-game.

| <u>Key</u> | <u>Function</u>                                              |
| :--------: | :----------------------------------------------------------- |
|   **O**    | Enables/Disables Dev Mode. While Dev mode is active, some yellow text will be shown at the top of the screen showing that it is active, and also showing the current map name. |
|   **H**    | Opens/closes the main Dev Tool interface.                    |
|   **M**    | Shows various useful debug information, like number of creatures active in the region, exact time left until the rain, creature relationship statuses, numerical identifiers for pipes and spawn locations, and pixel/tile coordinates at the mouse location. |
|   **P**    | Displays tile accessibility for each creature type. Use arrow keys to select a creature type, then click a tile in the room to see every place the creature can reach from that tile. |
|   **Q**    | Fills Slugcat's food meter by one pip.                       |
|   **R**    | Restarts the cycle from the shelter.                         |
|   **A**    | Runs the simulation in slow-mode while the button is held.   |
|   **S**    | Run the simulation in fast-mode while the button is held.    |
|   **V**    | Teleports Slugcat to the location of the mouse.              |
|   **W**    | Flings slugcat in the general direction of mouse motion.     |
|   **F**    | Pulls batflies towards the location of the mouse.            |
|   **B**    | Drags all creatures/entities to the location of the mouse (except Slugcat and Batflies). |
|   **G**    | Flings all vultures skywards.                                |
|   **N**    | Offsets the camera based on the mouse position.              |
|   **E**    | Sets the migratory destination of every creature in the region to the current room. |
|   **U**    | Reloads all sound samples.                                   |
|   **I**    | Shows a log of all sound effects played.                     |
|   **K**    | Opens ConsoleLog.txt (only Extended Devtools).               |

Additional Dev Tools commands available on the title screen/region select screens:

| Key    | Function                                                     |
| :----- | :----------------------------------------------------------- |
| N+Jump | Allows you to reposition the layers in the background image with the mouse. |
| B      | Saves the new positions of the layers to file.               |

Additional Dev Tools commands available in cutscenes (not useful in the current version of Dev Tools, as you can't save these changes, and the cutscene doesn't pause while this mode is active, like it probably is supposed to)

| <u>Key</u> | <u>Function</u>                            |
| :--------: | :----------------------------------------- |
|     M      | Activate/Deactivate cutscene editing mode. |
| Left Click | Select and drag keyframes around.          |
|     J      | Add a new keyframe.                        |
|     K      | Remove a keyframe.                         |
|     O      | Change depth of selected keyframe.         |
|     L      | Offset all keyframes.                      |
|     I      | Test playback of cutscene.                 |



## Main Interface Tabs

---

Once opening the main dev tools interface with H, the interface is broken up into five different tabs. Each of these tabs are extensive enough to warrant their own pages:

- [Room Settings Tab](Room-Settings.html)
- [Objects Tab](Objects.html)
- [Sound Tab](Sound.html)
- [Map Tab](Map.html)
- [Triggers Tab](Triggers.html)