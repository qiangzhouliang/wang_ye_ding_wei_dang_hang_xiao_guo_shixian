//根据class name 获取元素
function getByClassName (obj,cls) {
	var elements = obj.getElementsByTagName('*');
	var result = [];
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].className == cls) {
			result.push(elements[i]);
		}
	}
	return result;
}

function hasClass(obj,cls){
	return obj.className.match(new RegExp("(\\s|^)"+ cls + "(\\s|$)"))
}

function removeClass(obj,cls){
	if (hasClass(obj,cls)) {
		//删除
		var reg = new RegExp("(\\s|^)"+ cls + "(\\s|$)");
		obj.className = obj.className.replace(reg,"");
	}
}
function addClass(obj,cls){
	if(!hasClass(obj,cls)){
		obj.className += " "+cls;
	}
}
window.onload = function(){
	window.onscroll = function(){
		var top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
		var menus = document.getElementById('menu').getElementsByTagName('a');
		var items = getByClassName(document.getElementById('content'),'item');
		
		//获取滚动条当前所在楼层的id
		var currentId = '';
		for (var i = 0; i < items.length; i++) {
			var _item = items[i];
			var _itemTop = _item.offsetTop;
			if (top > _itemTop - 200) {
				currentId = _item.id;
			}else{
				break;
			}
		}
		if (currentId) {
			//给正确的menu下的a元素class赋值
			for (var j = 0; j < menus.length; j++) {
				var _menu = menus[j];
				var _href = _menu.href.split("#");
				if (_href[_href.length - 1] != currentId) {
					removeClass(_menu,'current');
				}else{
					addClass(_menu,'current');
				}
			}
		}
	}
}
