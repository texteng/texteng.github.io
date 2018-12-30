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
    "Unknown": "light",
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
    "Unknown": "light",
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

const molarheatDict = {
    "title":"Molar Heat (C)",
    "Unknown": "light",
    10: "molar_heat-1",
    20:"molar_heat-2",
    25:"molar_heat-3",
    30:"molar_heat-4",
    40:"molar_heat-5", 
    70:"molar_heat-6", 
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
    "title":"Electronegativity",
    " 0.75": "electronegativity-1",
    " 1.0": "electronegativity-2",
    " 1.25": "electronegativity-3",
    " 1.5": "electronegativity-4",
    " 1.75": "electronegativity-5", 
    " 2.0": "electronegativity-6", 
    " 2.5": "electronegativity-7",
    " 3.0": "electronegativity-8",
    " 3.5": "electronegativity-9",
    " 4.0": "electronegativity-10",
}

const atomicRadiusDict = {
    "title":"Atomic Radius (Angstroms &#197;) ",
    "Unknown": "light",
    40: "atomicRadius-1",
    80: "atomicRadius-2",
    100: "atomicRadius-3",
    120: "atomicRadius-4",
    140: "atomicRadius-5",
    160: "atomicRadius-6",
    180: "atomicRadius-7",
    200: "atomicRadius-8",
    240: "atomicRadius-9",
}

const vanDelWaalsRadiusDict = {
    "title":"Van der Waals radius (Angstroms &#197;) ",
    "Unknown": "light",
    120: "vanDelWaalsRadius-1",
    140: "vanDelWaalsRadius-2",
    160: "vanDelWaalsRadius-3",
    180: "vanDelWaalsRadius-4",
    200: "vanDelWaalsRadius-5",
    220: "vanDelWaalsRadius-6",
    240: "vanDelWaalsRadius-7",
}

const ionizationEnergyDict = {
    "title":"Ionization Energy (Electron Volts eV)",
    "Unknown": "light",
    400: "ionizationEnergy-1",
    500: "ionizationEnergy-2",
    600: "ionizationEnergy-3",
    700: "ionizationEnergy-4",
    800: "ionizationEnergy-5",
    900: "ionizationEnergy-6",
    1000: "ionizationEnergy-7",
    1400: "ionizationEnergy-8",
    1800: "ionizationEnergy-9",
    2400: "ionizationEnergy-10",
}
// const electronAffinityDict= {
//     "None": "light",
//     parseInt("-300"): "primary",
// }

const electronAffinityDict= {
    "title":"Electron Affinity (kJ/mol) ",
    "Unknown": "light",
    "-250": "electronAffinity-1",
    "-200": "electronAffinity-2",
    "-150": "electronAffinity-3",
    "-100": "electronAffinity-4",
    "-80": "electronAffinity-5",
    "-60": "electronAffinity-6",
    "-40": "electronAffinity-7",
    "-20": "electronAffinity-8",
    "-5": "electronAffinity-9",
    " 0": "electronAffinity-10"
}

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
        "molar_heat": molarheatDict,
        "electronegativity": electronegativityDict,
        "atomicRadius": atomicRadiusDict,
        "vanDelWaalsRadius": vanDelWaalsRadiusDict,
        "ionizationEnergy": ionizationEnergyDict,
        "electronAffinity":electronAffinityDict,
    }
    return library[currentcategory];
}

