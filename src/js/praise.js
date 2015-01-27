var $ = require('Zepto');

var ANIMATEDEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function Praise(elem) {
    elem = $(elem);
    $(document).on('click', elem, function(e) {
        e.preventDefault();
        elem.toggleClass("praise-img");
        elem.toggleClass("no-praise-img");
        elem.addClass('animated bounceIn').one(ANIMATEDEND, function() {
            $(this).removeClass('animated bounceIn');
        });
    })
}

module.exports = Praise;
