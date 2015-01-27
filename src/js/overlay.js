var $= require('./zepto');
var Event = require('./event');


var createOverlay = function(zindex){
    var CSS = {
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        'background':'rgba(0,0,0,.6)',
        'z-index':zindex || 200,
        position:'fixed',
        display:'none'
    };
    return $('<div class="overlay"></div>').css(CSS);
};

/**
 * @constructor
 * @param {Number} zindex default is 200
 *
 * */
function Overlay(zindex,hide){
    var self = this;
    /**
     * @property {ZeptoElement} $el
     * */
    var ol = this.$el = createOverlay(zindex).appendTo('body');

    ol.on('touchstart touchmove touchend',function(e){
        e.preventDefault();
    });

    ol.on('touchstart click',function(e){ !hide&&self.hide(); });
}

/**
 * 显示overlay
 * @method
 * @public
 * */
Overlay.prototype.show = function(){
    this.$el.show();
    this.trigger('show');
};

/**
 * 隐藏overlay
 * @method
 * @public
 * */
Overlay.prototype.hide = function(){
    this.$el.hide();
    this.trigger('hide');
};

//扩展Event
Event.extendTo(Overlay.prototype);

module.exports = Overlay;



