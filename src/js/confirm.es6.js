import Overlay from './overlay.es6'
import {extend} from './utils.es6'


var DEFAULT = {
	"dbtn":"确认",
	"cbtn":"取消",
	"content":"",
	success(){

	},
	cancel(){

	},
	container:document.body
}

export default class Confirm {

	constructor(opt){
		//super();
		this.opt=extend(DEFAULT,opt);
		this.OL=this.createOL();
		let dom=document.createElement('div');
		dom.innerHTML=this.buildHtml()
		this.EL=this.opt.container.appendChild(dom);
		this.bindEvent();
	}

	buildHtml(){
	return '<div class="confirm_alert" style="width:280px;background:#fff;border-radius:10px;-webkit-border-radius: 10px;position:fixed;left:50%;top: 50%;border:solid 1px #efefef;margin: -50px 0 0 -140px;text-align: center;z-index: 10000;"> <div class="alert_content" style="padding:20px;border-bottom:solid 1px #efefef;">'+this.opt.content+'</div> <div class="alert_buttons" style="font-size:14px;height: 40px;line-height: 40px;"> <a href="javascript:" data-id="cancel" style="color:#08c;float:left;width:50%;height:100%;box-sizing:border-box;-webkit-box-sizing:border-box;text-decoration: none;"> '+this.opt.cbtn+' </a> <a href="javascript:" data-id="done"  style="color:#08c;float:left;width:50%;height:100%;box-sizing:border-box;-webkit-box-sizing:border-box;border-left:solid 1px #efefef;text-decoration: none;"> '+this.opt.dbtn+' </a> </div> </div>'
	}

	remove(){
		this.OL.hide();
		this.EL.parentNode.removeChild(this.EL);
	}
	bindEvent(){
		this.EL.addEventListener('click',e=> this.remove(),false);	
	}
	createOL(){
		return this.OL ? this.OL : new Overlay(2000,true);
	}
}
