
var categoryDict = {
    "title":"Elemental Categories",
    "diatomic nonmetal":"info", 
    "noble gas":"skyblue", 
    "alkali metal":"success", 
    "alkaline earth metal":"darkgreen",
    "metalloid" : "secondary", 
    "polyatomic nonmetal":"primary",
    "post-transition metal": "purple",
    "transition metal":"dark",
    "lanthanide":"danger", 
    "actinide":"warning",
    "unknown":"light",
}

var groupblockDict = {
    "title":"Group Block",
    "halogen":"info", 
    "noble gas":"skyblue", 
    "alkali metal":"success", 
    "alkaline earth metal":"darkgreen",
    "metalloid" : "secondary", 
    "nonmetal":"primary",
    "metal": "purple",
    "transition metal":"dark",
    "lanthanoid":"danger", 
    "actinoid":"warning",
    "post-transition metal":"light",
}


var phasesDict = {
    "title":"Phases at STP",
    "Solid":"primary", 
    "Liquid":"info", 
    "Gas":"light", 
}


var bondtypeDict = {
    "title":"Bond Type",
    "atomic":"skyblue",
    "metallic": "darkgreen",
    "diatomic":"info", 
    "covalent network":"primary",
    "unknown":"light" 
}

// var yearDiscoveredDict = {
//     "title":"Year Discovered",
//     "metallic":"skyblue",
//     "metallic": "darkgreen",
//     "diatomic":"info", 
//     "covalent network":"primary",
//     "unknown":"light" 
// }

function colorLibrary(type){
    switch(type) {
        case ("category"):
        return categoryDict;
        case ("phase"):
        return phasesDict;
        case ("groupBlock"):
        return groupblockDict;
        case ("bondingType"):
        return bondtypeDict;
        // case(yearDiscovered):
        // return yearDiscoveredDict;
    }
}