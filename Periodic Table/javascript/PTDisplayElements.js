function displayBlank(row){
    $(document).ready(function(){
        $("#row"+row).append('<div class="blank"></div>');
    })
}

function displayRowLabel(row){
    $(document).ready(function(){
        $("#row"+row).append('<div class="blank h2">'+ row +'</div>');
    })
}

function displayColumnLabel(row, column){
    if (column != 8 && column != 10){
        $(document).ready(function(){
            $("#row"+row).append('<div class="columnlabel"><h3 class ="IUPAC">'+ column +'</h3><h5 class = "CAS">'+CASnumber(column)+'</h5></div>');
        })
    }
    else{
        $(document).ready(function(){
            $("#row"+row).append('<div class="columnlabel"><h3 class ="IUPAC">'+ column +'</h3><h5 class = "CAS2">'+CASnumber(column)+'</h5></div>');
        })
    }
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
        default:
        // console.log("this is broken")
    }
}

function displaySmallBlank(row){
    $(document).ready(function(){
        $("#row"+row).append('<div class="smallblank"></div>');
    })
}

// Display Element
function displayElement(atomicNumber, row, type){
    var currentelement = (PeriodicTable[atomicNumber-1]);
    var colordict = colorLibrary(type);
    var color = colordict[currentelement[type]]
    var output = ""
    if (color == undefined){
        output = '<button id="'+ atomicNumber + '"class="element btn-light" data-toggle="modal" data-target="#ElementDisplayModal">'
    }
    else{
        output = '<button id="'+ atomicNumber + '"class="element btn-' + color + '" data-toggle="modal" data-target="#ElementDisplayModal">'
    }
    output += '<h6 class = "atomicnumber">' + currentelement["number"] +'</h6>'
    output += '<h3 class = "elementsymbol">'+ currentelement["symbol"] +'</h3>'
    output += '<h6>'+ roundAtomicMass(currentelement["atomic_mass"]) + '</h6>'
    output += '<h6 class = "elementname">'+ currentelement["name"] +'</h6>'
    output += '</button>'

    $(document).ready(function(){
        $("#row"+row).append(output)
    })
}

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

function elementInformationTitle(ElementNumber){
    var currentelement = (PeriodicTable[ElementNumber-1]);
    var output = ""
    output += currentelement['name'] +" ("+ currentelement['symbol'] + ")"
    return output;
}

function elementInformation(ElementNumber){
    var currentelement = (PeriodicTable[ElementNumber-1]);
    var output = ""
    output += "<ul>"
    output += "<li>Atomic Mass: " + currentelement['atomic_mass'] + "</li>"
    output += "<li>Appearance: " + currentelement['appearance'] + "</li>"
    output += "<li>Category: " + currentelement['category'] + "</li>"
    output += "<li>Phase (Room Tempurature): " + currentelement['phase'] + "</li>"
    output += "<li>Pointing Point: " + currentelement['boil'] + " K</li>"
    output += "<li>Melting Point: " + currentelement['melt'] + " K</li>"
    output += "<li>Density (at STP): " + currentelement['density'] + " g/L</li>"
    output += "<li>Discovered by: " + currentelement['discovered_by'] + "</li>"
    output += "</ul>"
    output += currentelement['summary']
    return output;
}