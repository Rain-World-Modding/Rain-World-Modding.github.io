# Contribution guide


When adding to or editing the content of this repository, please follow the list below to help organise the workflow a bit. If you are unsure about how to use GitHub or git, feel free to ask in the RW Discord's modding-general or contact casheww via Discord DMs.

*"Origin" refers to [the origin repo](https://github.com/Rain-World-Modding/rain-world-modding) . "Origin/main" refers to the branch of the origin repo called "main".*

---
### Adding a new article

1. Does the page you're making already exist? Could the information you want to add be added to an existing page? Think about these things before creating a new article.

2. Fork origin/main (or wherever the article you wish to edit is) using GitHub.

3. Clone your fork to your machine and use a markdown editor (such as [Typora](https://typora.io)) to create/edit the article locally. A rough styling guide can be found below this list.

4. Find an appropriate category for your article, or if one does not exist create a new one.
    - To create a new category, add the name of the category to `pages/pages.json` as a new key. Add a list as the corresponding value. Create a new folder in the `pages` folder and make its name the name of the category but all lowercase and each space with "`-`" (a hyphen).

5. Save your article's .md file to the category's folder, avoiding using spaces in the file name. Export an HTML (without styling) of this article (this is an option in Typora under File>Export) and place the .html file in the same place with the same name as the .md file.

6. Open `pages/pages.json` in a text editor and add the exact name of your .md file (minus the md file extension) to the list corresponding to the chosen category. Here is an example extract from the json file - note the usage of double quotes and commas:

    ![pages.json example](/assets/pagesJsonExample.png)
    ![category example from pages.json](/assets/pagesExample.png)


7. Once you're happy, use a git tool to commit your changes and push to your fork on GitHub.

8. Using GitHub, make a pull request from your fork with edits to the origin/main. Someone can then review your pull request and merge it with origin, edit, or request edits. Pull requests can then be merged by a user with write permissions for the origin repository.

An automated script will add the required CSS and JS resource links to the article, and then everything on origin/main will be deployed to [the website](https://rain-world-modding.github.io/rain-world-modding/index.html) . 

---
### Article styling guide (markdown)

Check out [GitHub's markdown syntax guide](https://guides.github.com/features/mastering-markdown/) for reference. <br>
You can also take a peak at the source for other markdown articles in this repository on GitHub by viewing the file and clicking the "Raw" button at the top-right of the file viewer.

- Use an h1 at the top of the article for the title. This may be different to the file name if you wish. Reserve h1 for this purpose. A divider line will be automatically added below this.

- **If** a brief page summary is included after the h1, use `---` on a new line to add a divider before the main body of the article (but after the summary).

- Feel free to use images and other media where they're helpful! You can place assets in the `/assets` folder - try to use relative paths when referencing assets in the repo - these should start with `../../assets/` with an additional `../` at the start for each extra category of depth the article has (0 extra if the article is in `pages/some-category`. If using many assets on your page, please add a folder for this page inside `/assets` and place your assets there instead.

- Use headers of h2 and h3 where you think they're helpful for understanding the different sections of the article.

---

Thank you for your interest in the Rain World modding community, and happy editing!

