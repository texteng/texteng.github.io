//DisplayElement found on PeriodicTableRender function. DisplayElements holds other display functions

// *********************** Element Tiles **************************
function displayAtomicMass(MassNumber){
    if (MassNumber*1000 % 1 != 0){
        return MassNumber.toFixed(3);
    }
    else if (MassNumber%1 == 0){
        return `(${MassNumber})`;
    }
    
    return MassNumber;
}

//****************Labels for Rows and Columns***********************
function displayRowLabel(row){
    var output = '';
    output +='<div ';
    output += `id ="R${row}" `;
    output += 'class= "rowlabel boxsize h2">';
    output += row; //Row Label
    output += '</div>';
    $(document).ready(function(){
        $("#row"+row).append(output);
    })
}

function displayColumnLabel(row, column){
    var output = '';
    output += `<div id = "C${column}" `;
    output += 'class= "columnlabel boxsize">';
    //Actual Labels
    output += `<h3 class ="d-block">${column}</h3>`;
    output += `<h5 class ="d-block"` 
    if (column != 8 && column != 10){
        output +=` style="font-family: 'Times New Roman', 'Times', 'serif'"`
    }
    output +=`>${CASnumber(column)}</h5>`;
    output += '</div>';
    $(document).ready(function(){
        $("#row"+row).append(output);
    })
}


// "Helvetica Neue", Helvetica, Arial, sans-serif
function CASnumber(column){
    let CASindex = [
        "IA", //1
        "IIA", //2
        "IIIB", //3
        "IVB", //4
        "VB", //5
        "VIB", //6
        "VIIB", //7
        '&#9486;&#8212;&#8212;', //8
        "VIIIB", //9
        "&#8212;&#8212;&#9490;", //10
        "IB", //11
        "IIB", //12
        "IIIA", //13
        "IVA", //14
        "VA", //15
        "VIA", //16
        "VIIA", //17
        "VIIIA" //18
    ]
    return CASindex[column-1];
}

//****************Blanks***********************
function displayBlank(row){
    var output = '<div class="blank boxsize"></div>';
    $(document).ready(function(){
        $("#row"+row).append(output);
    })
}

function displaySmallBlank(row){
    $(document).ready(function(){
        $("#row"+row).append('<div class="smallblank"></div>');
    })
}


//****************Labels for Modal***********************
function elementInformationTitle(ElementNumber){
    var currentelement = (PeriodicTable[ElementNumber-1]);
    var output = "";
    output += `${currentelement['name']} (${currentelement['symbol']}) `;
    return output;
}

function elementInformation(ElementNumber){
    function elementFact(title, elementInformation, units = ""){
        if (elementInformation != null && elementInformation != ""){
            output += `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation} ${units}</li>`
        }
        return
    }
    let currentelement = (PeriodicTable[ElementNumber-1]);
    let output = "<ul>";
    elementFact("Atomic Number", currentelement['number']);
    output+= `<li><span class= 'font-weight-bold'>Category: </span>`
    output+= currentelement['category']
    if(!currentelement['category'].includes(currentelement['groupBlock']) && currentelement['groupBlock'] != "lanthanoid" && currentelement['groupBlock'] != "actinoid"){
        output += ", " + currentelement['groupBlock']
    }
    output+=`</li>`
    // elementFact("Group Block", currentelement['groupBlock']);
    elementFact("Atomic Mass (amu)", currentelement['atomic_mass']);
    elementFact("Appearance", currentelement['appearance']);
    elementFact("Phase (Room Tempurature)", currentelement['phase']);
    elementFact("Boiling Point", currentelement['boil']," K");
    elementFact("Melting Point", currentelement['melt']," K");
    elementFact("Density", currentelement['density'],"g/L</li>");
    elementFact("Electronegativity", currentelement['electronegativity']);
    elementFact("Atomic Radius", currentelement['atomicRadius'], "&#197;");
    elementFact("Ionization Energy", currentelement['ionizationEnergy'], "eV");
    elementFact("Electron Affinity", currentelement['electronAffinity'], "E<sub>A</sub>");
    elementFact("Bonding Type", currentelement['bondingType']);
    // elementFact("Electron Configuration", electronConfiguration(currentelement['number'])); //There seems to be a lot of exceptions to this rule
    // elementFact("Nobel Gas Configuration", nobelGasConfiguration(currentelement['number'])); //There seems to be a lot of exceptions to this rule
    elementFact("Discovered by", currentelement['discovered_by']);0
    output += "</ul>"
    output += currentelement['summary'];
    output += `<br><span class= 'font-weight-bold'>For More information see </span><a href="${currentelement['source']}">${currentelement['source']}</a>`
    return output;
}

