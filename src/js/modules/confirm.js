var $ = require("./zepto");
var OverLay =  require("./overlay");
var OL;


var DEFAULT = {
	"dbtn":"确认",
	"cbtn":"取消",
	"content":"",
	success:function(){

	},
	cancel:function(){

	},
	container:document.body
}

function _createOL(){
	return OL ? OL : new OverLay("",true);
}


function Confirm(opt){
	var self = this,
		overLay;
	
	self.OL = OL = _createOL();

	self.opt = $.extend(true,DEFAULT, opt || {});
	
	self.node = $(self._buildHtml());

	self._bindEvent();
}


Confirm.prototype._buildHtml = function(){
	var self = this;
	var opt = self.opt;
	return '<div class="confirm_alert"> <div class="alert_content">'+opt.content+'</div> <div class="alert_buttons"> <a href="javascript:" data-id="cancel"> '+opt.cbtn+' </a> <a href="javascript:" data-id="done"> '+opt.dbtn+' </a> </div> </div>'
}


Confirm.prototype._bindEvent = function(){
	var self = this;
	var node = self.node;

	
	self.OL.show();

	node.appendTo($(self.opt.container));
	
	node.find("[data-id='done']").on("click",function(e){
		e.preventDefault();
		self.remove();
		self.opt.success(self,e);
	})
	node.find("[data-id='cancel']").on("click",function(e){
		e.preventDefault();
		self.remove();
		self.opt.cancel(self,e);
	})
}

Confirm.prototype.remove =  function(){
	var self = this;
	self.OL.hide();
	self.node.remove();
}


module.exports =  Confirm;


