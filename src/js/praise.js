var $ = require('./zepto');

var ANIMATEDEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function Praise(elem) {
    elem = $(elem);
    $(elem).on('click',function(e) {
        e.preventDefault();
        elem.toggleClass("praise-img");
        elem.toggleClass("no-praise-img");
        elem.addClass('animated bounceIn').on(ANIMATEDEND, function() {
            $(this).removeClass('animated bounceIn');
        });
    })
}

module.exports = Praise;
