//Functions that display the table, rows, elements and legends are found here. The rest are found in PTDisplayElements.
var Tablematrix = [
    [0, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
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

var Tablematrixwide = [
    [0, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
    ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
    ["RL", 3, 4, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    ["RL", 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
    ["RL", 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    ["RL", 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    ["RL", 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    ["RL", 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
]   

//*********************************Renders Table************************
function displayTable(type, wide = false){
    $("#table").html('');
    var matrix = Tablematrix;
    if (wide == "wide"){
        matrix = Tablematrixwide;
    }
    for (var i = 0, rownumber = matrix.length; i < rownumber; i++){
        $("#table").append('<div id ="row'+ i +'" class = "row"></div>');
    }
    var rowlength = 10;
    if (wide == "wide"){
        rowlength = 7;
    }
    for (var row=0; row <=rowlength; row++){
        displayRow(row, type, wide);
    }
    
    $( document ).ready(function() {
        $("#legend").html(displayLegend(type))
    });
}

//*********************************Renders Each Row************************
function displayRow(row, type, wide){
    var matrix = Tablematrix;
    if (wide == "wide"){
        matrix = Tablematrixwide;
    }
    length = matrix[row].length;
    for (var column=0; column < length; column++ ){
        var tableposition = matrix[row][column];
        switch(true) {
            case (tableposition > 0):
                displayElement(tableposition, row, column, type)
            break;
            
            case (tableposition == 0):
                displayBlank(row);
            break;
            
            case (tableposition == "Lanthanide"):
                if (type == "category" || type == "groupBlock" ){
                    $(document).ready(function(){
                        $("#row6").append('<button class="element btn-danger R6">57-71</div>');
                    })
                }
                else{
                    $(document).ready(function(){
                        $("#row6").append('<div class="blank h6">57-71</div>');
                    })
                }
            break;
            
            case (tableposition == "Actinoid"):
                if (type == "category" || type == "groupBlock" ){
                    $(document).ready(function(){
                        $("#row7").append('<button class="element btn-warning R7">89-103</div>');
                    })
                }
                else{
                    $(document).ready(function(){
                        $("#row7").append('<div class="blank h6">89-103</div>');
                    })
                }
            break;
            
            case (tableposition == "SB"):
                displaySmallBlank(row);
            break;
            
            case (tableposition == "RL"):
                displayRowLabel(row);
            break;
            
            case (tableposition == "CL"):
                if (wide != "wide"){
                    displayColumnLabel(row, column);
                }
            else{
                if (column <= 2){
                    displayColumnLabel(row, column);
                }
                else{
                    displayColumnLabel(row, column-14);
                }
            }
            break;
            
            default:
            console.log("this is broken")
        }   
    }
}
//***************************Renders Each Element******************************* 
// Minor elements found in PTDispalyElements
function displayElement(atomicNumber, row, column, type){
    var currentelement = (PeriodicTable[atomicNumber-1]);
    var output = ""
    output = '<button id="'+ atomicNumber + '" '; //Determines button ID
    output += 'class= "element '; //Below are the classes added to elements
    //Creates Row Class
    var modifiedrow = row;
    if (row > 8){modifiedrow -= 3;}
    output +=   'R' + modifiedrow + ' ';
    
    //Creates Column Class
    if(atomicNumber == 71 || atomicNumber == 103){
        output += 'C3 ';
    }

    if((atomicNumber < 57 || atomicNumber > 71) && 
    (atomicNumber < 89 || atomicNumber > 103)){
        if (column == 17 && (atomicNumber == 21 || atomicNumber == 39)){
            output += 'C3 ';
        }
        else if(   column == 18 && 
            (atomicNumber == 22 || 
             atomicNumber == 40 || 
             atomicNumber == 72 || 
             atomicNumber == 104)){
            output +=   'C4 ';
        }

        else if(column > 18){
            column -= 14;
            output +=   'C' + column      + ' ';
        }
        else{
            output +=   'C' + column      + ' ';
        }
    }

    //Determines color of element square
    var colordict = colorLibrary(type);  
    var color = colordict[currentelement[type]]
    if (color == undefined){
        output += 'btn-light';
    }
    else{
        output += 'btn-' + color;
    }
    output += '" ';

    output += 'data-toggle="modal" data-target="#ElementDisplayModal">\n'; //Allows information to be displayed in modal

    //Information found inside element
    output += '<h6 class = "atomicnumber">' + currentelement["number"] +'</h6>\n';
    output += '<h3 class = "elementsymbol">'+ currentelement["symbol"] +'</h3>\n';
    
    if(type == "phase"){
        output += '<h6>'+ currentelement["phase"] + '</h6>\n'
    }
    else{
        output += '<h6>'+ roundAtomicMass(currentelement["atomic_mass"]) + '</h6>\n';
        output += '<h6 class = "elementname">'+ currentelement["name"] +'</h6>\n';
    }
    output += '</button>';
    
    $(document).ready(function(){
        $("#row"+row).append(output)
    })
}
        
//*********************************Renders Legend************************

function displayLegend(type){
    var dict = colorLibrary(type);
    var output = "";
    output +='<h4>' + dict["title"] + '</h4>'
    output +='<table class = "legend">'
    output +='<tr>\n<td>\n<ul>\n'
    var count = 0;
    for (key in dict){
        if (key == "title"){continue};
        if (count > 1 && count % 6 == 0){
            output +='</ul>\n</td>\n<td>\n<ul>\n'
        }
        output += '<li class="legenditem" id ="btn-'+ dict[key] +'">\n' 
        output += '<div class ="colorBox btn-'+ dict[key] + '"></div> '
        output += key 
        output += '</li>\n'
        count++
    }
    return output;
}