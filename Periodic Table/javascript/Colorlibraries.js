
var categoryDict = {
    "diatomic nonmetal":"info", 
    "noble gas":"skyblue", 
    "alkali metal":"success", 
    "alkaline earth metal":"darkgreen",
    "metalloid" : "secondary", 
    "polyatomic nonmetal":"primary",
    "post-transition metal": "purple",
    "transition metal":"dark",
    "lanthanide":"danger", 
    "lanthanide":"danger",
    "actinide":"warning",
    "unknown":"light",
}

var phasesDict = {
    "Solid":"primary", 
    "Liquid":"info", 
    "Gas":"light", 
}

function colorLibrary(type){
    switch(type) {
        case ("category"):
        return categoryDict;
        case ("phase"):
        return phasesDict;
    }
}