# Dev Tools: Map Tab

## ***<u>This article is contains outdated information and needs to be updated!</u>***

![mapTab](../../../assets/regionDevelopment/devTools/mapTab.png)

This is a single tab for the [Dev Tools.](Dev-Tools.html) See that page for more controls and other tabs.

While you will be able to edit and tweak the map ingame, the in game map will only be loaded again on a full restart of Rainworld. It will often be broken as well due to previous exploration of the map. To properly test your map, you will need a backup file from before you entered the region, or to reset the file entirely, and restart the game again. This tool is very picky, and often rendering/exporting the map will fail until you restart Rainworld.



## General controls

---

NOTICE! Although these buttons are behind the map (and are slightly darker due to this), they still function exactly the same!

### PAGES:

Brings you to the other devtool editors.

### Save:

Saves the current map properties. Layout, dev view, enemy preferences, and all. To the region's properties text file, and map text file.

NOTICE! It is important to ALWAYS save before you leave the map tab! The map will reset to its previous state if you change to another tab, or close dev tools! Changing between canon/dev modes will not reset the map. However saving often in this tab is a good habit.

### Modes:

There are two specific map modes, canon, and dev. Canon mode is the maps appearance ingame, and dev mode allows you to set specific properties of rooms, such as creature's attraction to it, and their sub region.



## Dev View

---

![mapConnections](../../../assets/regionDevelopment/devTools/mapConnections.png)

This mode displays every room tied to the region, their names, and their doors. Lines are drawn between

connected doors. Disconnected doors will show an unconnected diagonal line. Doors that do not have a proper connection in their destination room will point into the center of that room's icon instead of to a door. Properly linked doors will show two lines. One going from each room to the proper door on the other end.

The placement of these rooms will not change the map that the player sees in game, nor does it affect room settings that require specific map heights like "AboveCloudsView", and can be aligned to your convenience.

### Understanding Entrance Types:

There are various doors in and out of rooms. These not only include the doors slugcat can use to travel between rooms, but also creature dens, and unique doors; Such as the automatically added sky doors for vultures. The dev view outlines each door in every room connected to the region. Allowing you to easily see which rooms have specific doors as you edit the [World File](https://rain-world-modding.fandom.com/wiki/World_File_Format). The specific doors are as follows:

- Gray Squares are for pipes that travel between adjacent maps. These should not be used for creature spawns.
- Light Blue Squares are spawn locations in the sky for Vultures.
- Dark Blue Squares are underwater spawn locations for Leviathans.
- Dark Gray Squares are travel locations for Scavengers.
- Brown Squares are spawn locations for Garbage Worms
- Bright Green Squares are spawn locations for Batflies
- Pale Green Squares are side entrances that can be used by Miros Birds
- Magenta Squares are the standard creature spawn locations for all other types of creatures.

### Reset Dev Positions:

Holding N and pressing this button will move all rooms to their canon locations. Not used often, Really only useful if you somehow have lost a room off screen.

### Room Attractiveness Tool:

This tool allows you to select an enemy, or enemy class from the right hand menu, and specifically tweak what rooms they love, avoid, are neutral to, stay in, or are not allowed inside of while wandering the map. This does not apply to when an enemy is in pursuit of slugcat, or to tamed creatures. Who will follow you into rooms that are forbidden to them, but try to leave as soon as they return to their normal lurking mode.

The menu on the right allows you to select a specific enemy, and then the tool's mode at the bottom. Clicking a map screen while "cycling" will change it between the various attractiveness options. Clicking the TOOL button will change it to setting specific modes. Clicking "apply tool to all rooms" with a specific mode selected, will paint every room to that mode. Helpful if you want an enemy to only wandering one or two rooms of a huge map, but don't want to set every other room to forbidden manually.

### Sub Regions Tool:

This mode will allow you to click map screens, and to change them between the various sub regions inside the map region's properties.txt file. The NONE sub region is a special flag that will not display an area name until you have entered another sub region. Save rooms and gates automatically have their sub region forcefully set to NONE, and cannot be changed.



## Canon View

---

![mapCanon](../../../assets/regionDevelopment/devTools/mapCanon.png)

This mode is for constructing the map that the player will actually see in game. If you require the actual location of the room in X and Y you will need to open the map_XX.txt file in the region. As some unique effects require specific heights. More details can be found in the [Room Settings Tab](Room-Settings.html).



### Render Map:

This button will export the canon map as a texture, containing the three layers the map uses to draw the in game map. In some cases this will fail. Often due to using it multiple times, or tweaking the map too much. It is a very picky tool. Restarting the game will fix this, and allow you to export properly again. Be sure to save after you export the canon map, as failing to save before you leave the map tab will result in the map resetting to the last save.

### Create Def. Mat. Rectangle

Wip....



## Rendering Minimaps

---

![mapRender](../../../assets/regionDevelopment/devTools/mapRender.png)

Minimaps can be constructed and rendered through the Map Tab. The map tab has four different editing modes: Canonical View, Subregion View, Attractiveness View, and Dev View. For minimap editing, you want to be in the Dev View.

While in Dev view, click and drag a room to reposition it. Click and drag anywhere else to scroll the canvas around. While holding the N key, click a room to change what layer it is in. There are three layers, green being the closest, grey being the middle, and red being the furthest back. In general, you should avoid overlapping any rooms that are in the same layer as each other. Overlapping rooms that are in different layers is fine.

You can click the Save button to save your changes. You should do this periodically to avoid losing any progress. When you are finished positioning all the maps how you want them, click the Render button to generate the final minimap. (This render step tends to fail a lot, see the troubleshooting section below for solutions)



### Troubleshooting

When rendering the minimap, sometimes it will fail. It will either generate a completely empty map (the rendered map image will just be an empty green rectangle), or it will generate a map, but all the map interconnections will be undefined (when you view the minimap, the dotted lines that connect the rooms will either be missing, or will curve all over the place randomly).

Here is the most reliable procedure I've found to have success in rendering the final map:

- When you are done making your changes, hit the save button, but do not hit the render button.
- Exit the game, and either start a new save file, or revert to a save file from before you entered the region for the first time.
- Enter the region fresh, and as soon as you enter the region, go to dev mode, open the dev view map and render it.
- The map should be correctly rendered now.