
function addNavbar() {
    var nav = document.createElement("DIV");
    nav.className = "nav";
    
    if (window.location.href.endsWith("/") || window.location.href.endsWith("index.html") ||
            window.location.href.endsWith("about.html")) {
        var rootPrepend = "";
    }
    else {
        var rootPrepend = "/rain-world-modding/";
    }

    nav.innerHTML = 
        `<ul>
            <li><a class="active" href="${rootPrepend}index.html"> Home </a></li>
            
            <li style="float:right"><a href="${rootPrepend}about.html"> About </a></li>
            
            <li style="float:right"><a href="https://store.steampowered.com/app/312520/Rain_World/">Rain World</a></li>
            <li style="float:right"><a href="https://www.raindb.net">RainDB</a></li>
        </ul>`;
    document.body.insertBefore(nav, document.body.firstElementChild);
}

function getPageSourceUrl(repoUrl) {
    var baseUrl = "https://rain-world-modding.github.io/rain-world-modding/";

    if (window.location.href.endsWith("modding/")) {
        return repoUrl + "blob/main/index.html";
    }
    else if (window.location.href.endsWith("about.html")) {
        return repoUrl + "blob/main/about.html";
    }
    else {
        return repoUrl + "blob/main/" + window.location.href.replace(baseUrl, "").replace(".html", ".md");
    }
}

function addFooter() {
    var repoUrl = "https://github.com/Rain-World-Modding/rain-world-modding/";
    var pageSource = getPageSourceUrl(repoUrl);
    var licenseUrl = repoUrl + "blob/main/LICENSE";
    var contribUrl = repoUrl + "blob/main/contributing.md";

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

// add missing navbar or footer once the content is loaded
document.addEventListener("DOMContentLoaded", function(event) {

    if (document.getElementsByClassName("nav").length == 0) {
        addNavbar();
    }

    if (document.getElementsByTagName("footer").length == 0) {
        addFooter();
    }

});

