# Contribution guide

*Note: guide in progress - exact details to be confirmed. While contributions are appreciated, let's get a decent system set up first.*

When adding to or editing the content of this repository, please follow the list below to help organise the workflow a bit. If you are unsure about how to use GitHub or git, feel free to ask in the RW Discord's modding-general or contact casheww via Discord DMs.

"origin" refers to [the origin repo](https://github.com/Rain-World-Modding/rain-world-modding). 

1. Make sure what you're hoping to add does not already have its own page. Is there enough information to warrant the page's creation instead of adding it to a different page? If a page already exists, feel free to edit it to add new and useful information.
2. Use a fork or branch of the repository to edit (usually you'll want to fork/branch from origin/main to add articles) - committing to origin/main can cause merge conflicts, and no-one likes merge conflicts.
3. It's recommended to use a markdown editor (such as [Typora](https://typora.io)) to create new articles. When done, commit to your fork/branch: 
    - add the .md file you've worked on to the `pages-md` directory
    - use Typora / your editor to export the page as HTML (without formatting) and put the resulting file in the pages in the `pages-html` directory
    - commit to your fork/branch using a *descriptive but concise commit message*. Committing one article's files at a time would be useful.
4. Push or publish your changes to GitHub and use GitHub's site to make a pull request to origin/main. Describe any changes you've made in the pull request message. Accepted pull requests will be merged and automatically deployed to the [website](https://rain-world-modding.github.io/rain-world-modding/index.html). 

Thank you for your interest in the Rain World modding community and happy editing!

