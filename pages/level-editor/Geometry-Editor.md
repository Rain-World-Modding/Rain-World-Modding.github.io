# Level Editor: Geometry Editor

![geoEditor](../../assets/regionDevelopment/levelEditor/geoEditor.png)

The Geometry Editor is the first stop for the creation of new rooms. In the Geometry Editor, you define the gameplay and collision information of your room, as well as the placement of vertical and horizontal bars, shortcuts, entrances and exits (to connect your room to other rooms), and a number of other gameplay relevant elements. Once you have defined your geometry (and ideally play tested your room in-engine) you can move on to the [Tile Editor](Tile-Editor.html) to define the look and props that make up your geometry.



## Controls

---

The arrow keys on your keyboard allow you to change which tool you have selected in the top left panel.

You move the red cursor with the mouse. Left click places elements (and in some cases is also used to remove them).

Numpad 4,8,6 and 2 move the section of your room currently visible in the editor (a selection that is carried forward into the Tile Editor).

As always, 1 will return you to the [dashboard](Official-Level-Editor.html) to save your progress or move to a different editor.



#### Secondary Controls

As an experimental feature, the developers implemented a second cursor and control scheme to allow two users to edit a room simultaneously (with the second user entirely on the keyboard). While this ended up being a little used feature (as far as we are aware), it is still implemented in the current editor (represented by the grey cursor).



## Toolbox

---

Starting from the top left, and going through each row.

- Inverse: Flips the currently selected tile between walls, and air.
- Paint Walls: Paints solid tiles.
- Paint Air: Paints non-solid tiles.
- Make Slope: Paints a slope, these can only be placed inside corners, and as the edges of larger solids
- Make Floor: Paints thin platforms that you can stand on, but also hold down to fall through.
- Rect Wall: paints solid tiles in a rectangle. Click two points to set the rectangle's dimensions and paint.
- Rect Air: Same as above, except for non-solid tiles.
- Move Level: Moves the whole level in a certain direction. Place the mouse cursor outside the level, then use the arrow keys to move the level in the direction you want. It will not work if your mouse is inside the level as using the arrow keys will swap to another tool.
- Place Rock: A Rock will spawn at this location with a 60% chance.
- Place Spear: A Spear will spawn at this location with a 60% chance.
- Crack Terrain: Renders as a roughly cracked fissure through the material painted on it in the tile editor. Slugcat can crawl through these tunnels. An example in the vanilla game is in the western temple styled area of the subterranean. Where there are fissures to travel beneath certain stone statues.
- Empty: Does nothing. Good to set as your tool if you have to tab out, as it does nothing.
- Horizontal Beam: Climbable pole. Slugcat can only climb these on layer 1.
- Vertical Beam: Same as above, except in the other direction.
- Glass Wall: Paints invisible solid walls.
- Copy Backwards: Copies a rectangle of tiles on the current layer to the next layer. This does not wrap around back to layer 1 if you are on layer 3.
- Short Cut Entrance: Places the entrance of a short cut into the room. Please see the tips and tricks section for details of how to properly connect entrances and doors together.
- Short Cut: Places a short cut's travel dot. These go between short cut entrances, and specific entrance or den tiles.
- Dragon Den: Places an enemy nest. These can be configured to spawn enemies in a region using the region's [World File](../region-development/World-File-Format.html).
- Entrance: Used to connect between rooms. Slugcat can use these short cuts as doors to different rooms. This is configured in the regions world file.
- Forbid Fly Chains: Prevents bat flies from hanging together in specific locations to rest.
- Spawn Fly: Does nothing.
- Hive: Places a bat fly hive. Bat flies can use these to quickly travel to different parts of a room.
- Waterfall: Will cause a waterfall to appear in game, with this tile at the top of it.
- Scavenger Hole: Attaches to short cut entrances like dens do, and allows scavengers to quickly travel to this room as they wander through a region.
- Whack-A-Mole-Hole: Attaches to short cut entrances like dens do, and allows creatures to quickly travel around a room. Green lizards use these very often.
- "G": Garbage worm den. Attaches to short cut entrances like normal dens do. These dens are specific to garbage worms, and cannot be entered by other creatures. They are required by garbage worms to properly function. Linking them to normal dens will cause errors and strange behavior. You will still need to assign the worms to the den in the regions world file.
- Worm Grass: Placed above solid ground to spawn worm grass tendrils. The number placed together to the left and right decides the height of the grass.
- Work Layer: Changes layers from 1 to 3 and then back to 1.
- Clear All: Selects a rectangle that resets all tiles inside it, on all layers, back to open air.
- Toggle Mirror: Turns on and off a mirror tile painting mode. What you do on one side of the mirror will be copied on the other.
- Move Mirror: Allows you to move the location of the Mirror.



## Short Cuts and Entrances

---

![geoShortcuts1](../../assets/regionDevelopment/levelEditor/geoShortcuts1.gif)![geoShortcuts2](../../assets/regionDevelopment/levelEditor/geoShortcuts2.png)![geoShortcuts3](../../assets/regionDevelopment/levelEditor/geoShortcuts3.png)

Short cuts and their connections to the various kinds of entrances in Rain World have specific needs! Improperly making the short cut can lead to crashes, or odd behavior in game. This gif presents several examples of properly linked short cuts.

A short cut dot is not required between the short cut's entrance, and the den or door it is connecting to. However, the shortcut must show as an arrow toward the den or door for the link to it to be proper. The short cut entrance also requires walls surrounding it on all sides, with the exception of the side you will enter it from.

Connecting two short cut entrances to each other with dots will connect them as a tunnel between the two. The various other den and entrance types will decide how enemies interact with the entrance. Dens are used for most normal creatures. Scavenger require their unique entrance type to enter the room properly without using normal doors. ( They will not be able to leave the OFFSCREEN room of the region if there are no scavenger doors at all in the region! ) Garbage worms require a unique door due to their AI's behavior, and cannot use normal dens, nore can enemies enter their dens. Finally the Whack-A-Mole holes are used by creatures to warp from various short cuts around the room.

The images on the right also display the bare minimum needed for short cut entrances to function, and example doors in all directions.



## Layer Info

---

![geoLayers](../../assets/regionDevelopment/levelEditor/geoLayers.gif)

Rain World levels consist of 3 layers, each representing a different depth. This layer info is represented

visually through the color of tiles, and you can switch between editing on different layers with the work layer tool in the bottom left of the tool panel. Layer 1 draws in full black, layer 2 draws in green, and layer 3 draws in red. These colors will blend if multiple layers are drawn on top of each other.

Layer 1 is the foreground, and any filled tiles on this layer will have collision. This is the base layer you define for the sake of gameplay, as any air here is space you can traverse.

Layer 2 is the midground, which you can imagine as the back wall of your room.

Layer 3 is the extreme background, behind the back wall of the room (for placing distant objects or giving the room a section of open sky).

**Note:** The tile editor defines the visual tiles and props that make up this geometry, so in order to place solid objects in the tile editor (on any layer), those tiles need to be filled here in the geometry editor. Even though the mid-ground and background do not provide any collision geometry, in order to place solid props on those layers the tiles need to be filled here in the geometry editor. Similarly, some props can only be placed on air on the layers (like fences).



## Tips and Tricks

---

Many of the gameplay features require that they be placed within the margins of your room (represented by the white border). An entrance placed outside of your margins will render your room un-enterable, for example.

Because the tool panel loops around from top to bottom and left to right, when editing the base geometry (walls and air) it's faster to use the arrow keys to go up to reach the work layer tool to swap layers than to cycle through the whole list to reach them. Also, the rectangular wall and air tools will let you edit large chunks of your level much faster than going tile by tile.

**SHORTCUTS:** In order to place functional shortcuts, the shortcut entrance needs to be inset by one tile, and the tile adjacent to it needs to be surrounded by walls on 2 sides (the image above should help clarify what I mean). If the shortcut entrance looks like a hollow circle, it isn't correctly configured (once it is, it will look like the entrances in the above screenshot).

**ENTRANCES:** Setting up entrances to your room is similar to shortcuts, the only difference being that rather than connect to another shortcut entrance, your shortcut dots need to connect to a tile marked as an entrance. This entrance (denoted by a P) MUST be within the level and not on the margins. In order to ensure that your level will function, I recommend at least a one tile gap (a "rule" violated by the right entrance in the above screenshot).

**LAYER OVERLAP:** Because the layers move with a parallax effect, it's often necessary to extend elements on your background layer behind your other layers, otherwise the camera angle will sometimes let you see a gap to the left or right of a background wall and the layer in front of it (for example).