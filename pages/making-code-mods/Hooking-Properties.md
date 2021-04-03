# Hooking Properties

Hooking is currently the least destructive form of code modding used in the Rain World community. It involves 'hooking' a user-written method to a part of the game code.
Usually this part of the game code is also a method (instructions for which can be found [here](BepInPlugins.html)), but it is also possible to hook other things, such as properties.

---

## Example

In this example, we'll look at hooking the `OverseerGraphics.MainColor` getter.

First, reference `BepInEx/core/MonoMod.RuntimeDetour.dll`. In the examples, we'll have some imports at the top of the file:
```cs
using System.Reflection;
using MonoMod.RuntimeDetour;
```
<br>

We now need to write our own delegate for the original getter of the property:
```cs
public delegate Color orig_MainColor(OverseerGraphics self);
```
Note the use of the correct return type, and the use of a `self` since the property is not static.

Now that we have a delegate, we can get onto actually writing our hook. We can do whatever we want here really, so long as we return the correct type.
```cs
public static Color OverseerGraphics_get_MainColor(orig_MainColor orig, OverseerGraphics self)
{
    return new Color(0.6f, 0.28f, 0.46f);
}
```
Note that the type of the first parameter of the hook method is our new delegate. To call the original method in this hook we'd call `orig`, but in this case... I don't want to. This is a good colour :)  . The other paramters match those of the delegate, but for non-static properties this is just the instance the property belongs to.

<br>

Sometime after the mod is loaded - in `OnEnable` is a solid option, create a new `MonoMod.RuntimeDetour.Hook` object as below: 

```cs
// we'll assign binding flags here instead of in the Hook ctor call to organise things a bit for the example.

BindingFlags propFlags = BindingFlags.Instance | BindingFlags.Public;
BindingFlags myMethodFlags = BindingFlags.Static | BindingFlags.Public;


void OnEnable()
{
    Hook overseerColourHook = new Hook(
        typeof(OverseerGraphics).GetProperty("MainColor", propFlags).GetGetMethod(),
        // This gets the getter for OverseerGraohics

        typeof(TheCurrentClass).GetMethod("OverseerGraphics_get_MainColor", myMethodFlags)
        // This gets our hook method
    );
}
```
