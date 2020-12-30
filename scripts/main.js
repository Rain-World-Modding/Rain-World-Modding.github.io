
var basePageUrl = "https://rain-world-modding.github.io/rain-world-modding/pages/";

// run json load and subsequent list generation on page load
$(document).ready(function() {
    $.getJSON("pages/pages.json", generatePageList);
});

function generatePageList(data) {
    /* Compiles the list of pages for the website homepage. */

    // add an unordered list for each entry in the json
    $.each(data, function(category, pageNames) {
        var categoryCode = category.replace(" ", "-").toLowerCase();
        document.getElementById("page-list").innerHTML +=
                `<div class="category"><h4>${category}</h4><ul id='${categoryCode}'></ul></div>`;
        
        // append a li hyperlink to that ul for each page name given in the json 
        $.each(pageNames, function(index, name) {
            var urlEnd = `${categoryCode}/${name}.html`;
            var pageUrl = basePageUrl + urlEnd;
            $("#"+categoryCode).append(`<li><a href='${pageUrl}'>${name}</a></li>`);
        });
    });
}
