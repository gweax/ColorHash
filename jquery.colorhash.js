(function ($) {

var schemes = {
    "base" : [
        "00bb3f", "238c47", "007929", "37dd6f", "63dd8d",
        "0f4fa8", "284c7e", "05316d", "4380d3", "6996d3",
        "ff9f00", "bf8930", "a66800", "ffb740", "ffca73",
        "ff2800", "bf4630", "a61a00", "ff5d40", "ff8973"
    ]
};

function hashCode(str) {
    var h, i, len, max;
    
    h = 0;
    max = Math.pow(2, 32);
    
    for (i = 0, len = str.length; i < len; i++) {
        h = (h * 31 + str.charCodeAt(i)) % max;
    }
    
    return h;
}

var actions = {
    "scheme" : function (name, scheme) {
        // this is a jQuery object
        if (!scheme) {
            return schemes[name];
        }
        
        if (scheme === "delete") {
            // never delete the base scheme
            if (name in schemes && name !== "base") {
                delete schemes[name];
            }
        }
        else {
            // a name which is the name of an action will break the plugin
            if (name in actions) {
                throw "Invalid scheme name " + name;
            }
            
            schemes[name] = scheme;
        }
            
        return this;
    },
    
    "set" : function (name) {
        // this is a jQuery object
        return this.each(function () {
            var elem, backgroundColor, color;
            
            // small security measure, don't show color for short passwords
            if (this.nodeName === "INPUT" && this.type === "password" && this.value.length < 6) {
                return;
            }
            
            elem = $(this);
            
            backgroundColor = actions.color.call(elem, name);
            color = actions.contrastColor(backgroundColor);
            
            elem.css({
                "backgroundColor" : backgroundColor,
                "color" : color
            });
        });
    },
    
    "hash" : function () {
        // this is a jQuery object
        return hashCode(this.val() || this.text() || "");
    },
    
    "color" : function (name) {
        var scheme, hash;
    
        // this is a jQuery object
        scheme = schemes[name] || schemes.base;
        hash = actions.hash.call(this);
        
        return "#" + scheme[hash % scheme.length];
    },
    
    "contrastColor" : function (color) {
        // this is a jQuery object
        if (color in schemes) {
            // color is indeed a scheme name
            color = actions.color.call(this, color);
        }
        
        var rgb = color.match(/[0-9a-f]{2}/gi);
    
        return jQuery.grep(rgb, function (c) {
            return c > "79";
        }).length > 1 ? "#000000" : "#ffffff";
    }   
};

$.fn.colorHash = function (action, schemeName, scheme) {
    if (!(action in actions)) {
        action = "set";
    }

    return actions[action].call(this, schemeName, scheme);
};

}(jQuery));
