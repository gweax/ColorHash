# jquery.colorhash.js

A jQuery plugin to set the background color of any element depending on its value or text.

See a demo at http://gweax.github.io/ColorHash/demo.html

Basic usage:

    $("input").colorHash();
    $("p").colorHash();

Sets the text color to black or white to contrast the background color.



Advanced usage:

Get the color without setting it:

    $("input").colorHash("color");


Add a custom color scheme

    $.fn.colorHash("scheme", "blackAndWhite", ["000000", "ffffff"]);


Set the color based on a custom color scheme:

    $("input").colorHash("blackAndWhite");


Get the hash of an element's text or value:

    $("input").colorHash("hash");


Get a color scheme:

    $.fn.colorHash("scheme", "blackAndWhite");


Delete a color scheme:

    $.fn.colorHash("scheme", "blackAndWhite", "delete");



# ColorHash.js

A standalone version to get a color hash from a string.


Basic usage:

    ColorHash.getColor("Roses are red, violets are blue.");


Add a custom color scheme

    ColorHash.addScheme("blackAndWhite", ["000000", "ffffff"]);


Get the color based on a custom color scheme:

    ColorHash.getColor("Most poems rhyme", "blackAndWhite");


Get the hash of a string:

    ColorHash.getHash("This one doesn't.");


Get a color scheme:

    ColorHash.getScheme("blackAndWhite");


Delete a color scheme:

    ColorHash.deleteScheme("blackAndWhite");

