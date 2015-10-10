$(document).ready(function(){
	
	var items = JSON.parse(window.DATA);
	var $list = $('.item-list');
	for(var i in items){
		var item = items[i];
		
		var itemHtml = makeItemHtml(item);
		$list.append(itemHtml);
	}
	/*
	var $img = $('<img width="100%"/>');
		$img.attr('src',item.imageSrc);
		$img.appendTo('.single-image');

		var $list = $('<ul id="title-list" class="list-group"></ul>');
		for(var i in item.titles){
			var titleObj = item.titles[i];
			$list.prepend(makeTitleHtml(titleObj));
		}
		$('.single-list').append($list);

	console.log(window.TA.titleList);	
	*/	
})


function makeItemHtml(itemObj){
	
	var itemHtml = '';
itemHtml += '<div class="col-md-4 col-sm-6 col-xs-12">';
itemHtml += '<a href="/item/'+ itemObj.id +'" title="">';
itemHtml += '<div class="panel panel-default">';
itemHtml += '<div class="panel-body">';
itemHtml += '<img src="'+ itemObj.imageSrc +'" class="img-responsive">';
itemHtml += '<ul id="title-list" class="list-group"><li class="list-group-item"><span class="item-title">' + itemObj.titles[0].text + '</span><div class="pull-right"><span class="item-star"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></span><span class="item-count">'+itemObj.titles[0].count+'</span></div></li></ul>';
itemHtml += '</div>';
itemHtml += '</a>';
itemHtml += '</div>';
    return itemHtml;
}