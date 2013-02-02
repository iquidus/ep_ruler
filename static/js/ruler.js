
rulerHide = function(){
    $('#rulermenu').val('none');
    $('#ruler').css('display', 'none');
};
rulerShow = function(){
    if ($('#viewfontmenu').val() != 'monospace') {
        $('#viewfontmenu').val('monospace');
        pad.changeViewOption('useMonospaceFont', true); 
    }
    $('#ruler').css('display', 'block');
};

rulerSetColor = function(){
    var r_color = $('iframe.[name="ace_outer"]').contents().find('#sidedivinner').css('color');
    $('#ruler').css('background-color', '');
    $('#ruler').css('background-color', r_color);
}

rulerSetPosition = function(column){
    column = column;
    var test = document.getElementById("fontTest");
    var charWidth = (test.clientWidth + 1) / 62;
    var ruler_margin = 32;
    var ruler_pos = charWidth * column + ruler_margin;

    ruler_pos = ruler_pos + 'px';
    $('#ruler').css('margin-left', ruler_pos);  
};

$('#rulermenu').change(function(){
    if($('#rulermenu').val() == 'none' ){
        rulerHide();
    } else {
        rulerSetPosition($('#rulermenu').val());
        rulerSetColor();
        rulerShow();
    }
});

$('#viewfontmenu').change(function(){
    if($('#rulermenu').val() != 'none' ){
        rulerHide();
        $('#rulermenu').val('none');
    }
});

window.onresize = function() {
    if($('#rulermenu').val() != 'none' ){
        rulerSetPosition($('#rulermenu').val());
    }
}


