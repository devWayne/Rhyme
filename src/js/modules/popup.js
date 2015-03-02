var $ = require("./zepto");
var OverLay = require("./overlay");
var OL;


var DEFAULT = {
    container: document.body,
    content: '<div></div>',
    width: 300,
    height: 100

}


function _createOL() {
    return OL ? OL : new OverLay("", true);
}

function Popup(opt) {
    var self = this,
        overLay;
    self.OL = OL = _createOL();
    self.opt = $.extend(true, DEFAULT, opt || {});
    self.node = $(self._buildHtml());
    self._appendNode();

}

Popup.prototype._appendNode = function() {
    var self = this;
    var node = self.node;
    self.OL.show();
    node.appendTo($(self.opt.container));

}


Popup.prototype._buildHtml = function() {
    var self = this;
    var margin_top = -(self.opt.height / 2),
        margin_left = -(self.opt.width / 2),
        width = self.opt.width,
        height = self.opt.height;
    var content = '<div class="popup_alert" style="width:' + width + 'px;height:' + height + 'px;margin-top:' + margin_top + 'px;margin-left:' + margin_left + 'px">' + self.opt.content + '</div>';
    return content;
}


Popup.prototype.remove = function() {
    var self = this;
    self.OL.hide();
    self.node.remove();
}

module.exports = Popup;
