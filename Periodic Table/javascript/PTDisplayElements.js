//DisplayElement found on PeriodicTableRender function. DisplayElements holds other display functions

// *********************** Element Tiles **************************
function roundAtomicMass(MassNumber){
    if (MassNumber*1000 % 1 != 0){
        return MassNumber.toFixed(3);
    }
    else if (MassNumber%1 == 0){
        return "("+MassNumber+")";
    }
    else{
        return MassNumber;
    }
}

//****************Labels for Rows and Columns***********************
function displayRowLabel(row){
    var output = '';
    output +='<div ';
    output += 'id ="R'+ row + '" ';
    output += 'class= "rowlabel h2">';
    output += row; //Row Label
    output += '</div>';
    $(document).ready(function(){
        $("#row"+row).append(output);
    })
}

function displayColumnLabel(row, column){
    var output = '';
    output += '<div id = "C' + column + '" ';
    output += 'class= "columnlabel">';
    //Actual Labels
    output += '<h3 class ="IUPAC">'+ column +'</h3>';
    if (column == 8 || column == 10){
        output += '<h5 class = "CAS2">'+CASnumber(column)+'</h5>';
    }
    else{
        output += '<h5 class = "CAS">'+CASnumber(column)+'</h5>';
    }
    output += '</div>';
    $(document).ready(function(){
        $("#row"+row).append(output);
    })
}

function CASnumber(column){
    switch(column) {
        case (1):
        return "IA";
        case (2):
        return "IIA";
        case (3):
        return "IIIB";
        case (4):
        return "IVB";
        case (5):
        return "VB";
        case (6):
        return "VIB";
        case (7):
        return "VIIB";
        case (8):
        return '&#9486;&#8212;&#8212;';
        case (9):
        return "VIIIB";
        case (10):
        return "&#8212;&#8212;&#9490;";
        case (11):
        return "IB";
        case (12):
        return "IIB";
        case (13):
        return "IIIA";
        case (14):
        return "IVA";
        case (15):
        return "VA";
        case (16):
        return "VIA";
        case (17):
        return "VIIA";
        case (18):
        return "VIIIA";
    }
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
    output += currentelement['name'] +" ("+ currentelement['symbol'] + ")";
    return output;
}

function elementInformation(ElementNumber){
    var currentelement = (PeriodicTable[ElementNumber-1]);
    var output = "";
    output += "<ul>";
    output += "<li><span class= 'bold'>Atomic Mass (amu):</span> " + currentelement['atomic_mass'] + "</li>";
    if (currentelement['appearance'] != null){
        output += "<li><span class= 'bold'>Appearance:</span> " + currentelement['appearance'] + "</li>";
    }
    output += "<li><span class= 'bold'>Category:</span> " + currentelement['category'] + "</li>";
    output += "<li><span class= 'bold'>Phase (Room Tempurature):</span> " + currentelement['phase'] + "</li>";
    output += "<li><span class= 'bold'>Boiling Point:</span> " + currentelement['boil'] + " K</li>";
    if (currentelement['melt'] != null){
        output += "<li><span class= 'bold'>Melting Point:</span> " + currentelement['melt'] + " K</li>";
    }
    output += "<li><span class= 'bold'>Density (at STP):</span> " + currentelement['density'] + " g/L</li>";
    output += "<li><span class= 'bold'>Discovered by:</span> " + currentelement['discovered_by'] + "</li>";
    output += "<li><span class= 'bold'>Electron Configuration:</span> " + electronConfiguration(currentelement['number']) + "</li>";
    output += "</ul>"
    output += currentelement['summary'];
    return output;
}