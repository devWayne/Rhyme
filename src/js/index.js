Overlay = require('./modules/overlay');
Toast = require('./modules/toast');
Praise = require('./modules/praise');
Confirm = require('./modules/confirm');
ScrollToTop = require('./modules/scrolltop');
$=require('./modules/zepto');

//Main
function main() {
    Praise.like('.J_icon_like');
    Praise.disLike('.J_icon_dislike');
    //Toast('123', 2000);
    new Confirm({
        content: "this is a confirm",
        dbtn: "confirm",
        cbtn: "cancel",
        success: function() {
            //suceess callback
        },
        cancel: function() {
            //error callback
        }
    });

}

$('#topbtn').click(function(e) {
    e.preventDefault();
    ScrollToTop(window);
});


  $('#topbtn').scroll(function() {
        console.log($(this).scrollTop());
   });



main();
