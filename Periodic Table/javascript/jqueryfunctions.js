//See Periodic Table Render for non-interactive portions
$( document ).ready(function(){
    //************************************** Modal Functions *******************************************
    $('.element').click(function(){ //Activates Modal when element is clicked
        elementId = this.id
        if(elementId != "lanth" && elementId != "actin"){
        $(".modal-title").html(elementInformationTitle(elementId))
        $(".modal-body").html(elementInformation(elementId))
        }
    });

    //************************************** Hover Functions *******************************************
    $('.rowlabel').hover( //Highlights rows when mouse goes over labels
        function(){ 
        rowclass = this.id;
        $("."+ rowclass).button('toggle')
        },
        function(){
        rowclass = this.id;
        $("."+ rowclass).button('toggle')
    });
    
    $('.columnlabel').hover( //Highlights columns when mouse goes over labels
        function(){ 
        columnclass = this.id;
        $("."+ columnclass).button('toggle')
        },
        function(){
        columnclass = this.id;
        $("."+ columnclass).button('toggle')
    });

    $('.legenditem').hover( //Highlights all the elements of a particular group when mouse goes over legend item
        function(){ 
        legendclass = this.id;
        $("."+ legendclass).button('toggle')
        },
        function(){
        legendclass = this.id;
        $("."+ legendclass).button('toggle')
    });

    //************************************** Navbar Stuff *******************************************
    $('.view').click(function(){ // Changes table to new category
        currentcategory = this.id;
        $( "#"+currentcategory ).removeClass( "active" )
        $( "#"+currentcategory ).addClass( "active" );
        displayTable(currentcategory);
    });
    
    $(document).on('click', '.wide', function(){ //turns narrow to wide
        $("#widecss").html('<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustomWide.css">')
        $("#wide").html('<button class="nav-link btn btn-link standard active">Standard</button>')
        wide = true;
        matrix = Tablematrixwide;
        displayTable(currentcategory);
    });
    
    $(document).on('click', '.standard', function(){ //turns wide to narrow
        $("#widecss").html('<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustom.css">')
        $("#wide").html('<button class="nav-link btn btn-link wide active">Wide</button>')
        wide = false;
        matrix = Tablematrix;
        displayTable(currentcategory);
    });

    $('#credits').click(function(){ //shows credits
        $(".modal-title").html("Credits")
        let text = "<ul>"
        text += "<li>Creator: Stephen Teng</li>"
        text += "<li>Sources: https://github.com/Bowserinator/Periodic-Table-JSON<br>https://github.com/andrejewski/periodic-table</li>"
        text += "<li>Project for Coding Dojo Dallas</li>"
        text += "</ul>"
        $(".modal-body").html(text);
    });

});

