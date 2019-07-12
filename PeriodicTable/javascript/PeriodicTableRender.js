//See additional libraries for major variables;
//See jqueryfunctions for interactive portions
const currentTable = {
  wide : false,
  matrix : tableMatrix.standard,
  category : "category",
  colors : colorLibrary["category"]
};

//*************Starts Rendering Process*******************
displayTable();

//*********************************Renders Table************************
function displayTable() {
  // console.time(original);
  let table_output = "";
  let { wide, category, matrix } = currentTable;
  
  for (var row in matrix) {

    table_output += `<div class = "row">\n`;
    for (var column in matrix[row]){
      let tableposition = matrix[row][column];
      switch (true) {
        case tableposition > 0: //Displays Elements
          table_output += displayElement(tableposition, row, column) + "\n";
          break;

        case tableposition == 0: // Blank
        case tableposition == "thin": //Column Label
          table_output += `<div class="blank ${(tableposition !== "thin")? "boxsize" : 'thin'}"></div>\n`;
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

        case tableposition == "Lanthanide":
        case tableposition == "Actinoid":
          table_output += '<button id = "actin" class="element boxsize btn';
          if (category == "category" || category == "groupBlock") {
            table_output += '-' + ((tableposition == "Lanthanide") ? "danger" : "warning");
          }
          table_output += ' R7 LanthAct">89-103</button>';
          break;
      }
      table_output += "\n";
    }
    table_output += "</div>\n";
  }

  $("#table").html(table_output);
  $("#legend").html(displayLegend());
}

//***************************Renders Each Element*******************************
function displayElement(atomicNumber, row, column) {
  let { category } = currentTable;
  let { number, symbol, atomic_mass, name } = currentelement = PeriodicTable[atomicNumber - 1];
  let element_output = `<button id="${atomicNumber}" class= "element boxsize 
    R${row > 8 ? row-3 : row}
    ${createColumnClass(column, atomicNumber)}
    btn-${determineColor(currentelement)}" 
    data-toggle="modal" data-target="#ElementDisplayModal"
  >\n`; //Allows information to be displayed in modal

  //Information found inside element
  element_output += `<h6 class = "atomicnumber">${number}</h6>\n
    <h3 class = "elementsymbol">${symbol}</h3>\n`;

  if (category == "groupBlock" || category == "category") {
    element_output += `<h6>${displayAtomicMass(atomic_mass)}</h6>\n<h6 class = "elementname">${name}`;
  } 
  else {
    element_output += `<h6 class = "characteristic">${currentelement[category]}`;
  }
  element_output += `</h6>\n</button>`;

  return element_output;
}

function createColumnClass(column, atomicNumber){
  if ((atomicNumber < 57 || atomicNumber > 71) &&(atomicNumber < 89 || atomicNumber > 103)) {
    return `C${currentTable.wide && column > 2 ? column - 14 : column} `;
  } 
  else if (atomicNumber == 71 || atomicNumber == 103) {
    return "C3 ";
  }
  return '';
}

function displayAtomicMass(massNumber) {
  if ((massNumber * 1000) % 1 != 0) {
    return massNumber.toFixed(3);
  } 
  else if (massNumber % 1 == 0) {
    return `(${massNumber})`;
  }
  return massNumber;
}

function determineColor(currentelement) {
  let {category, colors} = currentTable;
  let elementCategory = currentelement[category];
  for (let index in colors) {
      if (typeof index == "string" && index.charAt(0) === "-" || index.charAt(1) =="."){
        index= parseFloat(index);
      } 
      if (typeof elementCategory == "string") {
        return (elementCategory.includes("unknown") || elementCategory == "") ? "light" : colors[elementCategory];
      } 
      else if (elementCategory == null) {
        return "light";
      } 
      else if (elementCategory <= index) {
        return colors[index];
      }
  }
}

function displayColumnLabel(column) {
  const CASindex = [
    "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "&#9486;&#8212;&#8212;", "VIIIB", "&#8212;&#8212;&#9490;", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
  ];
  var columnlabel_output = `<div id = "C${column}" class= "columnlabel boxsize">`;
  //Actual Labels
  columnlabel_output += `<a href="https://en.wikipedia.org/wiki/Group_${column}_element">
  <h3 class ="d-block">${column}</h3>
  <h5 class ="d-block"`;
  if (column != 8 && column != 10) {
    columnlabel_output += ` style="font-family: 'Times New Roman', 'Times', 'serif'"`;
  }
  columnlabel_output += `>${CASindex[column - 1]}</h5></a></div>`;
  return columnlabel_output;
}

//*********************************Renders Legend************************
function displayLegend() {
  let legend_output = `<h4>${currentTable.colors.title}</h4>\n
  <table class = "legend">
  <tr>\n<td class= "align-top">\n<ul>\n`;
  var count = 0;
  for (key in currentTable.colors) {
    if (key != "title"){
      if (count > 1 && count % 6 == 0) {
        legend_output += "</ul>\n</td>\n<td>\n<ul>\n";
      }
      legend_output += `<li class="legenditem" id ="btn-${currentTable.colors[key]}">\n
        <div class ="colorBox btn-${currentTable.colors[key]}"></div>${key}</li>\n`;
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
  let { number, category, groupBlock, atomic_mass, appearance, phase, boil, melt, 
    molar_heat, density, electronegativity, atomicRadius, ionRadius, vanDelWaalsRadius, ionizationEnergy, electronAffinity, 
    bondingType, discovered_by, named_by, yearDiscovered, summary, source} = currentelement;
  let elementinformation_output = "<ul>";
  elementFact("Atomic Number", number);
  elementinformation_output += `<li><span class= 'font-weight-bold'>Category: </span>${category}`;
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
  elementinformation_output += `</ul>\n${summary}<br>
  <span class= 'font-weight-bold'>For More information see </span><a href="${source}">${source}</a>`;
  return elementinformation_output;

  function elementFact(title, elementInformation, units = "") {
    if ((elementInformation !== null && elementInformation != "") || elementInformation === 0 ) {
      elementinformation_output += `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation} ${units}</li>\n`;
    }
  }
}
