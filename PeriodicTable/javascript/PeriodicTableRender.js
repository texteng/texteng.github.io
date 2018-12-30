//import {colorLibrary} from './Colorlibraries';
//See jqueryfunctions for interactive portions
const tableMatrix = [
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
]   

const tableMatrixWide = [
    ["thin", "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
    ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
    ["RL", 3, 4, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    ["RL", 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
    ["RL", 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    ["RL", 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    ["RL", 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    ["RL", 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
]

var wide = false;
var matrix = tableMatrix; //Table by default is normal sized.
// var currentcategory = "category";
var currentcategory= "category";

//*************Starts Rendering Process*******************
displayTable();

//*********************************Renders Table************************
function displayTable() {
  // console.time(original);
  let table_output = "";

  for (var row in matrix) {
    table_output += `<div class = "row">\n`;
    for (var column in matrix[row]){
      let tableposition = matrix[row][column];
      switch (true) {
        case tableposition > 0: //Displays Elements
          table_output += displayElement(tableposition, row, column) + "\n";
          break;

        case tableposition == 0: // Blank
          table_output += '<div class="blank boxsize"></div>\n';
          break;

        case tableposition == "SB": //Small Blank
          table_output += '<div class="smallblank"></div>\n';
          break;

        case tableposition == "RL": //Row Label
          table_output += `<div id ="R${row}" class= "rowlabel thin h2"><a href="https://en.wikipedia.org/wiki/Period_${row}_element">${row}</a></div>\n`;
          break;

        case tableposition == "CL": //Column Label
          table_output += displayColumnLabel(wide && column > 2 ? column - 14 : column);
          break;

        case tableposition == "thin": //Column Label
          table_output += '<div class="blank thin"></div>';
          break;

        case tableposition == "Lanthanide":
          table_output += '<button id = "lanth" class="element boxsize btn';
          if (currentcategory == "category" || currentcategory == "groupBlock") {
            table_output += "-danger";
          }
          table_output += ' R6 LanthAct">57-71</button>';
          break;

        case tableposition == "Actinoid":
          table_output += '<button id = "actin" class="element boxsize btn';
          if (currentcategory == "category" || currentcategory == "groupBlock") {
            table_output += "-warning";
          }
          table_output += ' R7 LanthAct">89-103</button>';
          break;
      }
      table_output += "\n";
    }
    table_output += "</div>\n";
    // console.log("Length of total string: " + table_output.length);
  }
  // console.log("Length of total string: " + table_output.length);
  $("#table").html(table_output);
  $("#legend").html(displayLegend());
  // console.timeEnd(original);
}

//***************************Renders Each Element*******************************
function displayElement(atomicNumber, row, column) {
  let { number, symbol, atomic_mass, name } = currentelement = PeriodicTable[atomicNumber - 1];
  let element_output = "";
  element_output = `<button id="${atomicNumber}" `; //Determines button ID
  element_output += 'class= "element boxsize '; //Below are the classes added to elements

  //Creates Row Class
  element_output += `R${row > 8 ? row-3 : row} `;

  //Creates Column Class
  if (
    (atomicNumber < 57 || atomicNumber > 71) &&
    (atomicNumber < 89 || atomicNumber > 103)
  ) {
    element_output += `C${wide && column > 2 ? column - 14 : column} `;

  } else if (atomicNumber == 71 || atomicNumber == 103) {
    element_output += "C3 ";
  } 

  //Determines color of element square
  let color = determineColor(currentelement);
  element_output += `btn-${color}" `;

  //Needed to make modal display
  element_output += 'data-toggle="modal" data-target="#ElementDisplayModal">\n'; //Allows information to be displayed in modal

  //Information found inside element
  element_output += `<h6 class = "atomicnumber">${number}</h6>\n`;
  element_output += `<h3 class = "elementsymbol">${symbol}</h3>\n`;

  if (currentcategory == "groupBlock" || currentcategory == "category") {
    element_output += `<h6>${displayAtomicMass(atomic_mass)}</h6>\n`;
    element_output += `<h6 class = "elementname">${name}`;
  } else {
    element_output += `<h6 class = "characteristic">${currentelement[currentcategory]}`;
  }
  element_output += "</h6>\n</button>";

  return element_output;
}

function displayAtomicMass(MassNumber) {
  if ((MassNumber * 1000) % 1 != 0) {
    return MassNumber.toFixed(3);
  } else if (MassNumber % 1 == 0) {
    return `(${MassNumber})`;
  }

  return MassNumber;
}

function determineColor(currentelement) {
  let currentDict = colorLibrary(); //Function found in color libraries
  category = currentelement[currentcategory];
  for (let index in currentDict) {
      if (typeof index == "string" && index.charAt(0) === "-" || index.charAt(1) =="."){
        index= parseFloat(index);
        //console.log("category ", category);
      } 
      if (typeof category == "string") {
        if (
          category.includes("unknown") ||
          category == ""
        ) {
          return "light";
        }
        return currentDict[category];
      } else if (category == null) {
        return "light";
      } else if (category <= index) {
        return currentDict[index];
      }

  }
}

function displayColumnLabel(column) {
  var columnlabel_output = "";
  columnlabel_output += `<div id = "C${column}" class= "columnlabel boxsize">`;
  //Actual Labels
  columnlabel_output += `<a href="https://en.wikipedia.org/wiki/Group_${column}_element"><h3 class ="d-block">${column}</h3>`;
  columnlabel_output += `<h5 class ="d-block"`;
  if (column != 8 && column != 10) {
    columnlabel_output += ` style="font-family: 'Times New Roman', 'Times', 'serif'"`;
  }
  const CASindex = [
    "IA",
    "IIA",
    "IIIB",
    "IVB",
    "VB",
    "VIB",
    "VIIB",
    "&#9486;&#8212;&#8212;",
    "VIIIB",
    "&#8212;&#8212;&#9490;",
    "IB",
    "IIB",
    "IIIA",
    "IVA",
    "VA",
    "VIA",
    "VIIA",
    "VIIIA"
  ];
  columnlabel_output += `>${CASindex[column - 1]}</h5></a></div>`;
  return columnlabel_output;
}

//*********************************Renders Legend************************
function displayLegend() {
  var dict = colorLibrary(currentcategory); //Function found in color libraries
  let legend_output = "";
  legend_output += `<h4>${dict.title}</h4>`;
  legend_output += '<table class = "legend">';
  legend_output += '<tr>\n<td class= "align-top">\n<ul>\n';
  var count = 0;
  for (key in dict) {
    if (key != "title"){
      if (count > 1 && count % 6 == 0) {
        legend_output += "</ul>\n</td>\n<td>\n<ul>\n";
      }
      legend_output += `<li class="legenditem" id ="btn-${dict[key]}">\n
                        <div class ="colorBox btn-${dict[key]}"></div>`;
      legend_output += key + "</li>\n";
      count++;
    }
  }
  return legend_output;
}

//************************************** Modal Functions *******************************************
$(document).on("click", ".element", function() {
  let elementId = this.id;
  if (elementId != "lanth" && elementId != "actin") {
    let {name, symbol} = currentelement = PeriodicTable[elementId - 1];
    $(".modal-title").html(`${name} (${symbol}) `);
    $(".modal-body").html(elementInformation(currentelement));
  }
});

function elementInformation(currentelement) {
  function elementFact(title, elementInformation, units = "") {
    if ((elementInformation !== null && elementInformation != "") || elementInformation === 0 ) {
      elementinformation_output += `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation} ${units}</li>\n`;
    }
  }
  let { number, category, groupBlock, atomic_mass, appearance, phase, boil, melt, 
    molar_heat, density, electronegativity, atomicRadius, ionRadius, vanDelWaalsRadius, ionizationEnergy, electronAffinity, 
    bondingType, discovered_by, named_by, yearDiscovered, summary, source} = currentelement;
  let elementinformation_output = "<ul>";
  elementFact("Atomic Number", number);
  elementinformation_output += `<li><span class= 'font-weight-bold'>Category: </span>`;
  elementinformation_output += category;
  if (!category.includes(groupBlock) && groupBlock != "lanthanoid" && groupBlock != "actinoid") 
    {
      elementinformation_output += ", " + groupBlock;
    }
  elementinformation_output += `</li>\n`;
  elementFact("Atomic Mass (amu)", atomic_mass);
  elementFact("Appearance", appearance);
  elementFact("Phase (Room Temperature)", phase);
  elementFact("Boiling Point", boil, " K");
  elementFact("Melting Point", melt, " K");
  elementFact("Molar Heat", molar_heat, " C");
  elementFact("Density", density, "g/L");
  elementFact("Electronegativity", electronegativity);
  elementFact("Atomic Radius", atomicRadius, "&#197;");
  elementFact("Ionic Radius", ionRadius, "&#197;")
  elementFact("Van der Waals Radius", vanDelWaalsRadius, "&#197;")
  elementFact("Ionization Energy", ionizationEnergy, "eV");
  elementFact("Electron Affinity", electronAffinity,"kJ/mol");
  elementFact("Bonding Type", bondingType);
  elementFact("Discovered by", discovered_by, "(" + yearDiscovered + ")");
  elementFact("Named by", named_by);
  // elementFact("Electron Configuration", electronConfiguration(currentelement['number'])); //There seems to be a lot of exceptions to this rule
  // elementFact("Nobel Gas Configuration", nobelGasConfiguration(currentelement['number'])); //There seems to be a lot of exceptions to this rule
  elementinformation_output += "</ul>\n";
  elementinformation_output += summary;
  elementinformation_output += `<br><span class= 'font-weight-bold'>For More information see </span><a href="${source}">${source}</a>`;
  return elementinformation_output;
}
