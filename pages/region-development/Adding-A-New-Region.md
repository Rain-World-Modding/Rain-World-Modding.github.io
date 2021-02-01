# Adding A New Region

## ***<u>This article is outdated and needs updating!</u>***

1. Pick a two letter acronym for your region. For these examples we'll use XX

2. Open the file "Rain World/World/Regions/regions.txt"

3. Add your two letter acronym to the end of the file.

4. Create a new folder in the Regions directory with your two letter acronym

5. Copy files over from one of the other regions to use as a template

6. Rename instances of the old region's acronym to your new region's acronym

  6a. I recommend blanking out the map_XX file entirely

  6b. Remove all Room_Attr lines from the Properties file

  6c. Delete everything from the Rooms folder, leaving just one room to use as your start map to build off of.

  6d. Blank out most of the ROOMS and CREATURES sections from the [world_XX](World-File-Format.html) file.
  		- If you want Vultures/Leviathans/Scavengers in your region, leave the OFFSCREEN section under CREATURES
    		- You'll add a couple lines under ROOM for connecting the gate and your start room, so your region at least has SOMETHING in it (once you make the gate).



## Adding the Gate

---

1. Go to the "Rain World/World/Gates" folder

2. Take one of the gates in here to use as a base, and copy/paste it

3. Rename the copies to match your region connection. For example, if you're connecting to SU, name the files GATE_SU_XX

4. You'll also need to open the GATE_YY_XX.txt file and edit the first line of the file to match

5. Open the file "Rain World/World/Gates/locks.txt"

6. Add a new line for your new gate, and specify the karma requirements for the two sides of the gate

7. Go back to each of the two regions and add connections to the gate in their world_XX.txt files