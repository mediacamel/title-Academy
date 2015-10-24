

$(document).ready(function(){
	
	var item = JSON.parse(window.DATA);
	var $img = $('<img width="100%"/>');
		$img.attr('src',item.imageSrc);
		$img.appendTo('.single-image');

		var $list = $('<ul id="title-list" class="list-group"></ul>');
		for(var i in item.titles){
			var titleObj = item.titles[i];
			$list.append(makeTitleHtml(titleObj));
		}
		$('.single-list').append($list);

	

	$("#title-form").on("submit",function(event){
		event.preventDefault();
		
		var $form = $(event.target);
		var title = $form.find('input[name="title"]').val();

		$.post('/title',{
			'text':title,
			'item':item.id
		},function(result){
			console.log(result);
			$('#title-list').prepend(makeTitleHtml({id: result.id, text:title,count:0}));
			$form.find('input[name="title"]').val('');
		})
		
		
	})
	$("#title-list").on('click', '.item-star', function(){

		var $li = $(this).offsetParent();
		$.post('/title/'+$li.data().titleid,function(response){

			$li.find('.item-count').text(response.count);
		});
		
	})
})

function makeTitleHtml(titleObj){
	

	var titleHtml = '<li class="list-group-item" data-titleId="'+(titleObj.id ? titleObj.id : -1)+'">';
        titleHtml += '<span class="item-title">'+titleObj.text+'</span>';
        titleHtml += '<div class="pull-right item-star" style="cursor:pointer">';
        titleHtml += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        titleHtml += '<span class="item-count">'+titleObj.count+'</span>';
        titleHtml += '</div>';
        titleHtml += '</li>';
    return titleHtml;
}