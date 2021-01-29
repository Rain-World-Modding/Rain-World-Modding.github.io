
var basePageUrl = "./pages/";

// run json load and subsequent list generation on page load
$(document).ready(function() {
    $.getJSON("pages/pages.json", startGeneratePageList);
});

function startGeneratePageList(data) {
    generatePageList(data, "page-list", "");
}

function generatePageList(data, parent, containingCatsUrl) {
    /* Compiles the list of pages for the website homepage. */
    
    $.each(data, function(category, list) {
        var categoryCode = category.replace(/ /g, "-").toLowerCase();
        document.getElementById(parent).innerHTML +=
            `<div class='${categoryCode}'><h4>${category}</h4><ul id='${categoryCode}'></ul></div>`;

        $.each(list, function(index, child) {
            if (typeof child == "string") {
                var pageUrl = basePageUrl + containingCatsUrl + `${categoryCode}/${child}.html`;
                $("#"+categoryCode).append(`<li><a href='${pageUrl}'>${child.replace(/-/g, " ")}</a></li>`);
            }
            else {
                generatePageList(child, categoryCode, containingCatsUrl + categoryCode + "/")
            }
        });
    });
}
