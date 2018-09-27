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

const meltDict = {
    "title":"Melting/Freezing Point (K) (Note 273 is 0 C)",
    50: "melt-1",
    100:"melt-2",
    250:"melt-3", 
    273:"melt-4", 
    374:"melt-5", 
    500:"melt-6",
    1000:"melt-7",
    2000:"melt-8",
    4000: "melt-9"
}

const boilDict = {
    "title":"Boiling Point (K) (Note 374 is 100 C)",
    50: "boil-1",
    100:"boil-2",
    250:"boil-3", 
    273:"boil-4", 
    374:"boil-5", 
    1000:"boil-6",
    3000:"boil-7",
    5000:"boil-8",
    7000: "boil-9"
}

const densityDict = {
    "title":"Density g/L",
    1:"density-1", 
    2:"density-2", 
    3:"density-3", 
    4:"density-4", 
    5:"density-5", 
    10:"density-6", 
    20:"density-7",
    30:"density-8",
    50:"density-9",
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

const bondtypeDict = {
    "title":"Bond Type",
    "atomic":"skyblue",
    "metallic": "darkgreen",
    "diatomic":"info", 
    "covalent network":"primary",
    "unknown":"light" 
}

const electronegativityDict = {
    "title":"electronegativity",
    1: "electronegativity-1",
    2: "electronegativity-2",
    3: "electronegativity-3", 
    4: "electronegativity-4"
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

