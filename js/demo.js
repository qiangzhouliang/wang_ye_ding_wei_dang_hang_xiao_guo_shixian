$(document).ready(function(){
	//滚动条发生滚动时
	$(window).scroll(function(){
		//获取滚动条滚动的距离
		var top = $(document).scrollTop();
		//获取右边栏 menu
		var menu = $("#menu");
		
		//获取所有的item
		var items = $("#content").find(".item");
		
		var currentId = ""; //当前所在的楼层（item）id
		items.each(function(){
			var m = $(this);
			//获取每一个item到顶端的值
			var itemTop = m.offset().top;
			if (top > itemTop - 200) {
				currentId = "#" + m.attr('id');
			}else{
				return false;
			}
		});
		//给相应楼层的a 设置 current，取消其他链接的current
		var currentLink = menu.find(".current");
		if (currentId && currentLink.attr("href") != currentId) {
			//删除class
			currentLink.removeClass('current');
			//添加class
			menu.find('[href=' + currentId +']').addClass('current');
		}
		//console.log(top);
	});
});