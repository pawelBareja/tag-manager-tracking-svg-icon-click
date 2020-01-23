// This is a custom code to track clicks in svg element which is a child of <a/> that is a link to social media
// Put this code into tag manager into a tag, enclosed with <script></script> and set a trigger to "All pages / page view"
// Then you set a tag of clicked element to trigger on custom event, if it is a tag that counts facebook social icon clicks than set event name to facebook adn so on


window.addEventListener("click", function (e) {

    var facebook = "https://www.facebook.com/esterior.design/";
    var instagram = "https://www.instagram.com/esterior.design/";
    var behance = "https://www.behance.net/esterior";

    var linkTarget = e.target.parentNode.href;
    var tagClicked = e.target.tagName;

    var clickedIcon = "";

    switch (linkTarget) {
        case facebook:
            clickedIcon = "facebook";
            break;
        case instagram:
            clickedIcon = "instagram";
            break;
        case behance:
            clickedIcon = "behance";
            break;
    }

    window.dataLayer = dataLayer || [];
    dataLayer.push({
        event: clickedIcon
    });
});
