const categoryDict = {
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

const groupblockDict = {
    "title":"Elemental Categories (Alternate System)",
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


const phasesDict = {
    "title":"Phases at STP",
    "Solid":"primary", 
    "Liquid":"info", 
    "Gas":"light", 
}


const bondtypeDict = {
    "title":"Bond Type",
    "atomic":"skyblue",
    "metallic": "darkgreen",
    "diatomic":"info", 
    "covalent network":"primary",
    "unknown":"light" 
}

const yearDiscoveredDict = {
    "title":"Year Discovered By",
    "Ancient": "light",
    1800:"skyblue",
    1850: "info",
    1900:"darkgreen", 
    1950:"success", 
    2000:"warning",
    2018: "danger"
}

const densityDict = {
    "title":"Density g/L",
    1:"danger", 
    2:"warning", 
    3:"success", 
    4:"skyblue", 
    5:"info", 
    10:"primary", 
    20:"darkgreen",
    30:"purple",
    50:"dark",
}

const meltDict = {
    "title":"Melting/Freezing Point (K) (Note 273 is 0 C)",
    50: "dark",
    100:"purple",
    250:"skyblue", 
    273:"info", 
    374:"primary", 
    500:"darkgreen",
    1000:"success",
    2000:"warning",
    5000: "danger"
}

const boilDict = {
    "title":"Boiling Point (K) (Note 374 is 100 C)",
    50: "dark",
    100:"purple",
    250:"skyblue", 
    273:"info", 
    374:"primary", 
    1000:"darkgreen",
    3000:"success",
    5000:"warning",
    7000: "danger"
}
const electronegativityDict = {
    "title":"Electronegativity",
    1: "primary",
    2:"purple",
    3:"skyblue", 
    4:"info", 
}

const atomicRadiusDict = {
    "title":"Atomic Radius (Angstroms &#197;) ",
    "Unknown": "light",
    50: "primary",
    100: "skyblue",
    125: "info",
    150: "darkgreen",
    175: "success",
    200: "warning",
    250: "danger",
}

const ionizationEnergyDict = {
    "title":"Ionization Energy (Electron Volts eV)",
    "Unknown": "light",
    500: "primary",
    750: "skyblue",
    1000: "info",
    1250: "darkgreen",
    1500: "success",
    2000: "warning",
    2500: "danger",
}
// const electronAffinityDict= {
//     "None": "light",
//     parseInt("-300"): "primary",
// }

function colorLibrary(){
    const library = {
        "category":categoryDict,
        "phase": phasesDict,
        "groupBlock": groupblockDict,
        "bondingType": bondtypeDict,
        "yearDiscovered": yearDiscoveredDict,
        "density": densityDict,
        "melt": meltDict,
        "boil": boilDict,
        "electronegativity": electronegativityDict,
        "atomicRadius": atomicRadiusDict,
        "ionizationEnergy": ionizationEnergyDict,
        // "electronAffinity":-electronAffinityDict,
    }
    return library[currentcategory];
}
