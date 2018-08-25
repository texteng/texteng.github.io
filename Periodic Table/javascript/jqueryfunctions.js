$( document ).ready(function() {
    //Activates Modal
    $(document).on('click', '.element', function(){
        elementId = this.id
        // console.log(elementId)
        $(".modal-title").html(elementInformationTitle(elementId))
        $(".modal-body").html(elementInformation(elementId))
    });

    //Highlights whole rows 
    $(document).on('mouseenter', '.rowlabel', function(){
        rowId = this.id;
        $("."+ rowId).button('toggle');
    });
    $(document).on('mouseleave ', '.rowlabel', function(){
        rowId = this.id;
        $("."+ rowId).button('toggle');
    });

    //Highlights whole columns 
    $(document).on('mouseenter', '.columnlabel', function(){
        columnId = this.id;
        $("."+ columnId).button('toggle');
    });
    $(document).on('mouseleave', '.columnlabel', function(){
        columnId = this.id;
        $("."+ columnId).button('toggle');
    });

    //Highlights whole section on legend
    $(document).on('mouseenter', '.legenditem', function(){
        var colorBoxId = this.id;
        $("."+ colorBoxId).button('toggle');
    });
    $(document).on('mouseleave ', '.legenditem', function(){
        var colorBoxId = this.id;
        $("."+ colorBoxId).button('toggle');
    });

});
