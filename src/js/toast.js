var $ = require('zepto');
var Overlay = require('overlay');

var AUTOTIME = 2000;
var ZINDEX = 10000;
var overlay = new Overlay(ZINDEX-1);

/**
 * @constructor
 * @param {String} text text to shown
 * @param {Number} time auto hide time, default 2000ms;
 * */
function Toast(text,time){
    time = time || AUTOTIME;

    var CSS = {
        'position':'fixed',
        'z-index':ZINDEX,
        'top':'50%',
        'left':'50%',
        'min-width':'100px',
        'max-width':'160px',
        'padding':'10px',
        'border-radius':'5px',
        '-webkit-border-radius':'5px',
        'background':'#000',
        'color':'#fff',
        'text-align':'center',
        'font-size':'14px',
        'word-break':'break-all',
        '-webkit-box-sizing':'border-box',
        'box-sizing':'border-box'
    };

    var box = $('<div>'+text+'</div>');
    box.css(CSS).appendTo('body').css('margin','-'+ box.height()/2+'px 0 0 -'+ box.width()/2+'px' );
    overlay.show();
    overlay.once('hide',function(){
        box.remove();
        clearTimeout(timer);
    });

    var timer = setTimeout(function(){
        overlay.hide();
    },time);
}

module.exports = Toast;


