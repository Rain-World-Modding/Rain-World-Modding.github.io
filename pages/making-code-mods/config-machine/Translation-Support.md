# Translation Support

While you can support translation for your mod on your own, Config Machine also offers translation solution.
If you do not want to make GUI and only want to use Translation feature, check out [GeneratedOI](GeneratedOI.html).

---

## Preparation

`OptionInterface` has a method called `Translate`, and when it¡¯s initially called,
it will load specified(`transFile`) txt file from your assembly and make Dictionary depending on Rain World¡¯s language setting.
In `BaseUnityPlugin.LoadOI` method, store the `OptionInterface` instance in somewhere before returning it.

```c#
public static MyOI oi;
public static MyOI LoadOI()
{
    oi = new MyOI(); return oi;
}
```

Then make a static method that calls the translation method.

```c#
public static string Translate(string orig)
{
    if (oi != null) { return oi.Translate(orig); }
    return orig;
}
```

Now when you need to translate something, you can pass your string through this method.

## Writing Translation txt

Create a txt file that contains translation, too.
Add txt file to your project, *make sure* that its encoding is `UTF-8`,
then set it to be [Embedded Resources] for its compile setting.
Then, in the constructor of your OptionInterface, set `transFile` to that resource name.

If you have not put it in any folder, it¡¯s usually `<ProjectName>.<TxtFileName>.txt`, but you might get it wrong.
If it¡¯s wrong when `OptionInterface.Translate` is initially called, Config Machine will log all the resources in your assembly in exceptionLog.txt so you can copy from it.

```c#
public MyOI() : base(plugin: MyPlugin.instance)
{
    this.transFile = "MyPlugin.Translation.txt";
    // if you do not know the resource name, just call Translate.
    // ConfigMachine will log all the resources in your assembly in exceptionLog.txt.
}
```

The format of the translation txt file for Config Machine is quite primitive.
First, you add a keyword, then `|` for language separator,
then language ID(`eng, ita, ger, spa, por, (kor, jap, rus)`), `$` for another separator, then translation.
If there is no translation, the translator will return the keyword, unless there is a translation for ¡®eng¡¯. (In that case, English ¡®translation¡¯ will be used as default translation)

The following is formatting example for txt file.

```
// If the first two characters are '//', this line will be ignored.
Nightcat Horn Colour|kor$¹ã°í¾çÀÌ »Ô »ö±ò
// If you have variables, avoid using partial sentences. Not every language has the same subject-verb-object order.
Press <ThrowKey> to stab.|kor$<ThrowKey> ¹öÆ°À» ´­·¯ Âî¸£±â.
// When translating the shorter-phrase, the translation might be sensitive with context, but English one does not. Duplicate key causes error(You can check exceptionLog.txt for duplicates), so you can set 'eng' translation for these cases.
Property_as of possession|eng$Property|kor$¼ÒÀ¯¹°
Property_as of quality|eng$Property|kor$¼Ó¼º
// For line-breaks, use \n. (In code, it¡¯d be \\n) Each line represents a phrase, so you can¡¯t use actual line-break in a single chunk.
LINE\nBREAK|kor$ÁÙ\n¹Ù²Þ
```

## Running Translation

And here are some examples in code.
Yes, running every text through the `Translate` method is tedious, but this is usually how it¡¯s done in Rain World or many other games.
Make sure to check your mod in another language to confirm you haven't missed any item.

```c#
labelCpkrRadio.text = MyPlugin.Translate("Nightcat Horn Colour");
instance.room.game.cameras[0].hud.textPrompt.AddMessage(MyPlugin.Translate("Press <ThrowKey> to stab.").Replace("<ThrowKey>", k.ToString())); // k is variable in this example.
labelLineBreak.text = MyPlugin.Translate("LINE\\nBREAK");
```

---

These aren¡¯t the part of tutorial but more of tips.
This does not just apply for making Rain World mods but to general, whenever you¡¯re making something that supports translation.

- When you have variables in your sentence, do not use partial phrases and Frankenstein it later with `string.Concat`.
Not every language has the same grammar order of subject-verb-object as English.

- Leave credits to the translators, since you¡¯re most likely getting volunteers from them.
This is both good for showing gratitude to the translators and keeping the quality of the translation.
The lack of credits equals a lack of responsibility.

- Do not use machine translation. That usually hurts the user experience rather than enhancing it.
