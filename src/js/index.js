Overlay = require('./modules/overlay');
Toast = require('./modules/toast');
Praise = require('./modules/praise');
Confirm = require('./modules/confirm');
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

main();
