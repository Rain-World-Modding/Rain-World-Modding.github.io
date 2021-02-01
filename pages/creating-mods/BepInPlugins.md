# BepInPlugins

BepInPlugins are a kind of game mod native to [BepInEx](/pages/using-mods/BepInEx.html). They are not compatible with Partiality. They should be placed in `Rain World/BepInEx/plugins`. 

---

## Creating a BepInPlugin

### Prerequisites

- A solid understanding of some key concepts including C# syntax and environment, and Unity (good but not necessary)
- Rain World with RW BepInEx set up - see [here](/pages/using-mods/BepInEx.html).
- Some kind of .NET programming environment, probably Visual Studio if you're on Windows, or Visual Studio Code for Linux/Mac. The guide below will assume you're already comfortable with the first prerequisite and your editor and environment of choice. 
    - The .NET Development pack for Visual Studio (or similar for other environments - you need to be able to use .NET Framework 3.5)



### Step 1 - The project

Create a new C# .NET Framework 3.5 Class Library project in your IDE. You will then need to [add some references](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-add-or-remove-references-by-using-the-reference-manager?view=vs-2019). 

It's recommended that you copy the files you need to reference to a safe location outside of the Rain World root directory before referencing them. Assuming you already have BepInEx installed and ready to go, the files (relative to the Rain World root directory) you should reference are:

- `BepInEx/plugins/PartialityWrapper/HOOKS-Assembly-CSharp.dll`
- `BepInEx/core/BepInEx.dll`
- `RainWorld_Data/Managed/UnityEngine.dll`
- `RainWorld_Data/Managed/Assembly-CSharp.dll` - *note: you will need to modify this before accessing private members; see the section "Replacement of Publicity Stunt" on the [BepInEx page](/pages/using-mods/BepInEx.html).*



### Step 2 - The BepInPlugin class

In a your new C# file, make a public class that has the `BepInEx.BepInPlugin` attribute and inherits from `BepInEx.BaseUnityPlugin` . The `BaseUnityPlugin` class inherits from `MonoBehaviour`, so you can use standard Unity script methods such as `OnEnable` and `OnDisable` in this class.

```c#
using BepInEx;

namespace SomeMod
{
    [BepInPlugin("author.my_mod_id", "SomeModName", "0.1.0")]	// (GUID, mod name, mod version)
    public class MyModName : BaseUnityPlugin
    {
    }
}
```



### Step 3 - Hooking

Hooks allow you to execute your own code when the method you are hooking from the game code is called.

Hooking is the recommended way of modifying the functionality of the game, as your hooks will allow the hooks of other mods and the game code itself to run as expected (presuming you don't do something that they don't expect). From your class constructor or `OnEnable`, you can subscribe to the event that triggers when a method from the Rain World code is called. If you don't know how events work, here's a quick example:

```c#
[BepInPlugin("author.my_mod_id", "SomeModName", "0.1.0")]
public class MyMod : BaseUnityPlugin
{
    public MyMod()
    {
        /* This constructor is called when the mod is loaded. */
        
        // subscribe your PlayerUpdateHook to the Player.Update method from the game
        
        On.Player.Update += PlayerUpdateHook;
    }
    
    void PlayerUpdateHook(On.Player.orig_Update orig, Player self, bool eu)
    {
        /* This method will be subscribed to Player.Update. */
        
        orig(self, eu);
        /* Calling orig is what allows the original method and 
         * other hooks to the same method do their thing. 
         * Not calling this is almost always undesirable, and 
         * can cause big issues.
         *   You can execute code before or after the call of 
         * orig as necessary.
         */
    }
}
```

Note that our hook there - `PlayerUpdateHook` - takes the orig method, the `Player` object whose `Update` method was called (since `Player.Update` is not static), and the parameters taken by the original method. 


If you have many hooks consider organising them, perhaps into classes. 

*"Where can I find these magical and elusive Rain World methods?"*
Since the source code for Rain World is not public, one must use a decompiler such as [dnSpy](https://github.com/dnSpy/dnSpy/releases/latest) or [ILSpy](https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.ILSpy) to look through the `Assembly-CSharp.dll` file. 

*Reminder: you should never distribute significant portions of the game's code or the binaries, or that of any closed source mods unless you have explicit permission to do so from the mod author. Pay attention to licenses on public repositories too - see [GitHub's guide to code licensing](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository) and if in doubt ask the author.*



### Testing your code

Build your code and copy the mod's DLL file from wherever your build output is to `Rain World/BepInEx/plugins/` and run Rain World. 



---

## Next steps

So... Where to now? The modding community in the [Rain World Discord](https://discord.gg/rainworld) would love to see what you can concoct! GitHub is a good place for hosting open source code and releases. RainDB is also a good place to share mods - for submission see [this page](https://www.raindb.net/upload.html). 
