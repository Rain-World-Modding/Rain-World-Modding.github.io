# Dev Tools: Room Settings

This is a single tab for the [Dev Tools.](Dev-Tools.html) See that page for more controls and other tabs.



## General Controls

---

### Pages:

Brings you to the other devtool editors.

### Save:

Saves the current effects and room settings to a file inside the region's World folder, named ROOMNAME_settings.txt Most effects are not applied instantly, and thus need to be saved, and then reloaded by dying and returning to the room to see the changes.

### Inherit from template:

Will set the values stored in a specific template the region has to this room.

### Save as template:

Saves the current room's settings as a template for easy re-use.



## Room settings menu

---

### G.O:

Controls the game over sequence when the rain timer expires.

- Rain: As it says on the tin.
- Flood: Room will slowly fill up from its set water height.
- Flood and rain: The sky is death, and the room floods
- None: Will cause no visual effects, and screen rumbling will be disabled
- Thunder: Lightning effects in the room will speed up animation.However no actual deadly effects will happen. To do an under hang style lightning walls effect. you will need to add an "ElectricDeath" room effect with a 100% modifier.

### Rain Intensity:

Increases or decrease how hard the rain will impact the player. Default is 100%. Lower amounts will eventually not kill the player, but instead only hamper their jumps.

### Rumble Intensity

Similar to rain intensity, Controls the screen shake of the room when the rain timer expires. This does not apply to rooms with a G.O of "none", as by default those will not shake anyway.

### Ceiling Drips:

Controls how wet a room is. The higher the value, the more drips will spawn. This will only apply for a few moments at the beginning of a cycle, unless "Wet terrain" is turned on.

### Waves:

Speed, length, and amplitude of water waves. Allows you to make bodies of water behave like an ocean.

### Clouds:

Changes the cloud cover of an area. Will be forced to 100% when the room has the sun disabled. ( This is changed in the official editor when exporting a level. )

### Grime:

Creates an oil like film over the edges and raised bits of tiles. Also causes minor distortions on the screen.

### Random Item Density:

Controls how often rocks will spawn on the ground of the room.

### Random Item Spear Percent:

How often those random rocks will be spears.

### Water Light:

The modified intensity of light sources placed underwater.



## Palette Menu

---

[![Fadepalette example.png](https://static.wikia.nocookie.net/rain-world-modding/images/3/37/Fadepalette_example.png/revision/latest/scale-to-width-down/307?cb=20180213230933)](https://static.wikia.nocookie.net/rain-world-modding/images/3/37/Fadepalette_example.png/revision/latest?cb=20180213230933)

### Palette:

Rooms in rainworld use palettes to decide how they draw on screen. These colors can be changed during run time and easily modified and saved to tweak rooms on the fly. By default there are 35 palettes in vanilla rainworld. However more can be added through modding.

### Effect color A/B:

Controls the palette of effects applied from the official editor. The official editor can paint effects to use one of these palettes specifically. Allowing you to draw plants using palette A, and daddy corruption using palette B, to name an example. Both palettes can be configured like the normal palette menu.

### Fade Palette:

Changing this from "none" will enable a percent slider for every camera in the room, and will allow you to select a secondary palette. These sliders will allow you to fade between the primary palette, and this secondary fade palette. Allowing you to do visual transitions as you progress through rooms, or to simply create a blended set of colors between two specific palettes.

The image on the right shows a fade at 0%, 50% and 100%. Slowly changing the room's colors between the two palettes based on the slider.



## Effects Library

---

This menu will allow you to select various effects you want to happen in a room. However, most of these will require the room to be saved, and then reloaded. Simply dying, and returning to the room will do this. Clicking an effect in this menu will add it, and again will remove it. Most effects require a save + reload, so do not be surprised if the effect does not show up at all when you add it at first!

| <u>**Effect**</u>       | <u>**Description**</u>                                       |
| :---------------------- | :----------------------------------------------------------- |
| SkyDandelions           | Adds floating puffs in the air, a Sky Islands effect.        |
| SkyBloom                | Increases how fuzzy/bloomy the sky's light is.               |
| LightBurn               | How overwhelming the "baked in" light placed in the official editor is. A good example is the bright lights seen near the start of the Miros bird tunnel in subterranean. |
| Bloom                   | Similar to SkyBloom, but applies to lights.                  |
| Fog                     | Creates a white cloudy effect at layer 1. Not compatible with |
| Lightning               | Creates flashes, and makes the terrain glow. Certain palettes break this effect. Plays a zapping sound effect. |
| BkgOnlyLightning        | Similar to above, However it only causes the background to flash, and does not require special palettes. Plays a zapping sound effect. |
| ExtraLoudThunder        | Changes the thunder sound effects of Lighting/BkgOnlyLightning to a louder and more violent version. |
| GreenSparks             | Underhang, and the Legs' green sparkles.                     |
| VoidMelt                | Void fluid camera effect seen near the end of the game. Covers the screen in maple syrup. Causes slowdown automatically. |
| ZeroG                   | Decreases gravity, at 100% you will gain zeroG controls like the inside of Five Pebbles. |
| BrokenZeroG             | Controls how often the above effect shuts down and turns back on. Allows you to have partial anti-gravity with different levels of gravity, and not just fully on or off gravity. |
| SunBlock                | Makes it so sun light doesn't show as if a shadow is covering everything.Allows the two projector effects below to work properly. |
| SuperStructureProjector | Causes glowing lines and circles around CoralNeurons, the percent slider controls flashing symbols and lines in various intensities. |
| ProjectedScanLines      | Adds vertical and horizontal projected lines that slowly scroll across the room. |
| CorruptionSpores        | Spawns black specks that float in the air, as seen near unfortunate development. Requires zero gravity, or broken zero gravity at full strength to appear. |
| SSSwarmers              | Causes neurons to spawn randomly throughout the room.        |
| SSmusic                 | Plays Random gods at the intensity of the percent slider. Requires zero gravity. Fades in and out when gravity is broken. |
| AboveCloudsView         | Draws the Wall's background in the room. This is tied directly to the room's Y location on the map. The top of the wall is at Y -2064. Use the regions map file to place your room at the height required for the effect you need. |
| RoofTopView             | Draws the city above FivePebble's in the background, and applies a dusty effect behind slugcat as they move and jump. |
| VoidSea                 | Spawns voidworms, draws a fade. Swimming downward, or falling downwards, will eventually bring you to the void sea. Triggers the ending sequence when entered. |
| ElectricDeath           | Causes sparks and zaps when the raintimer expires. Any value under 100% will only cause visual sparks. at 100% it will knock slugcat around, and eventually kill them. |
| VoidSpawn               | Wip                                                          |
| BorderPushBack          | Will shove slugcat away with increasing force. Used in shoreline when you go off screen. |
| Flies                   | Spawns small flys that buzz around the room and land on objects. |
| FireFlies               | Spawns tiny glowing yellow bugs throughout the room, that grow in intensity as the cycle progresses. |
| TinyDragonFly           | Spawns tiny bugs that fly around plants.                     |
| RockFlea                | Spawns tiny bugs that hop around on the ground in clusters.  |
| RedSwarmer              | Spawns small, bright red bugs that fly around slowly.        |
| Ant                     | Wip, but presumably another bug effect.                      |
| Beetle                  | Spawns small beetles that slowly fly around the room.        |
| WaterGlowWorm           | Spawns small worms that swim around in water.                |
| Wasp                    | Spawns small wasps that quickly dart between walls.          |
| Moth                    | Spawns small white moths which slowly flutter around the room. |

*Note: Some effects are mutually exclusive - if multiple of these effects are applied, not all of them will work properly. Some of them are partially compatible, but most of them override entirely. The order of these is the priority - effects that are higher in the list will override lower ones.*

```
`SkyBloom`, `SkyAndLightBloom`, `Lightning`, `LightBurn`, `Fog`, `Bloom`, `VoidMelt`
```