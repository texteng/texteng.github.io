//See additional libraries for major variables;
//See jqueryfunctions for interactive portions
const currentTable = {
  category : "category",
  colors : colorLibrary.category,
  matrix : tableMatrix.standard,
  wide : false
};

//*************Starts Rendering Process*******************
displayTable();

//*********************************Renders Table************************
function displayTable() {
  console.time();
  let { wide, category: tableCategory, colors, matrix } = currentTable;
  let tableOutput = "";
  
  for (var row in matrix) {
    tableOutput += `<div class = "row">\n`;
    for (var column in matrix[row]){
      let tablePosition = matrix[row][column];
      switch (true) {
        case tablePosition > 0: //Displays Elements
          tableOutput += displayElement(tablePosition) + "\n";
          break;

        case tablePosition == 0: // Blank
        case tablePosition == "thin": //Column Label
          tableOutput += `<div class="blank ${(tablePosition !== "thin")? "boxsize" : 'thin'}"></div>\n`;
          break;

        case tablePosition == "SB": //Small Blank
          tableOutput += '<div class="smallblank"></div>\n';
          break;

        case tablePosition == "RL": //Row Label
          tableOutput += `<div id ="R${row}" class= "rowlabel thin h2"><a href="https://en.wikipedia.org/wiki/Period_${row}_element">${row}</a></div>\n`;
          break;

        case tablePosition == "CL": //Column Label
          tableOutput += displayColumnLabel(wide && column > 2 ? column - 14 : column);
          break;

        case tablePosition == "Lanthanide":
          tableOutput += '<button id = "lanth" class="element boxsize btn';
          if (tableCategory == "category" || tableCategory == "groupBlock") {
            tableOutput += "-danger";
          }
          tableOutput += ' R6 LanthAct">57-71</button>';
          break;

        case tablePosition == "Actinoid":
          tableOutput += '<button id = "actin" class="element boxsize btn';
          if (tableCategory == "category" || tableCategory == "groupBlock") {
            tableOutput += "-warning";
          }
          tableOutput += ' R7 LanthAct">89-103</button>';
          break;
      }
      tableOutput += "\n";
    }
    tableOutput += "</div>\n";
  }

  $("#table").html(tableOutput);
  $("#legend").html(displayLegend());
  console.timeEnd()
  return;

  //***************************Renders Each Element*******************************
  function displayElement(tablePosition) {
    let { number:atomicNumber, symbol:elementSymbol, atomic_mass:atomicMass, name:elementName, category:elementCategory } = PeriodicTable[tablePosition - 1];
    return `<button id="${atomicNumber}" class= "element boxsize 
      R${row > 8 ? row-3 : row}
      ${createColumnClass(column, atomicNumber)}
      btn-${determineColor()}" 
      data-toggle="modal" data-target="#ElementDisplayModal">\n
      ${displayCharacteristics()}
      </button>`;
    //---------------------------- Helper Functions ------------------------------
    function displayCharacteristics() {
      let charOutput = `<h6 class = "atomicnumber">${atomicNumber}</h6>\n
      <h3 class = "elementsymbol">${elementSymbol}</h3>\n` 
      if (tableCategory == "groupBlock" || tableCategory == "category") {
        return charOutput + `<h6>${displayAtomicMass()}</h6>\n<h6 class = "elementname">${elementName}</h6>\n`;
      }
      return charOutput + `<h6 class = "characteristic">${elementCategory}</h6>\n`;
    }

    function createColumnClass(){
      if ((atomicNumber < 57 || atomicNumber > 71) &&(atomicNumber < 89 || atomicNumber > 103)) {
        return `C${wide && column > 2 ? column - 14 : column} `;
      } 
      else if (atomicNumber == 71 || atomicNumber == 103) {
        return "C3 ";
      }
      return '';
    }

    function displayAtomicMass() {
      if ((atomicMass * 1000) % 1 !== 0) {
        return atomicMass.toFixed(3);
      } 
      else if (atomicMass % 1 == 0) {
        return `(${atomicMass})`;
      }
      return atomicMass;
    }

    function determineColor() {
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
  }
  
  // ******************************End of displayelement function******************************
  function displayColumnLabel() {
    const CASindex = [
      "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "&#9486;&#8212;&#8212;", "VIIIB", "&#8212;&#8212;&#9490;", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"
    ];
    return `<div id = "C${column}" class= "columnlabel boxsize">
    <a href="https://en.wikipedia.org/wiki/Group_${column}_element">\n
      <h3 style="display:block">${column}</h3>\n
      <h5 style="display:block; ${column != 8 && column != 10 ? "font-family: 'Times New Roman', 'Times', 'serif'" : ''}">\n
      ${CASindex[column - 1]}</h5>\n
    </a></div>`;
  }
}//*********************************End of render table function ************************

//*********************************Renders Legend************************
function displayLegend() {
  let { colors } = currentTable;
  let legendOutput = `<h4>${colors.title}</h4>\n
  <table class = "legend">
  <tr>\n<td class= "align-top">\n<ul>\n`;
  var count = 0;
  for (key in colors) {
    if (key != "title") {
      if (count > 1 && count % 6 == 0) {
        legendOutput += "</ul>\n</td>\n<td>\n<ul>\n";
      }
      legendOutput += `<li class="legenditem" id ="btn-${colors[key]}">\n
        <div class ="colorBox btn-${colors[key]}"></div>${key}</li>\n`;
      count++;
    }
  }
  return legendOutput;
}



//************************************** Modal Functions *******************************************
function elementInformation(currentElement) {
  let { number, category, groupBlock, atomic_mass, appearance, phase, boil, melt, 
    molar_heat, density, electronegativity, atomicRadius, ionRadius, vanDelWaalsRadius, ionizationEnergy, electronAffinity, 
    bondingType, discovered_by, named_by, yearDiscovered, summary, source} = currentElement;
  let elementinformationOutput = "<ul>";
  elementFact("Atomic Number", number);
  elementinformationOutput += `<li><span class= 'font-weight-bold'>Category: </span>${category}`;
  if (!category.includes(groupBlock) && groupBlock != "lanthanoid" && groupBlock != "actinoid") 
    {
      elementinformationOutput += ", " + groupBlock;
    }
  elementinformationOutput += `</li>\n`;
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
  // elementFact("Electron Configuration", electronConfiguration(currentElement['number'])); //There seems to be a lot of exceptions to this rule
  // elementFact("Nobel Gas Configuration", nobelGasConfiguration(currentElement['number'])); //There seems to be a lot of exceptions to this rule
  elementinformationOutput += `</ul>\n${summary}<br>
  <span class= 'font-weight-bold'>For More information see </span><a href="${source}">${source}</a>`;
  return elementinformationOutput;

  function elementFact(title, elementInformation, units = "") {
    if ((elementInformation !== null && elementInformation != "") || elementInformation === 0 ) {
      elementinformationOutput += `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation} ${units}</li>\n`;
    }
  }
}
