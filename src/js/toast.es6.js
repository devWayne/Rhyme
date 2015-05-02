import Popup from './popup.es6'
import {extend,setCss} from './utils.es6'

var DEFAULT = {
	container:document.body,
	OL_hidden:false,
	text:'Toast',
	time:2000
}

var cssEL={
	'position':'fixed',
        'z-index':'2000',
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
}

export default class Toast extends Popup {

	constructor(opt){
		super();
		this.opt=extend(DEFAULT,opt)
		//this.OL=this.createOL();
		let dom=document.createElement('div');
		dom.innerHTML=this.buildHtml(this.opt.text)

		//set Toast Csså
		for (var key in cssEL){
		setCss.call(dom,key,cssEL[key]);
		}
		this.EL=document.getElementsByTagName('body')[0].appendChild(dom);
		let domHeight=dom.getBoundingClientRect().height,
		domWidth=dom.getBoundingClientRect().width;
		setCss.call(this.EL,'margin','-'+domHeight/2+'px 0 0 -'+domWidth/2+'px');
		this.bindEvent(this.EL);
		this.bindEvent(this.OL.el);
		var timer = setTimeout(()=>this.remove(),this.opt.time);
	}

	buildHtml(text){
		return '<div>'+text+'</div>'
	}

}
