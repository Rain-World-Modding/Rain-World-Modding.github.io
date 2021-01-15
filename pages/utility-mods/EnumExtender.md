# EnumExtender

[EnumExtender](https://beestuff.pythonanywhere.com/audb/api/mods/0/1/download/latest) is a tool mod by bee, which allows you to add more items in `enum`s much easier.

---

## How to Use

First, create a `public static class` with a name starts with `EnumExt_`.
EnumExtender will automatically detect any class in your assembly with that keyword.
Then create a field with the type of enum you want to extend, and item name for the field name.

```c#
public static class EnumExt_MyMod
{ // You can have multiple EnumExt_ classes in your assembly if you need multiple items with the same name for the different enum
    public static CreatureCommnuities.CommunityID Vultures;
    public static SlugcatStats.Name YellowishWhite;
    public static SlugcatStats.Name WhitishYellow;
}
```

To access these new enum items, instead of `[enum].[item]`, use that static field.
To compare it, use `if` statements.

```c#
public static SlugStatsPatch(On.SlugcatStats.orig_ctor orig, SlugcatStats stats, int slugcatNumber, bool malnourished)
{
    orig.Invoke(stats, slugcatNumber, malnourished);
    if (stats.name == EnumExt_MyMod.YellowishWhite)
    {
        stats.runspeedFac = 1.2f;
        stats.poleClimbSpeedFac = 1.25f;
        stats.corridorClimbSpeedFac = 1.2f;
    }
}
```

However, if EnumExtender is not present in runtime (for instance, the user forgot to install EnumExtender), these fields won't be initialized and stay 0.
This can be used to detect whether EnumExtender is installed or not.

```c#
public static bool HasEnumExt => (int)EnumExt_MyMod.YellowishWhite > 0;
// This value turns true after EnumExtender initializes (after OnEnable)
```

When you have multiple new items, you can also try something like this.

```c#
public static class EnumSwitch
{
    public enum SlugcatStatsName
    {
        DEFAULT = -1, // unrelated to this mod
        YellowishWhite,
        WhitishYellow
    };

    public static SlugcatStatsName GetSlugcatStatsName(SlugcatStats.Name name)
    {
        if (!HasEnumExt) { return SlugcatStatsName.DEFAULT; } // EnumExt is not installed
        if (name == EnumExt_MyMod.YellowishWhite) { return SlugcatStatsName.YellowishWhite; }
        if (name == EnumExt_MyMod.WhitishYellow) { return SlugcatStatsName.WhitishYellow; }
        return SlugcatStatsName.DEFAULT;
    }
}
```

And when you need to use switch later,

```c#
switch (EnumSwitch.GetSlugcatStatsName(name))
{
    default:
    case SlugcatStatsName.DEFAULT: break;
    case SlugcatStatsName.YellowishWhite:
        break;
    case SlugcatStatsName.WhitishYellow:
        break;
}
```

That's about it. This mod is really easy to use and understand, but as many things in Rain World is set in `enum`s, having an ability to edit them grants so much potential.

