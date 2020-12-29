# BepInEx

BepInEx is a plugin framework primarily for Unity games. In the Rain World modding community, we are migrating to a modified version of BepInEx (from the Partiality launcher, which is now abandonware). 

**Very important note:** the generic BepInEx releases are not directly compatible with Rain World / RW's old Partiality mods. It is imperative you use modified Rain World BepInEx for support with the majority of existing Rain World mods (information current on 29th Dec 2020).

RW BepInEx can currently be downloaded from [here](https://drive.google.com/file/d/1WcCCsS3ABBdO1aX-iJGeqeE07YE4Qv88/view). 

The following video tutorial made by LeeMoriya explains how to install both RW BepInEx and BOI (see below), as well as the additional steps required to migrate from Partiality to BepInEx if applicable) - https://youtu.be/brDN_8uN6-U .

---

## Differences from Partiality

*Partiality is a deprecated mod launcher that used to be the primary mod loader for the Rain World modding community. It served us well, but now BepInEx is here as a superior alternative.*

### BOI Interface

BepInEx doesn't have a graphical user interface (or GUI - the app with buttons and such). Obviously this is a little tedious, as users would be required to move mod DLLs between folders themselves... This is where thalber's BlepOutIn (or BOI) launcher comes in. BOI is an app that provides a nice interface for RW BepInEx, as well as some other related tools such as easy access to Extended Dev Tools settings and region pack settings.

![BOI](https://rain-world-modding.github.io/rain-world-modding/assets/BOI-main.png)

You can find the release page for BOI [here](https://github.com/thalber/BOI/releases/latest). 



### Increased stability

The BepInEx part of RW BepInEx has been tested by a community far larger than Rain World, as it is used for many other Unity games. This means that it is more reliable and stable than Partiality. In addition, future bugs found in BepInEx and BOI will likely be addressed promptly, whereas Partiality is abandoned and will receive no widespread support.



### Ability to run BepInPlugins

BepInPlugins, as the name suggests, are plugins made for BepInEx. Simply put, they won't run on Partiality. As of 29th Dec 2020, only one BepInPlugin has been released, but it's inevitable that more will come (this excludes the BepInPlugins used within RW BepInEx itself). 

As mentioned at the top of the article, RW BepInEx supports the use of Partiality mods.

