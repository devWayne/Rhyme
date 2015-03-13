Overlay = require('./modules/overlay');
Toast = require('./modules/toast');
Praise = require('./modules/praise');
Confirm = require('./modules/confirm');
Popup = require('./modules/popup');
ScrollToTop = require('./modules/scrolltop');
$ = require('./modules/zepto');

require("babel/register")

//Main
function main() {
    Praise.like('.J_icon_like');
    Praise.disLike('.J_icon_dislike');
    //Toast('123', 2000);
   /* new Confirm({
        content: "this is a confirm",
        dbtn: "confirm",
        cbtn: "cancel",
        success: function() {
            //suceess callback
        },
        cancel: function() {
            //error callback
        }
    });*/
    new Popup({
	content: "<div>Test Popup</div>",
    });
}

$('#topbtn').click(function(e) {
    e.preventDefault();
    ScrollToTop();
});


main();
