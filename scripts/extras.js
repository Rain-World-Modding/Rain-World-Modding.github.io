
var repoUrl = "https://github.com/Rain-World-Modding/Rain-World-Modding.github.io";


function addNavbar() {
    var nav = document.createElement("DIV");
    nav.className = "nav";

    nav.innerHTML = 
        `<ul>
            <li><a class="active" href="/"> Home </a></li>
            
            <li style="float:right"><a href="/about.html"> About </a></li>
            
            <li style="float:right"><a href="https://store.steampowered.com/app/312520/Rain_World/">Rain World</a></li>
            <li style="float:right"><a href="https://www.raindb.net">RainDB</a></li>
        </ul>`;
    document.body.insertBefore(nav, document.body.firstElementChild);
}

function getPageSourceUrl(repoUrl) {
    var baseUrl = "./";

    if (window.location.href.endsWith("/")) {
        return repoUrl + "blob/main/index.html";
    }
    else if (window.location.href.endsWith("about.html")) {
        return repoUrl + "blob/main/about.html";
    }
    else {
        return repoUrl + "blob/main" + window.location.href.replace(/https*:\/\/[^\/]*/, "").replace(".html", ".md");
    }
}

function addFooter() {
    var pageSource = getPageSourceUrl(repoUrl+"/");
    var licenseUrl = repoUrl + "/blob/main/LICENSE";
    var contribUrl = repoUrl + "/blob/main/contributing.md";

    var footer = document.createElement("FOOTER");
    footer.innerHTML = 
        `<ul>
            <li><a href="${repoUrl}">Repository</a></li>
            <li><a href="${pageSource}">View this page's source</a></li>
            <li><a href="${licenseUrl}">License</a></li>
            <li><a href="${contribUrl}">Contribution guide</a></li>
        </ul>`;
    document.body.appendChild(footer);
}

function addPageInfo() {
    infoDiv = document.getElementById("info");

    let client = new XMLHttpRequest();
    var path = window.location.href.replace(/https*:\/\/[^\/]*/, "").replace(".html", ".md");
    var url = `https://api.github.com/repos/Rain-World-Modding/Rain-World-Modding.github.io/commits?path=${path}`;
    client.open("GET", url);

    client.onload = function () {
        if (this.status === 200) {
            var contributors = "";
            var data = JSON.parse(this.responseText);
            data.forEach(element => {
                if (!contributors.includes(element['author']['avatar_url'])){
                    contributors += `<a href='https://github.com/${element['author']['login']}'><img src='${element['author']['avatar_url']}'></a>`;
                }
            });
            infoDiv.innerHTML = "<p>Contributors:</p>" + contributors;
        }
    }
    client.send();
}

// add missing navbar or footer once the content is loaded
document.addEventListener("DOMContentLoaded", function(event) {

    if (document.getElementsByClassName("nav").length == 0) {
        addNavbar();
    }

    if (document.getElementsByTagName("footer").length == 0) {
        addFooter();
    }

    // check that page is article page
    addPageInfo();

});

