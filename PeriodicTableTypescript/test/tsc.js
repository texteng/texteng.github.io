var tableMatrix = {
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
        ["RL", 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
        ["RL", 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
        ["RL", 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        ["RL", 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
        ["RL", 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
        ["RL", 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    ]
};
var colorLibrary = {
    "category": {
        "title": "Elemental Categories",
        "diatomic nonmetal": "info",
        "noble gas": "skyblue",
        "alkali metal": "success",
        "alkaline earth metal": "darkgreen",
        "metalloid": "secondary",
        "polyatomic nonmetal": "primary",
        "post-transition metal": "purple",
        "transition metal": "dark",
        "lanthanide": "danger",
        "actinide": "warning",
        "unknown": "light"
    },
    "phase": {
        "title": "Phases at STP",
        "Solid": "primary",
        "Liquid": "info",
        "Gas": "light"
    },
    "groupBlock": {
        "title": "Elemental Categories (Alternate System)",
        "halogen": "info",
        "noble gas": "skyblue",
        "alkali metal": "success",
        "alkaline earth metal": "darkgreen",
        "metalloid": "secondary",
        "nonmetal": "primary",
        "metal": "purple",
        "transition metal": "dark",
        "lanthanoid": "danger",
        "actinoid": "warning",
        "post-transition metal": "light"
    },
    "bondingType": {
        "title": "Bond Type",
        "atomic": "skyblue",
        "metallic": "darkgreen",
        "diatomic": "info",
        "covalent network": "primary",
        "unknown": "light"
    },
    "yearDiscovered": {
        "title": "Year Discovered By",
        "Ancient": "light",
        1800: "yeardiscovered-1",
        1850: "yeardiscovered-2",
        1900: "yeardiscovered-3",
        1950: "yeardiscovered-4",
        2000: "yeardiscovered-5",
        2018: "yeardiscovered-6"
    },
    "density": {
        "title": "Density g/L",
        1: "density-1",
        2: "density-2",
        3: "density-3",
        4: "density-4",
        5: "density-5",
        10: "density-6",
        20: "density-7",
        30: "density-8",
        50: "density-9"
    },
    "melt": {
        "title": "Melting/Freezing Point (K) (Note 273 is 0 C)",
        "Unknown": "light",
        50: "melt-1",
        100: "melt-2",
        250: "melt-3",
        273: "melt-4",
        374: "melt-5",
        500: "melt-6",
        1000: "melt-7",
        2000: "melt-8",
        4000: "melt-9"
    },
    "boil": {
        "title": "Boiling Point (K) (Note 374 is 100 C)",
        "Unknown": "light",
        50: "boil-1",
        100: "boil-2",
        250: "boil-3",
        273: "boil-4",
        374: "boil-5",
        1000: "boil-6",
        3000: "boil-7",
        5000: "boil-8",
        7000: "boil-9"
    },
    "molar_heat": {
        "title": "Molar Heat (C)",
        "Unknown": "light",
        10: "molar_heat-1",
        20: "molar_heat-2",
        25: "molar_heat-3",
        30: "molar_heat-4",
        40: "molar_heat-5",
        70: "molar_heat-6"
    },
    "electronegativity": {
        "title": "Electronegativity",
        " 0.75": "electronegativity-1",
        " 1.0": "electronegativity-2",
        " 1.25": "electronegativity-3",
        " 1.5": "electronegativity-4",
        " 1.75": "electronegativity-5",
        " 2.0": "electronegativity-6",
        " 2.5": "electronegativity-7",
        " 3.0": "electronegativity-8",
        " 3.5": "electronegativity-9",
        " 4.0": "electronegativity-10"
    },
    "atomicRadius": {
        "title": "Atomic Radius (Angstroms &#197;) ",
        "Unknown": "light",
        40: "atomicRadius-1",
        80: "atomicRadius-2",
        100: "atomicRadius-3",
        120: "atomicRadius-4",
        140: "atomicRadius-5",
        160: "atomicRadius-6",
        180: "atomicRadius-7",
        200: "atomicRadius-8",
        240: "atomicRadius-9"
    },
    "vanDelWaalsRadius": {
        "title": "Van der Waals radius (Angstroms &#197;) ",
        "Unknown": "light",
        120: "vanDelWaalsRadius-1",
        140: "vanDelWaalsRadius-2",
        160: "vanDelWaalsRadius-3",
        180: "vanDelWaalsRadius-4",
        200: "vanDelWaalsRadius-5",
        220: "vanDelWaalsRadius-6",
        240: "vanDelWaalsRadius-7"
    },
    "ionizationEnergy": {
        "title": "Ionization Energy (Electron Volts eV)",
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
        2400: "ionizationEnergy-10"
    },
    "electronAffinity": {
        "title": "Electron Affinity (kJ/mol) ",
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
};
var CASindex = [
    "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "&#9486;&#8212;&#8212;", "VIIIB", "&#8212;&#8212;&#9490;", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
];
$(document).on("mouseenter mouseleave", ".columnlabel, .rowlabel, .legenditem", function () {
    $("." + this.id).button("toggle");
});
$(".view").click(function () {
    $("#" + currentTable.category).removeClass("active");
    currentTable.category = this.id;
    currentTable.colors = colorLibrary[currentTable.category];
    $("#" + currentTable.category).addClass("active");
    displayTable();
});
$("#wideLink").click(function () {
    currentTable.wide = !currentTable.wide;
    currentTable.matrix = tableMatrix[(currentTable.wide) ? 'wide' : 'standard'];
    $("#wideLink").html((currentTable.wide) ? 'Standard' : 'Wide');
    if (currentTable.wide) {
        $("#container").removeClass('standardsize').addClass('widesize');
    }
    else {
        $("#container").removeClass('widesize').addClass('standardsize');
    }
    displayTable();
});
$("#credits").click(function () {
    $(".modal-title").html("Credits");
    $(".modal-body").html("<ul>\n    <li>Creator: Stephen Teng</li>\n    <li>Sources: https://github.com/Bowserinator/Periodic-Table-JSON<br>https://github.com/andrejewski/periodic-table</li>\n    <li>Project for Coding Dojo Dallas</li>\n    </ul>");
});
$(document).on("click", ".element", function () {
    var elementId = this.id;
    if (elementId != "lanth" && elementId != "actin") {
        var currentElement = PeriodicTable[elementId - 1];
        var _a = PeriodicTable[elementId - 1], name_1 = _a.name, symbol = _a.symbol;
        $(".modal-title").html(name_1 + " (" + symbol + ") ");
        $(".modal-body").html(elementInformation(currentElement));
    }
});
var currentTable = {
    category: "category",
    colors: colorLibrary.category,
    matrix: tableMatrix.standard,
    wide: false
};
displayTable();
function displayTable() {
    console.time();
    var wide = currentTable.wide, tableCategory = currentTable.category, colors = currentTable.colors, matrix = currentTable.matrix;
    var tableOutput = "";
    for (var row in matrix) {
        tableOutput += "<div class = \"row\">\n";
        for (var column in matrix[row]) {
            var tablePosition = matrix[row][column];
            switch (true) {
                case tablePosition > 0:
                    tableOutput += displayElement(tablePosition);
                    break;
                case tablePosition == 0:
                case tablePosition == "thin":
                    tableOutput += "<div class=\"blank " + ((tablePosition !== "thin") ? "boxsize" : 'thin') + "\"></div>\n";
                    break;
                case tablePosition == "SB":
                    tableOutput += '<div class="smallblank"></div>\n';
                    break;
                case tablePosition == "RL":
                    tableOutput += "<div id =\"R" + row + "\" class= \"rowlabel thin h2\"><a href=\"https://en.wikipedia.org/wiki/Period_" + row + "_element\">" + row + "</a></div>\n";
                    break;
                case tablePosition == "CL":
                    tableOutput += displayColumnLabel();
                    break;
                case tablePosition == "Lanthanide":
                    tableOutput += '<button id = "lanth" class="element boxsize R6 btn';
                    if (tableCategory == "category" || tableCategory == "groupBlock") {
                        tableOutput += "-danger";
                    }
                    tableOutput += ' LanthAct">57-71</button>\n';
                    break;
                case tablePosition == "Actinoid":
                    tableOutput += '<button id = "actin" class="element boxsize R7 btn';
                    if (tableCategory == "category" || tableCategory == "groupBlock") {
                        tableOutput += "-warning";
                    }
                    tableOutput += ' LanthAct">89-103</button>\n';
                    break;
            }
        }
        tableOutput += "</div>\n";
    }
    $("#table").html(tableOutput);
    $("#legend").html(displayLegend());
    console.timeEnd();
    return;
    function displayElement(tablePosition) {
        var currentElement = PeriodicTable[tablePosition - 1];
        var _a = PeriodicTable[tablePosition - 1], atomicNumber = _a.number, elementSymbol = _a.symbol, atomicMass = _a.atomic_mass, elementName = _a.name;
        var elementCategory = currentElement[tableCategory];
        return "<button id=\"" + atomicNumber + "\" class= \"element boxsize \n      R" + (parseInt(row) > 8 ? parseInt(row) - 3 : row) + "\n      " + createColumnClass() + "\n      btn-" + determineColor() + "\" \n      data-toggle=\"modal\" data-target=\"#ElementDisplayModal\">\n\n      " + displayCharacteristics() + "\n      </button>";
        function createColumnClass() {
            if ((atomicNumber < 57 || atomicNumber > 71) && (atomicNumber < 89 || atomicNumber > 103)) {
                return "C" + (wide && parseInt(column) > 2 ? parseInt(column) - 14 : column) + " ";
            }
            else if (atomicNumber == 71 || atomicNumber == 103) {
                return "C3 ";
            }
            return '';
        }
        function determineColor() {
            for (var index in colors) {
                if (typeof index == "string" && index.charAt(0) === "-" || index.charAt(1) == ".") {
                    var newindex = parseFloat(index);
                }
                else {
                    var newindex = index;
                }
                if (typeof elementCategory == "string") {
                    return (elementCategory == "unknown" || elementCategory == "") ? "light" : colors[elementCategory];
                }
                else if (elementCategory == null) {
                    return "light";
                }
                else if (elementCategory <= newindex) {
                    return colors[newindex];
                }
            }
        }
        function displayCharacteristics() {
            var charOutput = "<h6 class = \"atomicnumber\">" + atomicNumber + "</h6>\n\n      <h3 class = \"elementsymbol\">" + elementSymbol + "</h3>\n";
            if (tableCategory == "groupBlock" || tableCategory == "category") {
                return charOutput + ("<h6>" + displayAtomicMass() + "</h6>\n<h6 class = \"elementname\">" + elementName + "</h6>\n");
            }
            return charOutput + ("<h6 class = \"characteristic\">" + elementCategory + "</h6>\n");
            function displayAtomicMass() {
                if ((atomicMass * 1000) % 1 !== 0) {
                    return atomicMass.toFixed(3);
                }
                else if (atomicMass % 1 == 0) {
                    return "(" + atomicMass + ")";
                }
                return atomicMass;
            }
        }
    }
    function displayColumnLabel() {
        var adjustedColumn = wide && parseInt(column) > 2 ? parseInt(column) - 14 : parseInt(column);
        return "<div id = \"C" + adjustedColumn + "\" class= \"columnlabel boxsize\">\n    <a href=\"https://en.wikipedia.org/wiki/Group_" + adjustedColumn + "_element\">\n\n      <h3>" + adjustedColumn + "</h3>\n\n      <h5 style=\"" + (adjustedColumn != 8 && adjustedColumn != 10 ? "font-family: 'Times New Roman', 'Times', 'serif'" : '') + "\">\n\n      " + CASindex[adjustedColumn - 1] + "</h5>\n\n    </a></div>\n";
    }
}
function displayLegend() {
    var colors = currentTable.colors;
    var legendOutput = "<h4>" + colors.title + "</h4>\n\n  <table class = \"legend\">\n  <tr>\n<td class= \"align-top\">\n<ul>\n";
    var count = 0;
    for (var key in colors) {
        if (key != "title") {
            if (count > 1 && count % 6 == 0) {
                legendOutput += "</ul>\n</td>\n<td>\n<ul>\n";
            }
            legendOutput += "<li class=\"legenditem\" id =\"btn-" + colors[key] + "\">\n\n        <div class =\"colorBox btn-" + colors[key] + "\"></div>" + key + "</li>\n";
            count++;
        }
    }
    return legendOutput;
}
function elementInformation(currentElement) {
    var number = currentElement.number, category = currentElement.category, groupBlock = currentElement.groupBlock, atomic_mass = currentElement.atomic_mass, appearance = currentElement.appearance, phase = currentElement.phase, boil = currentElement.boil, melt = currentElement.melt, molar_heat = currentElement.molar_heat, density = currentElement.density, electronegativity = currentElement.electronegativity, atomicRadius = currentElement.atomicRadius, ionRadius = currentElement.ionRadius, vanDelWaalsRadius = currentElement.vanDelWaalsRadius, ionizationEnergy = currentElement.ionizationEnergy, electronAffinity = currentElement.electronAffinity, bondingType = currentElement.bondingType, discovered_by = currentElement.discovered_by, named_by = currentElement.named_by, yearDiscovered = currentElement.yearDiscovered, summary = currentElement.summary, source = currentElement.source;
    var elementinformationOutput = "<ul>";
    elementFact("Atomic Number", number);
    elementinformationOutput += "<li><span class= 'font-weight-bold'>Category: </span>" + category;
    if (!category.includes(groupBlock) && groupBlock != "lanthanoid" && groupBlock != "actinoid") {
        elementinformationOutput += ", " + groupBlock;
    }
    elementinformationOutput += "</li>\n";
    elementFact("Atomic Mass (amu)", atomic_mass);
    elementFact("Appearance", appearance);
    elementFact("Phase (Room Temperature)", phase);
    elementFact("Boiling Point", boil, " K");
    elementFact("Melting Point", melt, " K");
    elementFact("Molar Heat", molar_heat, " C");
    elementFact("Density", density, "g/L");
    elementFact("Electronegativity", electronegativity);
    elementFact("Atomic Radius", atomicRadius, "&#197;");
    elementFact("Ionic Radius", ionRadius, "&#197;");
    elementFact("Van der Waals Radius", vanDelWaalsRadius, "&#197;");
    elementFact("Ionization Energy", ionizationEnergy, "eV");
    elementFact("Electron Affinity", electronAffinity, "kJ/mol");
    elementFact("Bonding Type", bondingType);
    elementFact("Discovered by", discovered_by, "(" + yearDiscovered + ")");
    elementFact("Named by", named_by);
    elementinformationOutput += "</ul>\n" + summary + "<br>\n  <span class= 'font-weight-bold'>For More information see </span><a href=\"" + source + "\">" + source + "</a>";
    return elementinformationOutput;
    function elementFact(title, elementInformation, units) {
        if (units === void 0) { units = ""; }
        if ((elementInformation !== null && elementInformation != "") || elementInformation === 0) {
            elementinformationOutput += "<li><span class= 'font-weight-bold'>" + title + "</span> " + elementInformation + " " + units + "</li>\n";
        }
    }
}
//# sourceMappingURL=tsc.js.map