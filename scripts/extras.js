const repoURL =
  "https://github.com/Rain-World-Modding/Rain-World-Modding.github.io";

function getPageSourceUrl(repoUrl) {
  if (window.location.href.endsWith("/")) {
    return repoUrl + "blob/main/index.html";
  } else if (window.location.href.endsWith("about.html")) {
    return repoUrl + "blob/main/about.html";
  } else {
    return (
      repoUrl +
      "blob/main" +
      window.location.href
        .replace(/https*:\/\/[^\/]*/, "")
        .replace(".html", ".md")
    );
  }
}

function addNavbar() {
  // Create elements
  const navbar = document.createElement("header");
  const nav = document.createElement("nav");
  const homeLink = document.createElement("a");
  const spacer = document.createElement("div");
  const aboutLink = document.createElement("a");
  const steamLink = document.createElement("a");
  const raindbLink = document.createElement("a");

  // Append elements
  const navElements = [homeLink, spacer, aboutLink, steamLink, raindbLink];
  navbar.appendChild(nav);
  navElements.forEach((element) => {
    nav.appendChild(element);
  });

  // Assign classes
  navbar.className = "navbar";
  homeLink.className = "active";
  spacer.className = "spacer";

  // Assign attributes
  homeLink.textContent = "Home";
  homeLink.href = "/";

  aboutLink.textContent = "About";
  aboutLink.href = "/about.html";

  steamLink.textContent = "Rain World";
  steamLink.href = "https://store.steampowered.com/app/312520/Rain_World/";
  steamLink.target = "_blank";

  raindbLink.textContent = "RainDB";
  raindbLink.href = "https://www.raindb.net";
  raindbLink.target = "_blank";

  // Append the navbar to the page
  document.body.prepend(navbar, document.body.firstChild);
}

function addFooter() {
  // Setup references
  var pageSourceURL = getPageSourceUrl(repoURL + "/");
  var licenseURL = repoURL + "/blob/main/LICENSE";
  var contribURL = repoURL + "/blob/main/contributing.md";

  // Create elements
  const footer = document.createElement("footer");
  const nav = document.createElement("nav");
  const repoLink = document.createElement("a");
  const sourceLink = document.createElement("a");
  const licenseLink = document.createElement("a");
  const contribLink = document.createElement("a");

  // Append elements
  footer.appendChild(nav);
  const navElements = [repoLink, sourceLink, licenseLink, contribLink];
  navElements.forEach((element) => {
    element.target = "_blank";
    nav.appendChild(element);
  });

  // Assign attributes
  repoLink.textContent = "GitHub Repository";
  repoLink.href = repoURL;

  sourceLink.textContent = "View This Page's Source Code";
  sourceLink.href = pageSourceURL;

  licenseLink.textContent = "License";
  licenseLink.href = licenseURL;

  contribLink.textContent = "Contribution Guide";
  contribLink.href = contribURL;

  // Append the footer to the page
  document.body.appendChild(footer);
}

function addPageInfo() {
  infoDiv = document.getElementsByClassName("article-details")[0];

  let client = new XMLHttpRequest();
  var path = window.location.href
    .replace(/https*:\/\/[^\/]*/, "")
    .replace(".html", ".md");
  var url = `https://api.github.com/repos/Rain-World-Modding/Rain-World-Modding.github.io/commits?path=${path}`;
  client.open("GET", url);

  client.onload = function () {
    if (this.status === 200) {
      var contributors = "";
      var data = JSON.parse(this.responseText);
      data.forEach((element) => {
        if (!contributors.includes(element["author"]["avatar_url"])) {
          contributors += `<a href='https://github.com/${element["author"]["login"]}'><img src='${element["author"]["avatar_url"]}'></a>`;
        }
      });
      infoDiv.innerHTML =
        `<div id="contrib-outer"><h3>Contributors</h3><div class='contributors'>${contributors}</div></div>` +
        `<div class='last-updated'>Last updated : ${data[0]["commit"][
          "committer"
        ]["date"].substring(0, 10)}</div>`;
    }
  };
  client.send();
}

function addTableContainers() {
  const articleContent = document.querySelector(".article-content")
  const tableWrapper = document.createElement("div");
  tableWrapper.className = "table-container";
  const tablesList = articleContent.querySelectorAll("table");
  tablesList.forEach(table => {
    articleContent.replaceChild(tableWrapper, table);
    tableWrapper.appendChild(table);
  })
}

// add missing navbar or footer once the content is loaded
document.addEventListener("DOMContentLoaded", function (event) {
  if (document.getElementsByClassName("nav").length == 0) {
    addNavbar();
  }
  if (document.getElementsByTagName("footer").length == 0) {
    addFooter();
  }
  if (window.location.href.includes("pages")) {
    addPageInfo();
  }
  if (document.querySelectorAll("table")) {
    addTableContainers();
  }
});
