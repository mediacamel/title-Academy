

$(document).ready(function(){
	// alert("hi");
	/*
	$.get('/single/1',function(result){
		console.log(result);
		var $img = $('<img width="100%"/>');
		$img.attr('src',result.imageSrc);
		$img.appendTo('.single-image');

		var $list = $('<ul id="title-list" class="list-group"></ul>');
		for(var i in result.titles){
			var titleObj = result.titles[i];
			$list.prepend(makeTitleHtml(titleObj));
		}
		$('.single-list').append($list);



	},'json');
	*/
	var item = JSON.parse(window.DATA);
	var $img = $('<img width="100%"/>');
		$img.attr('src',item.imageSrc);
		$img.appendTo('.single-image');

		var $list = $('<ul id="title-list" class="list-group"></ul>');
		for(var i in item.titles){
			var titleObj = item.titles[i];
			$list.prepend(makeTitleHtml(titleObj));
		}
		$('.single-list').append($list);

	

	$("#title-form").on("submit",function(event){
		event.preventDefault();
		// console.log(event.target);
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
		// console.log($form[0]);
		// var titleHtml = '<li class="list-group-item"><span class="item-title">제목학원은 제목학원</span><div class=pull-right>          <span class="item-star" style="cursor:pointer">          <span class="glyphicon glyphicon-star" aria-hidden="true"></span>        </span>          <span class="item-count">123</span>        </div>        </li>';
		
	})

	$(".item-star").click(function(){
		var $li = $(this).offsetParent().data().titleid;
		//console.log($li);
		$.post('/title/'+$li,function(){
			location.reload();	
		});
		
	})
})

function makeTitleHtml(titleObj){
	

	var titleHtml = '<li class="list-group-item" data-titleId="'+(titleObj.id ? titleObj.id : -1)+'">';
        titleHtml += '<span class="item-title">'+titleObj.text+'</span>';
        titleHtml += '<div class="pull-right">';
        titleHtml += '<span class="item-star" style="cursor:pointer">';
        titleHtml += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
        titleHtml += '</span>';
        titleHtml += '<span class="item-count">'+titleObj.count+'</span>';
        titleHtml += '</div>';
        titleHtml += '</li>';
    return titleHtml;
}