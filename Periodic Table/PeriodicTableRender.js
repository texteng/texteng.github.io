// Tablematrix = [
//     ["0", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL"],
//     ["RL", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
//     ["RL", 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
//     ["RL", 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
//     ["RL", 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
//     ["RL", 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
//     ["RL", 55, 56, "Lanthanide", 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
//     ["RL", 87, 88, "Actinoid", 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
//     ["SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB"],
//     [0, 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
//     [0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
// ]   

Tablematrix = [
    ["0", "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
    ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
    ["RL", 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    ["RL", 11, 12, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
    ["RL", 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    ["RL", 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    ["RL", 55, 56, "Lanthanide", 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    ["RL", 87, 88, "Actinoid", 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    ["SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB"],
    [0, 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
    [0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
]   

function displaytable(){
    for (var row=0; row <=10; row++){
        displayrow(row);
    }
}

function displayrow(row){
    for (var column=0; column <=18; column++ ){
        var rowlocation = Tablematrix[row][column];
        // console.log(rowlocation)
        switch(true) {
            case (rowlocation == 0):
            displayBlank(row);
            break;
            case (rowlocation > 0):
            displayElement(rowlocation, row)
            break;
            
            case (rowlocation == "Lanthanide"):
            $(document).ready(function(){
                $("#row6").append('<div class="blank h6">57-71</div>');
            })
            break;
            
            case (rowlocation == "Actinoid"):
            $(document).ready(function(){
                $("#row7").append('<div class="blank h6">89-103</div>');
            })
            break;
            
            case (rowlocation == "SB"):
            displaySmallBlank(row);
            break;

            case (rowlocation == "RL"):
            displayRowLabel(row);
            break;

            case (rowlocation == "CL"):
            displayColumnLabel(row, column);
            break;
            
            default:
            // console.log("this is broken")
        }   
    }
}

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
function displayElement(atomicNumber, row){
    var color = ""
    var currentelement = (PeriodicTable["elements"][atomicNumber-1]);
    //For Phase of Matter
    if (currentelement["phase"] == "Solid"){
        color = "primary";
        // console.log("solid");
    }
    else if (currentelement["phase"] == "Liquid"){
        color = "info";
        // console.log("liquid");
    }
    else if (currentelement["phase"] == "Gas"){
        color = "light";
        // console.log("gas");
    }
    else{
        color = "secondary";
        // console.log("other");
    }

    $(document).ready(function(){
        $("#row"+row).append('<button id="'+ atomicNumber + '"class="element btn-' + color + '"><h6 class = "atomicnumber">' + 
        currentelement["number"] +'</span><h3 class = "elementsymbol">'+
        currentelement["symbol"] +'</h3><h6>'+
        roundAtomicMass(currentelement["atomic_mass"]) +'</h6><h6 class = "elementname">'+
        currentelement["name"] +'</h6>'+
        '</button>')
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

function elementInformation(ElementNumber){
    var currentelement = (PeriodicTable["elements"][ElementNumber-1]);
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
    // if (currentelement['color'] != null){
    //     output += "<li>Color: " + currentelement['color'] + "</li>"
    // }
    output += "<li>Summary: " + currentelement['summary'] + "</li>"
    output += "</ul>"
    return output;
}

$(document).on('click', 'button', function(){
    elementId = this.id
    console.log(elementId)
    $("#displayblock").html(elementInformation(elementId))
});


displaytable();

// $(document).ready(function(){
//     $('button').click(function(){
//         console.log("Click")
//         alert("The Element was clicked.");
//     });
// });

// $(document).on('click', 'button', function(){
//     alert("The Element was clicked.");
//     console.log("Click")
// });
// $("#Element1").click(function(){
//     alert("The Element was clicked.");
//     $("#displayblock").html("Boo!")
// });