var $=require('zepto');    
function MoveLoad(loadEl,callback) {
	
        var lock = false;
        var loadEl = $(loadEl);

        // 状态切换
        function _switcher(flag) {
            if (flag) {
                lock = true;
                loadEl.show();
            } else {
                lock = false;
                loadEl.hide();
            }
        }

        $(window).on("touchmove", function(e) {
            var scrollHeight = $(document.body).height() - $(window).height();
            var top = $(document.body).scrollTop();

            if (scrollHeight - top < 20 && !lock) {
                _switcher(true);
                callback();
		_switcher(false);
            }
        })
    }

module.exports= MoveLoad;
