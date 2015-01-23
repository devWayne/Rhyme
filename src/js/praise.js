var $=require('zepto');  

var ANIMATEDEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function Praise(elem) {
    elem=$(elem);
    elem.toggleClass("praise-img");
    elem.toggleClass("no-praise-img");
    elem.addClass('animated bounceIn').one(ANIMATEDEND, function() {
        $(this).removeClass('animated bounceIn');
    });
}

module.exports = Praise;

