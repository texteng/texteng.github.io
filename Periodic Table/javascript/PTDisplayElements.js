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
    output += 'class= "rowlabel h2">';
    output += row; //Row Label
    output += '</div>';
    $(document).ready(function(){
        $("#row"+row).append(output);
    })
}

function displayColumnLabel(row, column){
    var output = '';
    output += `<div id = "C${column}" `;
    output += 'class= "columnlabel">';
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
    var output = '<div class="blank"></div>';
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
    output += `${currentelement['name']} (${currentelement['symbol']})`;
    return output;
}

function elementInformation(ElementNumber){
    function elementFact(title, elementInformation){
        return `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation}</li>`
    }
    var currentelement = (PeriodicTable[ElementNumber-1]);
    var output = "";
    output += `<ul>`;
    output += elementFact("Atomic Mass (amu)", currentelement['atomic_mass']);
    if (currentelement['appearance'] != null){
        output += elementFact("Appearance", currentelement['appearance']);
    }
    output += elementFact("Category", currentelement['category']);
    output += elementFact("Phase (Room Tempurature)", currentelement['phase']);
    output += elementFact("Boiling Point", currentelement['boil']+" K");
    if (currentelement['melt'] != null){
        output += elementFact("Melting Point", currentelement['melt']);
    }
    output += elementFact("Density (at STP)", currentelement['density'] +"g/L</li>");
    output += elementFact("Discovered by", currentelement['discovered_by']);
    output += elementFact("Electron Configuration", electronConfiguration(currentelement['number']));
    output += "</ul>"
    output += currentelement['summary'];
    return output;
}

