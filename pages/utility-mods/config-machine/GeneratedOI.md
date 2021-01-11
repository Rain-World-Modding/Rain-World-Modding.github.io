# GeneratedOI

`GeneratedOI` is a child class of `OptionInterface` that helps generating fixed-format GUI with less effort.

---

## Displaying Basic Profile

Simply inheriting `GeneratedOI` instead of `OptionInterface` works.
This does make your mod dependent to Config Machine,
and Config Machine generates GUI to display the basic information of your mod without this dependency.
So this is only useful when you're using OptionInterface for other features, like its [Translation API](Translation-Support.html).

```c#
public class MyOI : GeneratedOI
{
    private const string desc = "Changes this thing and that thing";
    
    public MyOI() : base(plugin: MyPlugin.instance, desc)
    { transFile = "MyPlugin.Translation.txt"; }
}
```

The code above would generate a GUI like the following image:

![GeneratedOI Sample](../../../assets/configmachine/GeneratedOI-sample.png)

You can also use its static method `AddBasicProfile` for basic profiles on top of the canvas.
This also has an overload that accepts `OpScrollBox` instead of `OpTab`,
if you have `OpScrollBox` replacing `OpTab`.

```c#
public override void Initialize()
{
    base.Initialize();
    Tabs = new OpTab[] { new OpTab() };
    GeneratedOI.AddBasicProfile(Tabs[0], rwMod);
    
    Tabs[0].AddItems(new OpCheckBox(100f, 350f, "EnableStuff", false) { description = "Enables this stuff" });
}
```

---

## BepInEx.Configuration

If you only need to have few configurable like simple `bool`s and you don't need special design for your GUI,
you can simply use `BepInEx.Configuration` which is BepInEx's native configuration support.
This generates a cfg file in `BepInEx/config` folder,
and Config Machine will use that file instead of creating a new folder in `ModConfigs` folder.

This method has several upsides and downsides.
- You don't need to reference Config Machine in your project, and this doesn't create a dependency for Config Machine.
- The users can configure the plugin by opening the cfg file in Notepad outside the game.
- However, you do not have control on detailed GUI design.

First, we need `ConfigEntry` which you can bind to the `Config` property of `BaseUnityPlugin`.
Consult [BepInEx Documentation](https://bepinex.github.io/bepinex_docs/master/articles/dev_guide/plugin_tutorial/3_configuration.html) for farther detail.

```c#
public static ConfigEntry<string> cfgText;
public static ConfigEntry<bool> cfgCheck;

void Awake()
{
    cfgText = Config.Bind(
            "General", // section: defines which OpTab this will go
            "My Setting", // key: the name of setting
            "Hello, world!" // defaultValue
            "This is a description. It does things."
                // The description will be shown the right side of UIconfig
                // When you hover your mouse on UIconfig,
                // the first sentence will be displayed at the bottom of the screen
        );
    cfgCheck = Config.Bind("General", "My Other Setting", true, "Another description is this.");
}
```

To access those settings, use `Value`.

```c#
if (cfgCheck.Value)
{ Logger.LogMessage(cfgText.Value); }
```

### Acceptable Types

As of Config Machine `v1.5.1`, it accepts the following types and uses provided UIconfig.
(Height is the pixel height that how much this ConfigEntry would use.
And each entry get 20 pixeled gaps in between)

|type           |UIconfig	            |Height |Note	|
|---:	        |:---:	                |---:	|:---	|
|bool           |OpCheckBox             |60     | |
|byte           |OpSliderSubtle         |90     |Range: [0, 20]   |
|uint           |OpSlider               |90     |Range: [0, 100]   |
|int            |OpTextBox              |60     |Accepts: Int  |
|float          |OpTextBox              |60     |Accepts: Float   |
|string(Hex)    |OpColorPicker          |170    |When defaultValue is Hex   |
|string         |OpTextBox              |60     |When defaultValue is not Hex; Accepts: ASCII   |
|KeyCode        |OpKeyBinder            |100    |   |
|enumType       |OpResourceSelector     |60     |   |
|default        |N/A                    |       |Will warn the user that this plugin has ConfigEntry that's not supported by Config Machine   |
