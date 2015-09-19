window.TA = window.TA || {};



$(document).ready(function(){
	// alert("hi");

	var $img = $('<img width="100%"/>');
	$img.attr('src',window.TA.imageSrc);
	$img.appendTo('.single-image');

	var $list = $('<ul id="title-list" class="list-group"></ul>');
	for(var i in window.TA.titleList){
		var titleObj = window.TA.titleList[i];
		$list.prepend(makeTitleHtml(titleObj));
	}
	$('.single-list').append($list);

	console.log(window.TA.titleList);

	$("#title-form").on("submit",function(event){
		event.preventDefault();
		// console.log(event.target);
		var $form = $(event.target);
		var title = $form.find('input[name="title"]').val();
		// console.log($form[0]);
		// var titleHtml = '<li class="list-group-item"><span class="item-title">제목학원은 제목학원</span><div class=pull-right>          <span class="item-star" style="cursor:pointer">          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>        </span>          <span class="item-count">123</span>        </div>        </li>';
		

		
		$list.prepend(makeTitleHtml({title:title,count:0}));
	})
})

function makeTitleHtml(titleObj){
	var titleHtml = '<li class="list-group-item">';
        titleHtml += '<span class="item-title">'+titleObj.title+'</span>';
        titleHtml += '<div class="pull-right">';
        titleHtml += '<span class="item-star" style="cursor:pointer">';
        titleHtml += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        titleHtml += '</span>';
        titleHtml += '<span class="item-count">'+titleObj.count+'</span>';
        titleHtml += '</div>';
        titleHtml += '</li>';
    return titleHtml;
}