import Overlay from './overlay.es6'

var DEFAULT = {
	container:document.body,
	OL_hidden:true
}

export default class Popup {

	constructor(){
		this.opt=DEFAULT;
		this.OL=this.createOL();
		this.EL;
		//let dom=document.createElement('div');
		//dom.innerHTML=this.buildHtml();
		//this.EL=this.opt.container.appendChild(dom);
		//this.bindEvent();
	}
	remove(){
		this.OL.hide();
		this.EL.parentNode.removeChild(this.EL);
	}
	bindEvent(EL){
		EL.addEventListener('click',e=> this.remove(),false);	
	}
	createOL(){
		return this.OL ? this.OL : new Overlay(2000,true);
	}
}

