var ColorHash = (function () {

    // schemes should have number of colors that is not a power of two
    var schemes = {
        "base" : [
            "00bb3f", "238c47", "007929", "37dd6f", "63dd8d",
            "0f4fa8", "284c7e", "05316d", "4380d3", "6996d3",
            "ff9f00", "bf8930", "a66800", "ffb740", "ffca73",
            "ff2800", "bf4630", "a61a00", "ff5d40", "ff8973"
        ],
        
        "foo" : [
            "1047a9", "29477f", "052a6e", "4577d4", "6b90d4",
            "c7007d", "95256c", "810051", "e339a4", "e366b5",
            "a8f000", "8bb4cd", "6d9c00", "c0f73e", "cff76f",
            "ffa500", "bf8d30", "a66c00", "ffbc40", "ffce73"
        ],
        
        "html16" : [
            "000000", "800000", "008000", "808000",
            "000080", "800080", "008080", "c0c0c0",
            "808080", "ff0000", "00ff00", "ffff00",
            "0000ff", "ff00ff", "00ffff", "ffffff"
        ]
    };

    function addScheme(name, scheme) {
        if (name && scheme instanceof Array) {
            schemes[name] = scheme;
        }
    }
    
    function getHash(str, m) {
        var hash, i, len;
        
        str = String(str);
        m = Number(m);
        hash = 0;
        
        for (i = 0, len = str.length; i < len; i++) {
            hash = (hash * 65536 + str.charCodeAt(i)) % m;
        }
        
        return hash;
    }
    
    function getColorHash(str, schemeName) {
        var scheme, hash, color;
        
        scheme = schemes[schemeName];
        hash = getHash(str, scheme.length);
        color = scheme[hash];
        
        return color;
    }
    
    return {
        "addScheme" : addScheme,
        "getColorHash" : getColorHash,
        "getHash" : getHash
    }    
    
}());
