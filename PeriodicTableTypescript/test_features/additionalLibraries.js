const tableMatrix = {
    'standard': [
      ["thin", "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
      ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
      ["RL", 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
      ["RL", 11, 12, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
      ["RL", 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      ["RL", 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
      ["RL", 55, 56, "Lanthanide", 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
      ["RL", 87, 88, "Actinoid", 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
      ["SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB"],
      ["thin", 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
      ["thin", 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
    ], 
    'wide': [
      ["thin", "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
      ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
      ["RL", 3, 4, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
      ["RL", 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
      ["RL", 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      ["RL", 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
      ["RL", 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
      ["RL", 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    ]
};

const colorLibrary = {
    "category":{
        "title": "Elemental Categories",
        "colors":[
            {classification:"diatomic nonmetal", btnType:"info"}, 
            {classification:"noble gas", btnType:"skyblue"}, 
            {classification:"alkali metal", btnType:"success"}, 
            {classification:"alkaline earth metal", btnType:"darkgreen"},
            {classification:"metalloid" , btnType:"secondary"}, 
            {classification:"polyatomic nonmetal", btnType:"primary"},
            {classification:"post-transition metal", btnType:"purple"},
            {classification:"transition metal", btnType:"dark"},
            {classification:"lanthanide", btnType:"danger"}, 
            {classification:"actinide", btnType:"warning"},
            {classification:"unknown", btnType:"light"},
        ]
    },
    "phase": {
        "title": "Phases at STP",
        "colors":[
            {classification:"Solid", btnType:"primary"},
            {classification:"Liquid", btnType:"info"},
            {classification:"Gas", btnType:"light"},
        ]
    },
    "groupBlock": {
        "title": "Elemental Categories (Alternate System)",
        "colors":[
            {classification:"halogen", btnType: "info"}, 
            {classification:"noble gas", btnType: "skyblue"}, 
            {classification:"alkali metal", btnType: "success"}, 
            {classification:"alkaline earth metal", btnType: "darkgreen"},
            {classification:"metalloid" , btnType: "secondary"}, 
            {classification:"nonmetal", btnType: "primary"},
            {classification:"metal", btnType: "purple"},
            {classification:"transition metal", btnType: "dark"},
            {classification:"lanthanoid", btnType: "danger"}, 
            {classification:"actinoid", btnType: "warning"},
            {classification:"post-transition metal", btnType: "light"},
        ]
    },
    "bondingType": {
        "title": "Bond Type",
        "colors":[
            {classification:"atomic", btnType: "skyblue"},
            {classification:"metallic", btnType: "darkgreen"},
            {classification:"diatomic", btnType: "info"},
            {classification:"covalent network", btnType: "primary"},
            {classification:"unknown", btnType: "light" },
        ]
    },
    "yearDiscovered": {
        "title": "Year Discovered By",
        "colors":[
            {classification:1800, btnType:"yeardiscovered-1"},
            {classification:1850, btnType:"yeardiscovered-2"},
            {classification:1900, btnType:"yeardiscovered-3"},
            {classification:1950, btnType:"yeardiscovered-4"},
            {classification:2000, btnType:"yeardiscovered-5"},
            {classification:2018, btnType:"yeardiscovered-6"},
            {classification:"Ancient", btnType:"light"},
        ]
    },
    "density": {
        "title": "Density g/L",
        "colors":[
            {classification:1, btnType:"density-1"},
            {classification:2, btnType:"density-2"},
            {classification:3, btnType:"density-3"},
            {classification:4, btnType:"density-4"},
            {classification:5, btnType:"density-5"},
            {classification:10, btnType:"density-6"},
            {classification:20, btnType:"density-7"},
            {classification:30, btnType:"density-8"},
            {classification:50, btnType:"density-9"},
        ]
    },
    "melt": {
        "title": "Melting/Freezing Point (K) (Note 273 is 0 C)",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:50, btnType:"melt-1"},
            {classification:100, btnType:"melt-2"},
            {classification:250, btnType:"melt-3"},
            {classification:273, btnType:"melt-4"},
            {classification:374, btnType:"melt-5"},
            {classification:500, btnType:"melt-6"},
            {classification:1000, btnType:"melt-7"},
            {classification:2000, btnType:"melt-8"},
            {classification:4000, btnType:"melt-9"}
        ]
    },
    "boil": {
        "title": "Boiling Point (K) (Note 374 is 100 C)",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:50, btnType:"boil-1"},
            {classification:100, btnType:"boil-2"},
            {classification:250, btnType:"boil-3"},
            {classification:273, btnType:"boil-4"},
            {classification:374, btnType:"boil-5"},
            {classification:1000, btnType:"boil-6"},
            {classification:3000, btnType:"boil-7"},
            {classification:5000, btnType:"boil-8"},
            {classification:7000, btnType:"boil-9"}
        ]
    },
    "molar_heat":  {
        "title": "Molar Heat (C)",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:10, btnType:"molar_heat-1"},
            {classification:20, btnType:"molar_heat-2"},
            {classification:25, btnType:"molar_heat-3"},
            {classification:30, btnType:"molar_heat-4"},
            {classification:40, btnType:"molar_heat-5"},
            {classification:70, btnType:"molar_heat-6"},
        ]
    },
    "electronegativity": {
        "title": "Electronegativity",
        "colors":[
            {classification:0.75, btnType:"electronegativity-1"},
            {classification:1.0, btnType:"electronegativity-2"},
            {classification:1.25, btnType:"electronegativity-3"},
            {classification:1.5, btnType:"electronegativity-4"},
            {classification:1.75, btnType:"electronegativity-5"}, 
            {classification:2.0, btnType:"electronegativity-6"}, 
            {classification:2.5, btnType:"electronegativity-7"},
            {classification:3.0, btnType:"electronegativity-8"},
            {classification:3.5, btnType:"electronegativity-9"},
            {classification:4.0, btnType:"electronegativity-10"},
        ]
    },
    "atomicRadius": {
        "title": "Atomic Radius (Angstroms &#197;) ",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:40, btnType:"atomicRadius-1"},
            {classification:80, btnType:"atomicRadius-2"},
            {classification:100, btnType:"atomicRadius-3"},
            {classification:120, btnType:"atomicRadius-4"},
            {classification:140, btnType:"atomicRadius-5"},
            {classification:160, btnType:"atomicRadius-6"},
            {classification:180, btnType:"atomicRadius-7"},
            {classification:200, btnType:"atomicRadius-8"},
            {classification:240, btnType:"atomicRadius-9"},
        ]
    },
    "vanDelWaalsRadius": {
        "title": "Van der Waals radius (Angstroms &#197;) ",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:120, btnType:"vanDelWaalsRadius-1"},
            {classification:140, btnType:"vanDelWaalsRadius-2"},
            {classification:160, btnType:"vanDelWaalsRadius-3"},
            {classification:180, btnType:"vanDelWaalsRadius-4"},
            {classification:200, btnType:"vanDelWaalsRadius-5"},
            {classification:220, btnType:"vanDelWaalsRadius-6"},
            {classification:240, btnType:"vanDelWaalsRadius-7"},
        ]
    },
    "ionizationEnergy": {
        "title": "Ionization Energy (Electron Volts eV)",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:400, btnType:"ionizationEnergy-1"},
            {classification:500, btnType:"ionizationEnergy-2"},
            {classification:600, btnType:"ionizationEnergy-3"},
            {classification:700, btnType:"ionizationEnergy-4"},
            {classification:800, btnType:"ionizationEnergy-5"},
            {classification:900, btnType:"ionizationEnergy-6"},
            {classification:1000, btnType:"ionizationEnergy-7"},
            {classification:1400, btnType:"ionizationEnergy-8"},
            {classification:1800, btnType:"ionizationEnergy-9"},
            {classification:2400, btnType:"ionizationEnergy-10"},
        ]
    },
    "electronAffinity":{
        "title": "Electron Affinity (kJ/mol) ",
        "colors":[
            {classification:"Unknown", btnType:"light"},
            {classification:"-250", btnType:"electronAffinity-1"},
            {classification:"-200", btnType:"electronAffinity-2"},
            {classification:"-150", btnType:"electronAffinity-3"},
            {classification:"-100", btnType:"electronAffinity-4"},
            {classification:"-80", btnType:"electronAffinity-5"},
            {classification:"-60", btnType:"electronAffinity-6"},
            {classification:"-40", btnType:"electronAffinity-7"},
            {classification:"-20", btnType:"electronAffinity-8"},
            {classification:"-5", btnType:"electronAffinity-9"},
            {classification:" 0", btnType:"electronAffinity-10"}
        ]

    },
}



const CASindex = [
    "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "&#9486;&#8212;&#8212;", "VIIIB", "&#8212;&#8212;&#9490;", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
];