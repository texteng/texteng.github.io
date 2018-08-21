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
    if (type == "phase"){
        var color = phaseColor(currentelement);
    }
    else if (type == "category"){
        var color = categoryColor(currentelement);
    }
        var output = '<button id="'+ atomicNumber + '"class="element btn-' + color + '">'
        output += '<h6 class = "atomicnumber">' + currentelement["number"] +'</h6>'
        output += '<h3 class = "elementsymbol">'+ currentelement["symbol"] +'</h3>'
        output += '<h6>'+ roundAtomicMass(currentelement["atomic_mass"]) + '</h6>'
        output += '<h6 class = "elementname">'+ currentelement["name"] +'</h6>'
        output += '</button>'

    $(document).ready(function(){
        $("#row"+row).append(output)
    })
}                      

function phaseColor(currentelement){
    if (currentelement["phase"] == "Solid"){
        var color = "primary";
        // console.log("solid");
    }
    else if (currentelement["phase"] == "Liquid"){
        var color = "info";
        // console.log("liquid");
    }
    else if (currentelement["phase"] == "Gas"){
        var color = "light";
        // console.log("gas");
    }
    else{
        var color = "secondary";
        // console.log("other");
    }
    return color;
}

function categoryColor(currentelement){
 switch(currentelement["category"]) {
        case ("diatomic nonmetal"):
        var color = "info";
        break;
        case ("noble gas"):
        var color = "skyblue";
        break;
        case ("alkali metal"):
        var color = "success";
        break;
        case ("alkaline earth metal"):
        var color = "darkgreen";
        break;
        case ("metalloid"):
        var color = "secondary";
        break;
        case ("polyatomic nonmetal"):
        var color = "primary";
        break;
        case ("post-transition metal"):
        var color = "purple";
        break;
        case ("transition metal"):
        var color = "dark";
        break;
        case ("unknown,"):
        var color = "default";
        break;
        case ("lanthanide"):
        var color = "danger";
        break;
        case ("actinide"):
        var color = "warning";
        break;
        default:
        var color = "light";
    }
    return color
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

function elementInformation(ElementNumber){
    var currentelement = (PeriodicTable[ElementNumber-1]);
    var output = ""
    output += "<h4>" + currentelement['name'] +" ("+ currentelement['symbol'] + ")</h4>"
    output += "<ul>"
    // output += "<li>Atomic Mass: " + currentelement['atomic_mass'] + "</li>"
    // output += "<li>Category: " + currentelement['category'] + "</li>"
    // output += "<li>Phase (Room Tempurature): " + currentelement['phase'] + "</li>"
    // output += "<li>Pointing Point: " + currentelement['boil'] + " K</li>"
    // output += "<li>Melting Point: " + currentelement['melt'] + " K</li>"
    // output += "<li>Density (at STP): " + currentelement['density'] + " g/L</li>"
    // output += "<li>Discovered by: " + currentelement['discovered_by'] + "</li>"
    // output += "<li>Appearance: " + currentelement['appearance'] + "</li>"
    output += "<li>Summary: " + currentelement['summary'] + "</li>"
    output += "</ul>"
    return output;
}