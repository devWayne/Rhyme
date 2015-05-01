
export default class Overlay {

    constructor(zindex, hide) {
        var ol = this.el = document.getElementsByTagName('body')[0].appendChild(this.createOverlay(zindex));

	if(!hide)ol.addEventListener('touchstart', e=> this.hide(),false);

    }

    createOverlay(zindex) {
        var CSS = {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            'background': 'rgba(0,0,0,.6)',
            'z-index': zindex || 200,
            position: 'fixed'
        };
        var el = document.createElement('div')
        for (var key in CSS) {
            this.setCss.call(el, key, CSS[key])
        }
        return el;

    }

    show() {
	this.setCss.call(this.el,'display','block');
    }

    hide() {
	this.setCss.call(this.el,'display','none');
    }

    setCss(elem, value) {
        if (arguments.length < 2) {
            var result = this.getComputedStyle(elem, '');
            return result;
        } else {
            if (elem && typeof(value) == 'string') {
                var css = elem + ":" + value;
                return this.style.cssText += css + ';'
            }
        }
    }

}

window.Overlay=Overlay;
