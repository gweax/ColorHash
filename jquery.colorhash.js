(function ($) {

var scheme = [
    "00bb3f", "238c47", "007929", "37dd6f", "63dd8d",
    "0f4fa8", "284c7e", "05316d", "4380d3", "6996d3",
    "ff9f00", "bf8930", "a66800", "ffb740", "ffca73",
    "ff2800", "bf4630", "a61a00", "ff5d40", "ff8973"
];

function hashCode(str) {
    var h, i, len, max;
    
    h = 0;
    max = Math.pow(2, 32);
    
    for (i = 0, len = str.length; i < len; i++) {
        h = (h * 31 + str.charCodeAt(i)) % max;
    }
    
    return h;
}

function getTextColor(color) {
    var rgb = color.match(/[0-9a-f]{2}/g);
    
    return jQuery.grep(rgb, function (c) {
        return c > "79";
    }).length > 1 ? "000000" : "ffffff";
}

function setColorHash() {
    var element, hash, backgroundColor, color;

    element = $(this);
    hash = hashCode(element.val() || element.text() || "");
    backgroundColor = scheme[hash % scheme.length];
    color = getTextColor(backgroundColor);
    
    element.css({
        "backgroundColor" : "#" + backgroundColor,
        "color" : "#" + color
    });
}

$.fn.colorHash = function () {
    this.each(setColorHash);
    
    return this;
};

}(jQuery));
