# Contribution guide

*Note: guide in progress - exact details to be confirmed. While contributions are appreciated, let's get a decent system set up first.*

When adding to or editing the content of this repository, please follow the list below to help organise the workflow a bit. If you are unsure about how to use GitHub or git, feel free to ask in the RW Discord's modding-general or contact casheww via Discord DMs.

"origin" refers to [the origin repo](https://github.com/Rain-World-Modding/rain-world-modding). 

1. Make sure what you're hoping to add does not already have its own page. Is there enough information to warrant the page's creation instead of adding it to a different page? If a page already exists, feel free to edit it to add new and useful information.

2. Use a fork or branch of the repository to edit (usually you'll want to fork/branch from origin/main to add articles) - committing to origin/main can cause merge conflicts, and no-one likes merge conflicts.

3. It's recommended to use a markdown editor (such as [Typora](https://typora.io)) to create new articles. When done, commit to your fork/branch with the following structure: 
    - use Typora / your editor to export the page as HTML (without formatting)
    - find an appropriate category for your article in the `pages` folder, and put your .md and .html files *of the same name* in that category folder
        - if your article needs a new category, create a new folder in the `pages` folder with a suitable name - the name should be all lowercase and spaces should be replaced with "`-`" (a hyphen)
    - add the exact name of your article file (minus the file extension) to the correct category in `pages/pages.json`. Make sure a comma is used to separate it from the previous entry / following entries in the list (JSON lists are enclosed by square brakcets)
        - if you have created a new category, add the category name as a new key in `pages/pages.json`.

4. Push or publish your changes to GitHub and use GitHub's site to make a pull request to origin/main. Accepted pull requests will be merged and automatically deployed to the [website](https://rain-world-modding.github.io/rain-world-modding/index.html). 


Thank you for your interest in the Rain World modding community, and happy editing!

