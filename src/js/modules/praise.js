var $ = require('./zepto');

var ANIMATEDEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function like(elem) {
    elem = $(elem);
    $(elem).on('click', function(e) {
        e.preventDefault();
        elem.toggleClass("like-active").toggleClass("like-inactive");
        elem.addClass('animated bounceIn').on(ANIMATEDEND, function() {
            $(this).removeClass('animated bounceIn');
        });
    })
}

function disLike(elem) {
    elem = $(elem);
    $(elem).on('click', function(e) {
        e.preventDefault();
        elem.toggleClass("dislike-active").toggleClass("dislike-inactive");
        elem.addClass('animated bounceIn').on(ANIMATEDEND, function() {
            $(this).removeClass('animated bounceIn');
        });
    })
}

function praise(likeElem,dislikeElem){

}


var Praise = {
    like: like,
    disLike: disLike,
    praise:praise
}

module.exports = Praise;
