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
    1800:"yeardiscovered-1",
    1850:"yeardiscovered-2",
    1900:"yeardiscovered-3", 
    1950:"yeardiscovered-4", 
    2000:"yeardiscovered-5",
    2018:"yeardiscovered-6"
}

const densityDict = {
    "title":"Density g/L",
    1:"densitycolors-1", 
    2:"densitycolors-2", 
    3:"densitycolors-3", 
    4:"densitycolors-4", 
    5:"densitycolors-5", 
    10:"densitycolors-6", 
    20:"densitycolors-7",
    30:"densitycolors-8",
    50:"densitycolors-9",
}

const meltDict = {
    "title":"Melting/Freezing Point (K) (Note 273 is 0 C)",
    50: "coldcolors-1",
    100:"coldcolors-2",
    250:"coldcolors-3", 
    273:"coldcolors-4", 
    374:"coldcolors-5", 
    500:"coldcolors-6",
    1000:"coldcolors-7",
    2000:"coldcolors-8",
    5000: "coldcolors-9"
}

const boilDict = {
    "title":"Boiling Point (K) (Note 374 is 100 C)",
    50: "heatcolors-1",
    100:"heatcolors-2",
    250:"heatcolors-3", 
    273:"heatcolors-4", 
    374:"heatcolors-5", 
    1000:"heatcolors-6",
    3000:"heatcolors-7",
    5000:"heatcolors-8",
    7000: "heatcolors-9"
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
    50: "atomicRadius-1",
    100: "atomicRadius-2",
    125: "atomicRadius-3",
    150: "atomicRadius-4",
    175: "atomicRadius-5",
    200: "atomicRadius-6",
    250: "atomicRadius-7",
}

const ionizationEnergyDict = {
    "title":"Ionization Energy (Electron Volts eV)",
    "Unknown": "light",
    500: "ionizationEnergy-1",
    750: "ionizationEnergy-2",
    1000: "ionizationEnergy-3",
    1250: "ionizationEnergy-4",
    1500: "ionizationEnergy-5",
    2000: "ionizationEnergy-6",
    2500: "ionizationEnergy-7",
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

