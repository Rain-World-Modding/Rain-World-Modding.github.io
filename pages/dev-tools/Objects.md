# Dev Tools: Objects

This is a single tab for the [Dev Tools.](Dev-Tools.html) See that page for more controls and other tabs.



## General controls

---

### PAGES:

Brings you to the other devtool editors.

### Save:

Saves the current objects to a file inside the region's World folder, named ROOMNAME_settings.txt Some objects do not spawn instantly, and thus need to be saved, and then reloaded by dying and returning to the room to see the changes.

### Mouse input:

Objects can be grabbed with the left mouse button. Releasing will put them down. Dragging the object to the bottom left into the trash bin box will remove it. Some objects will only be removed completely by reloading the room entirely.

## Object Library

---

| **<u>Object</u>**        | **<u>Description</u>**                                       | Requires Reload |
| :----------------------- | :----------------------------------------------------------- | :-------------- |
| LightSource              | Spawns a light that changes color based on its location. The secondary dot can be grabbed to stretch out the distance the light covers, and the slider sets how bright it is. | No              |
| FlareBomb                | Spawns a bomb.                                               | Yes             |
| PuffBall                 | Spawns a puffball.                                           | Yes             |
| TempleGuard              | Spawns a guardian                                            | Yes             |
| LightFixture             | Spawns a light with a specific state and style of flickering. Such as fire or filtration system red lights. Is turned on and off by the BrokenZeroG effect. | Yes             |
| Dangle fruit             | Spawns edible blue fruit that hang from vines. Dot's position is where the top of the fruit will be, not the vine's base. Refresh time between cycles can be set with the sliders. | Yes             |
| CoralStem                | Places one of the nerve tree plants from inside Five Pebbles. Center dot is the root. Secondary dot is the default direction and the base.If not in zero gravity the plant will flop limply down. | Yes             |
| CoralStemWithNeurons     | Spawns the same object as above, except with neuron flies around it. May require zero gravity to spawn neurons. | Yes             |
| CoralNeuron              | Spawns a long red climbable noodly creature from inside Five Pebbles. Center dot is one end, Secondary dot is the other end. Acts as if it is always in zero gravity. | Yes             |
| CoralCircuit             | Spawns a breakable block of coral and neurons from inside Five Pebbles. Acts as if it is always in zerogravity. Center dot controls location, Second dot controls the size of it. | Yes             |
| WallMycelia              | Spawns tiny black and blue tendrils that talk to neurons, and attach to CoralNeurons. Act as if always in zero gravity. | Yes             |
| ProjectedStars           | Adds the constellation looking projections found within five pebbles. Center dot controls location, Second dot controls the size of it. Just like the SuperStructureProjector and the ProjectedScanLines effects from the effects tab, The stars will only work if the SunBlock effect is added. | Yes             |
| ZapCoil                  | Adds a blue zapping and sizzling effect the tile it is placed over. Meant to be used with the ZapCoil objects in the tile editor. Strangely, it turns off and on with the BrokenZeroG effect, even though this is never seen happening in the main game. | Yes             |
| SuperStructureFuses      | Causes blinking lights and flicking dots. It is often used with the Superstructure material in the official editor's tile editor. However it can be placed under any tileset, and will cause it to flash red and blue in various ways. | Yes             |
| GravityDisruptor         | Causes a visual distortion, blue lights, and will forcibly make slugcat push away and orbit it when close enough. Is intended to be used with the gravity machine tile/prop in the official editor. Will turn on and off automatically if brokenZeroGravity is enabled. | Yes             |
| Spotlight                | Adds a configurable light that comes from a specific direction. The location of the Spotlight is configurable with four dots the same way configuring a decal works.The light color and layer are also configurable. | No              |
| DeepProcessing           | Causes a blue sparkling effect in background layers. The layer and intensity can be adjusted using the slider. The four points can be stretched as needed. | No              |
| Corruption               | Spawns Daddy Longlegs corruption on walls. Only the tendrils will pull you into walls, the small tumors will simply slide you around harmlessly. Tendrils are spawned automatically. The main dot controls location, second dot controls the size of the area affected.Warning: This object will crash in arena mode. | Yes             |
| CorruptionTube           | Spawns a climbable blue tendril between two points.          | Yes             |
| CorruptionDarkness       | Spawns a black distorted shadow that normally appears near the corruption inside Five Pebbles. | Yes             |
| StuckDaddy               | Spawns a Daddy Longlegs locked to a specific location. This spawns a new daddy, and does not require any creature to be added to the World file.Note: It must be placed within corruption to spawn. | Yes             |
| SSlightrod               | Glowing laser lights inside Five Pebbles. Can be adjusted in both brightness, and depth into the background. | No              |
| CentipedeAttractor       | Draws centipedes towards it at the start of a cycle. These centipedes will even ignore slugcat till they reach their destination. | Yes             |
| DandelionPatch           | Spawns a patch of skyisland puffballs along the ground.      | Yes             |
| GhostSpot                | Triggers an echo at this location. Requires advanced modding setups to add echos. | Yes             |
| DataPearl                | Spawns a generic white pearl.                                | Yes             |
| UniqueDataPearl          | Spawns a data pearl with a set lore index. Requires advanced modding setup to add lore pearls. | Yes             |
| SeedCob                  | Spawns a popcorn plant, the top of the plant is at the dot. The root will automatically try to find the ground under it. Refresh time between cycles can be set with the sliders. | Yes             |
| DeadSeedCob              | Same as above, except it starts eaten, and will never refill. | Yes             |
| WaterNut                 | Spawns a blue waterNut that can be popped in water. Dot is the center of the nut, The plant will find ground to take root on. Refresh time between cycles can be set with the sliders. | Yes             |
| Jellyfish                | Spawns a jellyfish at the dot's location. Refresh time between cycles can be set with the sliders. | Yes             |
| KarmaFlower              | Spawns a karma flower. Dot is the root of the plant. Refresh time between cycles can be set with the sliders. | Yes             |
| Mushroom                 | Spawns a mushroom. Dot is the center of the cap, the room will find the ground automatically. | Yes             |
| SlimeMold                | Places glowing edible molds on the walls and floor. Refresh time between cycles can be set with the sliders. | Yes             |
| Flylure                  | Spawns batfly luring plants. The dot is the root of the plant. Refresh time between cycles can be set with the sliders. | Yes             |
| CosmeticSlimeMold        | Same as SlimeMold just smaller and not edible.               | Yes             |
| CosmeticSlimeMold2       | Another SlimeMold variant                                    | Yes             |
| FirecrackerPlant         | Spawns a firecracker, dot is the root of the plant. Refresh time between cycles can be set with the sliders. | Yes             |
| VultureGrub              | Spawns a vultureGrub. Refresh time between cycles can be set with the sliders. | Yes             |
| DeadVultureGrub          | Same as above, except prekilled.                             | Yes             |
| VoidSpawnEgg             | Adds a little void ghost thing that is trapped and can be freed if touched by slugcat. Only visible when slugcat has obtained the mark from Five Pebbles. May need other unknown conditions to be visible. | Yes             |
| ReliableSpear            | Spawns a spear in this location with a much higher chance then normal. If you need a required spear, use the official level editor to place one in the room's file. | Yes             |
| SuperjumpInstructions    | Trigger rectangle will cause the long jump tutorial text to display. The four points can be stretched as needed. | Yes             |
| ProjectedImagePosition   | Wip, but presumably makes the yellow overseer project an image. | Yes             |
| ExitSymbolShelter        | Forces a door's symbol to show as a save room. Often used on the other side of gates, where you cannot control what the door links to, but still need it to show a save room on the other side. | Yes             |
| ExitSymbolHidden         | Will cause a door's symbol to hide. Used to make the entrances to scavenger caches, or to hide doors under corruption in Five Pebbles. | Yes             |
| NoSpearStickZone         | Spears will always bounce off walls inside this circle.      | Yes             |
| LanturnOnStick           | Spawns a scavenger lantern on a pole. Used often by scavenger merchants. | Yes             |
| ScavengerOutpost         | Scavenger toll. Trade pearl for passage through. Second dot sets range from main dot. Direction from the middle dot to the second dot controls the angle of the dear totem's pole. The skull and pearls hanging from it can be changed using the random seed sliders, and the angle the skull faces with the "angle" slider. Requires scavengers to be added to the world file, and scavenger doors be placed in the world. Scavengers will naturally migrate to it. Will also spawn a cache of spears around it for the scavengers. | Yes             |
| TradeOutpost             | Scavenger merchant. Trade pearls for items. Second dot sets range from main dot. | Yes             |
| ScavengerTreasury        | Spawns random scavenger items in the radius around it. Explosive spears, bombs, and lanterns. | Yes             |
| ScavTradeInstruction     | Displays pearl trading tutorial                              | Yes             |
| CustomDecal              | Spawns a distort-able decal that can be placed and changed as needed. | No              |
| InsectGroup              | Spawns a several insects who stay inside the boundaries of the circle. Amount of insects is determined by the density. | Yes             |
| PlayerPushback           | Pushes the player away from a point with increasing force.   | Yes             |
| MultiplayerItem          | Adds an item of choice that can spawn in arena mode.         |                 |
| SporePlant               | Wip                                                          |                 |
| GoldToken                | Spawns an arena unlocking scanplant. center dot is the location of the token, second dot is the roots. Can be configured to show up only in specific difficulties | Yes             |
| BlueToken                | Same as above, except for creature unlocks                   | Yes             |
| DeadTokenStalk           | Same as above, but has nothing to unlock.                    | Yes             |
| NeedleEgg                | Spawns a noodlefly egg. Dot is the egg itself, it will attach to a ceiling on its own. | Yes             |
| BrokenShelterWaterLevel  | If a shelter is configured to be broken on a certain difficulty, it can be flooded to a certain water level. This will set that height. | Yes             |
| BubbleGrass              | Spawns in the bubble grass object that allows for longer breathing. |                 |
| Filter                   | Spawns a zone where objects can be configured to only spawn on certain difficulties. | Yes             |
| ReliableIggyDirection    | Wip                                                          |                 |
| Hazer                    | Spawns a squid like creature called a Hazer. Will make a huge cloud of ink when thrown. | Yes             |
| DeadHazer                | Spawns a dead Hazer.                                         | Yes             |
| Rainbow                  | Spawns a rainbow that will appear with a certain percent at the beginning of a cycle. The rainbows size, thickness, and fade can be controlled with the slider. The dots change it's location and arch. | No              |
| LightBeam                | Spawns a ray of light that can be distorted and moved around by the four points that make up this object's rectangle. Sliders control the depth per layer, as well as how bright it is per layer. The white adjustment is between using a palette color, and using white. | No              |
| NoLeviathanStrandingZone | Creates an area that pushes leviathans, useful for placing down in places where leviathans get stuck. |                 |