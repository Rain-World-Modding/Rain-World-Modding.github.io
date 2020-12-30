# Warp

Warp is a utility mod for Rain World that you can use to easily teleport Slugcat to different rooms and regions, this is particularly useful for testing mods and custom regions.

Download and install Warp from [RainDB's](https://www.raindb.net) 'Tools' section or it's [GitHub](https://github.com/LeeMoriya/Warp) page.

## Usage

Install Warp using BepInEx for RW or Partiality, the Warp menu will appear in the pause menu in-game.

A list of rooms in the current region will be displayed on the right, a list of installed regions will appear in the top left, and gate rooms in the bottom left. Simply click on a room name to warp slugcat to that room. They will be placed at the room's first pipe entrance, labelled 0.

Clicking on a different region than the one you are currently in will load a list of all the rooms in that region, allowing you to warp there without the use of gates. This process may take a few seconds depending on the size of the region being loaded. 

### Issues When Warping

If the region doesn't load then there is likely an issue with the region or room you are trying to Warp to. Check your *exceptionLog.txt* for errors and review any recent changes you made. If you are making a custom region make sure that there are no errors with room connections in your World file, or problems with your room's geometry, like pipe entrances. 

If you have installed a new region make sure you have started the game from a fresh save since that region was added or the game may freeze when switching regions or resting in a shelter.

## Custom Den Position

Warp features an option to change which room the game considers as Slugcat's 'Den Position' -- the room they start in that cycle. Note that if you are using Extended Dev Tools, the 'Start Map' parameter in the edtSetup.json must be empty or it will overwrite Warp.

- Hold Shift and click a room name to set the den position.
- Press C to reset the den position to its default.

## Custom Regions Support

Warp supports Garrakx's Custom Regions Support mod which allows for easier creation of new regions and region changes, and will load new rooms from within your CustomResources folder. Below is how room lists are currently generated:

### Current Region

The list of rooms for the region you are currently in are taken directly from the list of loaded AbstractRooms.

### Different Regions

When you click on a button for a different region, the room list is generated like so:

1. Rooms are added to the room list from the vanilla World folder.
2. Each Rooms folder found in CustomResources is scanned and rooms not already in the list are added.

At the moment, this means that if a region pack is present in your CustomResources folder but has been manually disabled in it's regionInfo.json, rooms from this folder will be added regardless and clicking on them will do nothing.

This is also technically the case for any region pack that *removes* rooms, though I don't know of any that do.
