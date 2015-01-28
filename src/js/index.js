Overlay = require('./modules/overlay');
Toast = require('./modules/toast');
Praise = require('./modules/praise');

//Main
function main() {
    Praise.like('.J_icon_like');
    Praise.disLike('.J_icon_dislike');
    //Toast('123', 2000);
}

main();
