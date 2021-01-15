# Provided UIelements [WIP]

This page is up to date with Config Machine `v1.5.1`.

This page explains what each provided `UIelement` is and how to use them.
You can check out the source code of Config Machine from its [github page](https://github.com/metnias/CompletelyOptional),
or have `ConfigMachine.xml` in your Reference folder for summaries.
However, there are functions left unused (mainly because the modders are unaware) so this page will cover them.

Some provided `UIelement`s have `fixedSize`, which prevents it being resized.
The list of those follows:

|UIelement|width|height|
|:-|-:|-:|
|OpCheckBox|24|24|
|OpRadioButton|24|24|
|OpDragger|24|24|
|OpSlider|**30*||
|OpSliderSubtle|**30*||
|OpComboBox||24|
|OpColorPicker|150|150|
|OpTextBox||24|
|OpHoldButton|rad:|*55*|

(* The width perpendicular to its length is fixed)


---


## Table of Contents

1. [UIelement](##UIelement)
    1. [OpLabel](###OpLabel) & [OpLabelLong](####OpLabelLong)
    2. [OpRect](###OpRect)
    3. [OpImage](###OpImage)
    4. [OpScrollBox](###OpScrollBox)
    5. [OpContainer](###OpContainer)
2. [UIconfig](##UIconfig)
    1. [OpCheckBox](###OpCheckBox)
    2. [OpRadioButtonGroup](###OpRadioButtonGroup) & [OpRadioButton](####OpRadioButton)
    3. [OpDragger](###OpDragger)
    4. [OpSlider](###OpSlider) & [OpSliderSubtle](####OpSliderSubtle)
    5. [OpKeyBinder](###OpKeyBinder)
    6. [OpComboBox](###OpComboBox) & [OpResourceSelector](####OpResourceSelector) & [ListItem](####ListItem)
    7. [OpColorPicker](###OpColorPicker)
    8. [OpTextBox](###OpTextBox)
3. [UItrigger](##UItrigger)
    1. [OpSimpleButton](###OpSimpleButton) & [OpSimpleImageButton](####OpSimpleImageButton)
    2. [OpHoldButton](###OpHoldButton)
4. [Custom Classes](##Custom-Classes)
    1. [DyeableRect](###DyeableRect)
    2. [BumpBehaviour](###BumpBehaviour)
    3. [FTexture](###FTexture)
    4. [FCursor](###FCursor)
    5. [LabelText](###LabelText)
    6. [LoremIpsum](###LoremIpsum)


---


## UIelement

UIelement is everything that can be added in `OpTab`, which is 600x600 canvas.
Its sub-categories are [UIconfig](##UIconfig) and [UItrigger](##UItrigger).
UIelement can be either rectangular(pos and size) or circular(pos and rad),
although the vast majority of provided UIelements are rectangular.

(*Italic* properties call `OnChange` when it's modified)

|Property||
|:-|:-|
|*pos(setter)*|Sets bottom-left position *relative* to its canvas (`OpTab`/`OpScrollBox`).|
|*size*|The size of the element. (When this is rectangular)|
|*rad*|The radius of the element. (When this is circular)|
|description|Infotext that will be shown at the bottom of the screen when MouseOver is true.|
|MouseOver|Whether the mouse cursor is over this element.|

|Method||
|:-|:-|
|Hide()|Hides this UIelement, and prevent interaction.|
|Show()|Unhide this UIelement.|
|GetPos()|Returns bottom-left position *relative* to its canvas (`OpTab`/`OpScrollBox`). (pos(getter) returns *absolute* position)|
|Reset()|Reset this UIelement if it's possible.|
|FrameMultiply(origFrameCount)|(static) When you have a frame counter in Update, use this to accommodate with Many More Fixes' FPS unlock feature.|
|DTMultiply(deltaTime)|(static) Without MMF's FPS meddling, this returns somewhere close to `1f`. Use this for ticking gradual changes.|


### OpLabel

![OpLabel Sample](../../../assets/configmachine/provided/Label.png)

Simply displays text.

(*Italic* parameters are optional)

|Constructor Parameter|Displays text aligned to defined rectangular|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|size|Width and height of the rectangle this UIelement occupies.|
|*text*|Text to be displayed. Setting it empty will generate Lorem Ipsum for testing.|
|*alignment*|Horizontal alignment, whether the text is aligned to left, center, right with the rectangle defined its size.|
|*bigText*|Whether to use the bigger font or not.|

|Constructor Parameter|Displays text that goes right from the position|
|:-|:-|
|posX|Relative distance from the canvas origin to the left side of the UIelement.|
|posY|Relative distance from the canvas origin to bottom side of the UIelement.|
|*text*|Text to be displayed. Setting it empty will generate Lorem Ipsum for testing.|
|*bigText*|Whether to use the bigger font or not.|

|Property||
|:-|:-|
|*text*|Text to be displayed.|
|autoWrap|If true, when the text goes over its width, a linebreak will be inserted.|
|*alignment*|Horizontal alignment, whether the text is aligned to left, center, right with the rectangle defined its size.|
|*verticalAlignment*|Vertical alignment, whether the text is aligned to top, center, bottom with the rectangle defined its size.|
|bumpBehav|`null` by default. Setting this to other bumpBehaviour will synchronize highlighting. Creating new BumpBehaviour with this label turns itself reactive.|
|color|Colour of the text.|

#### OpLabelLong

A child class of [`OpLabel`](###OpLabel) that is specialized for displaying a long wall of text.
This will always use the smaller font.

|Constructor Parameter||
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|size|Width and height of the rectangle this UIelement occupies.|
|*text*|Text to be displayed. Setting it empty will generate Lorem Ipsum for testing.|
|autoWrap|If true, when the text goes over its width, a linebreak will be inserted.|
|*alignment*|Horizontal alignment, whether the text is aligned to left, center, right with the rectangle defined its size.|

|Property||
|:-|:-|
|allowOverflow|If it's false, text that goes over the height will be discarded.|


### OpRect

![OpRect Sample](../../../assets/configmachine/provided/Rect.png)

Simple rectangular, useful to make a boundary to group UIelements.
Z-order is the order they're initialized, so for that purpose, initialize OpRect beforehand.

|Constructor Parameter||
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|size|Width and height of the rectangle this UIelement occupies.|
|*alpha*|Alpha of the background of the rectangle.|

|Property||
|:-|:-|
|colorEdge|The colour of boundary sprites.|
|colorFill|The colour of fill sprites.|
|alpha|Alpha of the background of the rectangle. If doesBump, this gets ignored.|
|doesBump|If true, this rectangle reacts to mouse cursor hovering .|
|bumpBehav|If doesBump, this controls reaction. If not, this stays `null`.|


### OpImage

![OpImage Sample](../../../assets/configmachine/provided/Image.png)

Displays an image, whether it's `FAtlasElement` that's already loaded in `Futile.atlasManager`, or `Texture2D`.

|Constructor Parameter|Displays Texture2D|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|image|Texture2D image to be displayed.|

|Constructor Parameter|Displays FAtlasElement|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|fAtlasElement|The name of FAtlasElement.|

|Property||
|:-|:-|
|*color*|The colour of the sprite.|
|*anchor*|The anchor of the sprite. (0f, 0f) to set pos as BottomLeft, and (0.5f, 0.5f) to set pos as the centre.|
|*scale*|The scale of the sprite.|
|*alpha*|The alpha of the sprite.|

You can change the image without making new OpImage.
However, you cannot change the Texture2D version to FAtlasElement and vice versa.

|Method||
|:-|:-|
|ChangeImage(newImage)|Swap image to new Texture2D.|
|ChangeElement(newElement)|Swap FAtlasElement to new one.|


### OpScrollBox

OpScrollBox is written by Slime_Cubed.
It's a special UIelement that acts as a canvas, like OpTab.

![OpScrollBox Sample - Box](../../../assets/configmachine/provided/ScrollBox_Box.png)

|Constructor Parameter|Rectangular ScrollBox inside OpTab|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|size|The size of the display.|
|contentSize|Internal length of the scroll direction.|
|*horizontal*|Whether this scrolls horizontally or vertically.|
|*hasBack*|Whether its boundary will have filled backdrop or not.|
|*hasSlideBar*|Whether this will have a scrollbar or not.|

![OpScrollBox Sample - Tab](../../../assets/configmachine/provided/ScrollBox_Tab.png)

|Constructor Parameter|ScrollBox that replaces OpTab|
|:-|:-|
|tab|BottomLeft position relative from the canvas origin.|
|contentSize|The size of the display.|
|*horizontal*|Whether this scrolls horizontally or vertically.|
|*hasSlideBar*|Whether this will have a scrollbar or not.|

Think of OpScrollBox as a window that displays a larger canvas inside.
The size of this window is the same as `size`.
The size of the canvas inside has `contentSize` for its scroll-direction length,
and the other length matches the width of this window.

![OpScrollBox Diagram](../../../assets/configmachine/provided/ScrollBox_Diagram.png)

The diagram above would be coded like the following.
Their `pos` is relative to the bottom left origin of the canvas inside the OpScrollBox.
The result of this code is shown above.

```c#
OpScrollBox scb = new OpScrollBox(new Vector2(100f, 100f), new Vector2(240f, 150f), 400f);
Tabs[0].AddItems(scb); // Not required if you're using Tab version of constructor
scb.AddItems(new OpLabelLong(new Vector2(20f, 20f), new Vector2(120f, 200f)),
    new OpSlider(new Vector2(160f, 30f), "_", new IntVector2(-20, 20), length: 180, true, 10));
// Use AddItems on OpScrollBox instead of OpTab
```

|Property||
|:-|:-|
|redrawFlags|When this ScrollBox should be redrawn. Never / Always(default) / OnHover / OnKeypress.|
|colorEdge|Edge colour of rectangles.|
|colorFill|Fill colour of rectangles.|
|fillAlpha|Fill alpha of boundary rectangle.|
|doesBackBump|If false, the boundary rectangle does not react with mouseover.|
|ScrollLocked|Whether the scrolling is locked. Manipulated by `Lock` and `Unlock` method.|
|ScrollOffset|The visual offset, in pixels, of the contents of this ScrollBox. (<=0)|
|MaxScroll|The value of `ScrollOffset` at the topmost or rightmost position of the box. (<=0)|
|targetScrollOffset|The target value of `ScrollOffset`. Change this to smoothly animate scrolling.|

|Method||
|:-|:-|
|AddItems(items)|Adds a collection of items to the interior of this ScrollBox. Use this instead of `OpTab.AddItems` for its children.|
|Lock(stopImmediately)|Locks scrolling. If `stopImmediately`, ignore `targetScrollOffset` and stops immediately.|
|UnLock()|Unlocks scrolling.|
|ScrollToTop(*immediate*)|Scrolls to the top/leftmost. If `immediate`, scrolling animation gets cancelled.|
|ScrollToBottom(*immediate*)|Scrolls to the bottom/rightmost. If `immediate`, scrolling animation gets cancelled.|
|MarkDirty()|Forces redrawing at the end of this frame.|
|MarkDirty(time)|Forces redrawing for the amount of `time` in seconds.|


### OpContainer

This is an easy-to-access FContainer for ConfigMenu.

|Constructor Parameter||
|:-|:-|
|pos|The origin of this element relative to the canvas origin.|

|Property||
|:-|:-|
|container|Accessible FContainer. You can access this without checking isOptionMenu. (NullRef-proof)|


---


## UIconfig

`UIconfig` is a subcategory of [UIelement](##UIelement), and has few extra properties and methods.
Their value gets saved in `ModConfigs` folder in json format.
If the key is either `null`, Empty, or starts with `_`,
it is considered `cosmetic` and its value won't be saved.

For collecting config values, access `config` dictionary with `key` you've set, in `ConfigOnChange`.

|Property||
|:-|:-|
|key|(readonly) Unique key to save and access the value.|
|*value*|The value that gets saved. `valueInt`, `valueFloat`, and `valueBool` exist which is useful for designing reactive GUI.|
|greyedOut|If true, the element gets greyed out visually and cannot be interacted with.|
|bumpBehav|`BumpBehaviour` instance this UIconfig has.|

|Method||
|:-|:-|
|ForceValue(newValue)|Change `value` without invoking `OnChange()`.|


### OpCheckBox

![OpCheckBox Sample](../../../assets/configmachine/provided/CheckBox.png)

[CheckBox](https://en.wikipedia.org/wiki/Checkbox) (a.k.a. TickBox) permits the user to make a binary choice.
This returns bool (`"true"` or `"false"`).
Its size is fixed to 24x24.

|Constructor Parameter|Default constructor|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|key|Unique key to save and access the value.|
|*defaultBool*|Default value.|

|Constructor Parameter|Lazier version that accepts two float for pos|
|:-|:-|
|posX|Relative distance from the canvas origin to the left side of the UIelement.|
|posY|Relative distance from the canvas origin to bottom side of the UIelement.|
|key|Unique key to save and access the value.|
|defaultBool|Default value.|

|Property||
|:-|:-|
|colorEdge|The colour of its boundary and its symbol.|
|colorFill|The colour that fills inside.|

### OpRadioButtonGroup

![OpRadioButton Sample](../../../assets/configmachine/provided/RadioButton.png)

[RadioButton](https://en.wikipedia.org/wiki/Radio_button) (a.k.a. OptionButton) permits the user to choose only one of a predefined set of mutually exclusive options.
`OpRadioButton` is *UIelement* that *looks* like an UIconfig, but isn't.
`OpRadioButtonGroup`, albeit invisible, is what actually stores the value to be saved.
This returns int value.

As OpRadioButtonGroup is arbitary, it doesn't need the `pos` to be initialized.
However, if your OpRadioButtons should be in OpScrollBox, add OpRadioButtonGroup for its child instead of OpTab.

|Constructor Parameter|Default constructor|
|:-|:-|
|key|Unique key to save and access the value.|
|*defaultValue*|Default value. 0 or higher.|

|Method||
|:-|:-|
|buttons|OpRadioButtons that belong to this. Use SetButtons(buttons) to set.|

|Method||
|:-|:-|
|SetButtons(buttons)|Binds OpRadioButton to this. This also adds `OpRadioButton`s to the canvas this is in.|
|Hide()|Calls Hide() for all children.|
|Show()|Calls Show() for all children.|
|SetColorEdge(newColor)|Changes colorEdge of all children.|
|SetColorFill(newColor)|Changes colorFill of all children.|

Example:

```c#
OpRadioButtonGroup group = new OpRadioButtonGroup("MyOption");
Tabs[1].AddItems(group); // Add this to canvas before calling SetButtons
group.SetButtons(new OpRadioButton[] {
    new OpRadioButton(300f, 450f), new OpRadioButton(350f, 450f) });
// SetButtons adds params to the canvas the group is in, so no need to call AddItems again.
```

#### OpRadioButton

This is an UIelement and it alone does not do anything.
Its size is fixed to 24x24.

|Constructor Parameter|Default constructor|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|

|Constructor Parameter|Lazier version that accepts two float for pos|
|:-|:-|
|posX|Relative distance from the canvas origin to the left side of the UIelement.|
|posY|Relative distance from the canvas origin to bottom side of the UIelement.|

It has properties that's the same name as UIconfigs, and they do identical things.

|Property||
|:-|:-|
|greyedOut|If true, locks interaction with this button. The users still can interact with other OpRadioButton in the group.|
|colorEdge|The colour of its boundary and its symbol.|
|colorFill|The colour that fills inside.|
|*value*|The value of this, although this doesn't get saved. *valueBool* returns this in bool.|
|bumpBehav|BumpBehaviour instance that's bound to this.|


### OpDragger

![OpDragger Sample](../../../assets/configmachine/provided/Dragger.png)

Rain World Dragger is a small box with a number, which the users can adjust by holding the mouse and move vertically.
It is useful for cramping adjustable int value in a tight space.
This returns int value.
Its size is fixed to 24x24.

|Constructor Parameter|Default constructor|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|key|Unique key to save and access the value.|
|*defaultInt*|Default value.|

|Constructor Parameter|Lazier version that accepts two float for pos|
|:-|:-|
|posX|Relative distance from the canvas origin to the left side of the UIelement.|
|posY|Relative distance from the canvas origin to bottom side of the UIelement.|
|key|Unique key to save and access the value.|
|*defaultInt*|Default value.|

|Property||
|:-|:-|
|min|The minimum number this dragger is allowed to go. (default: 0)|
|max|The maximum number this dragger is allowed to go. (default: 99)|
|colorEdge|The colour of its boundary.|
|colorFill|The colour that fills inside.|
|colorText|The colour of its number inside.|


### OpSlider

![OpSlider Sample](../../../assets/configmachine/provided/Slider.png)

[Slider](https://en.wikipedia.org/wiki/Slider_(computing)) (a.k.a. TrackBar) allows the users to set value by dragging the indicator.
Clicking a point on the slider also works.
This returns int value.
The width perpendicular to its length is fixed to 30.

|Constructor Parameter|Default constructor.|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|key|Unique key to save and access the value.|
|range|Inclusive range of value.|
|length|The length of this element.|
|*vertical*||
|*defaultValue*|Default value.|

|Constructor Parameter|Length = range * multi|
|:-|:-|
|pos|BottomLeft position relative from the canvas origin.|
|key|Unique key to save and access the value.|
|range||
|*multi*|How much pixels length each tick would take.|
|*vertical*||
|*defaultValue*|Default value.|



#### OpSliderSubtle

![OpSliderSubtle Sample](../../../assets/configmachine/provided/SliderSubtle.png)


### OpKeyBinder


### OpComboBox

![OpComboBox Sample](../../../assets/configmachine/provided/ComboBox.png)

[ComboBox](https://en.wikipedia.org/wiki/Combo_box) is a combination of [Drop-down List](https://en.wikipedia.org/wiki/Drop-down_list) and SearchBox.


#### OpResourceSelector
#### ListItem
While this technically belongs to [Custom Classes](##Custom-Classes),
this is currently only used in `OpComboBox` so it will be included here.


### OpColorPicker

![OpColorPicker Sample](../../../assets/configmachine/provided/ColorPicker.png)

[ColorPicker](https://en.wikipedia.org/wiki/Color_picker) (a.k.a. ColorChooser) allows the users to select a Color.
OpColorPicker has four modes of selecting Color:
RGB(Red/Green/Blue), HSL(Hue/Satuation/Lightness), PLT(Palette), and HEX (which can be copied and pasted from Clipboard).
OpColorPicker stores value in HEX, so `OpColorPicker.HexToColor` method comes handy converting that.



### OpTextBox

[TextBox](https://en.wikipedia.org/wiki/Text_box) (a.k.a. TextField or TextEntryBox) allows the users to input text information.


---


## UItrigger



### OpSimpleButton

SimpleButton is a [PushButton](https://en.wikipedia.org/wiki/Button_(computing)) that allows the users to trigger an event.


#### OpSimpleImageButton


### OpHoldButton

![OpHoldButton Sample](../../../assets/configmachine/provided/HoldButton.png)

---


## Custom Classes


### DyeableRect


### BumpBehaviour


### FTexture


### FCursor


### LabelTest


### LoremIpsum



|Properties||
|:-|:-|
|*_init*|Whether this is initialized in ConfigMenu or not. The same as `OptionInterface.isOptionMenu`.|
|*menu*|Rain World Menu instance this element is belong to.|
|*owner*|Rain World Page instance this element is belong to.|
|*tab*|OpTab instance this element is in.|
|*subObjects*|`MenuObject` instances this element has.|
|*myContainer*|FContainer that this element has. It gets initialized in constructor *only* when `_init`.|
|*isHidden*|Whether this is hidden and not visible.|
|*fixedSize*|If this is not null, this element's size will always be this. (*fixedRad* does the similar)|
|*_soundFill*|Add number (in proportion with sound effect's length) to this whenever you're playing soundeffect.|
|*_soundFilled*|If this is true, avoid excuting `menu.PlaySound`|