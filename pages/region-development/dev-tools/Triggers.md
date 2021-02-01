# Dev Tools: Triggers

## ***<u>This article is contains outdated information and needs to be updated!</u>***

![triggerTab](../../../assets/regionDevelopment/devTools/triggerTab.png)

This is a single tab for the [Dev Tools.](Dev-Tools.html) See that page for more controls and other tabs.



## General controls

---

### PAGES:

Brings you to the other devtool editors.

### Save:

Saves the current effects and room settings to a file inside the region's World folder, named ROOMNAME_settings.txt Most effects are not applied instantly, and thus need to be saved, and then reloaded by pressing R and returning to the room to see the changes.

### Inherent from template:

Will set the values stored in a specific template the region has to this room.

### Save as template:

Saves the current room's settings as a template for easy re-use.



## Triggers Menu

---



**Triggers** are the mechanism in which some in-game events occur, such as specific songs playing, projections being displayed by the player guide overseer, or information text being displayed at the bottom of the screen. Clicking one of the four options in the bottom right-hand box will place a trigger of that type, which can be moved just like other devtools objects. 



### Trigger Options

Triggers have a number of settings which determine what the trigger does and under what circumstances. 

- **Active from cycle:** The minimum total cycle requirement for the trigger to activate. 
- **Active up to cycle:** The maximum cycle limit for the trigger to activate - if the player has a cycle count higher than this number, the trigger will not activate. 
- **Fire chance:** A random percentage chance for the trigger to activate, from 0% to 100%. 
- **Trigger delay:** How many seconds between the requirements for the trigger being met and the event occurring. 
- **Karma req.:** The minimum karma the player needs for the trigger to activate (from 0 to 5)
- **Can only fire once/Can fire multiple times:** Self-explanatory, determines whether the trigger only fires once or not. 
- **No entrance requirement/Entrance XX:** Determines whether the player can enter from any entrance pipe, or whether they need to come through a specific one. When an entrance is selected, a red line will connect this entrance and the options box. 
- **White, Yellow, Red:** Determines which gamemodes the trigger fires on - Survivor, Hunter or Monk. A gamemode's name being displayed means that the trigger will fire in said gamemode. 



### Event Types

The lowest button on the options box lets you pick what type of event you want to add. 



#### MusicEvent

Plays a song from the soundtrack. 

- The first button lets you pick the song you want to play. Files for these songs can be found in *Rain World\Assets\Futile\Resources\Music\Songs*, or many of them can be found [online.](https://www.youtube.com/playlist?list=PLPJWSVeszYFBo1oAXYgzGfJfewnGKgGna)
- **Play volume:** Self-explanatory, the volume the song plays at. 
- **Fade in:** In seconds, how long the song takes to reach full volume. 
- **Song priority:** If this song's priority is higher than another's, then this song will continue to play if the other trigger is activated. If the priority is lower, then the higher one will play instead of it. 
- **Drone volume:** *WIP, presumably adds a background drone sound at the set volume.*
- **Fade out at threat:** The threat level at which the song fades out and is overtaken by the threat music. 
- **Rest cycles:** If this trigger can activate multiple times, the number of cycles for the trigger to wait before being able to fire again. 
- **Room transitions:** How many rooms the song will continue playing through.
- **One song per cycle:** Whether or not the same song can activate multiple times in one cycle. 
- **Play once/loop:** Determines whether the song plays once or loops.  
- **Continue at death:** Continue playing the song when the player dies. 
- **Continue through gate:** Continue playing the song when the player uses a region gate. 



#### StopMusicEvent

As the name says, stops one or more MusicEvents. 

- The first button lets you pick the song you want to stop/exclude.
- **Priority:** If a song has a higher priority than the trigger, it won't stop. 
- **Fade out:** Same as fade in, but fading out to silence. 
- **Stop all songs/stop specific song/stop all but specific song:** Self-explanatory, song selected at the top of the box is what this refers to. 



#### **PoleMimicSubtleReveal**

Causes a pole mimic to flutter slightly when activated. 



#### **ShowProjectedImageEvent**

*WIP, presumably relates to player guide overseer projections.*



#### **RoomSpecificTextMessage**

Presumably causes specific text to appear at the bottom of the screen. Non-functional on its own. 



#### **BringPlayerGuideToRoom**

*WIP, presumably brings the player guide overseer to the current room.*



### Trigger Types

- **Spot:** The most commonly used trigger; activates when slugcat walks into a specific circular area of the room. This is indicated by a white area-of-effect which can be moved and scaled. 
- **SeeCreature:** *WIP, presumably activates upon a certain creature being seen.*
- **RegionBump:** Activates either when the region is entered or at the beginning of a cycle where the region name and cycle count is shown.
- **PreRegionBump:** Seemingly functions the same way as RegionBump. 