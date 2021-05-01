# Creating New Objects

**This page is a WIP**

There's an assortment of items that can be placed with the power of dev tools, but what if you wanted more? RegionKit is a plugin currently in development that will allow such objects to be distributed with ease, [ something like "in the meantime", but I don't really know what time scale the project is on ]. 

---

## Main Ingredients
- A 'main' class that inherits from `UpdatableAndDeletable` (and `IDrawable` if you want it to have sprites)
- A representation class that inherits from `DevInterface.PlacedObjectRepresentation`; provides the options box for the object in the object view of dev tools
    - You may also want this to have child classes to handle custom controls for your object's options
- A data class that inherits from `PlacedObject.Data`; this stores the options that the representation class tweaks
- A hook for `Room.Loaded`
- A hook for `PlacedObject.GenerateEmptyData`; this will handle instantiating your object's data class
- A hook for `DevInterface.ObjectsPage.CreateObjRep`; this will handle instantiating both your UpdateableAndDeleteable and representation classes

