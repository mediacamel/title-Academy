/**
 * SingleController
 *
 * @description :: Server-side logic for managing singles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res){
		//console.log(req.body);
		var imageSrc = req.body.imageSrc;
		var firstTitle = req.body.firstTitle;

		if(typeof imageSrc === 'undefined') return res.badRequest();
		if(typeof firstTitle === 'undefined') return res.badRequest();

		Item.create({
			imageSrc:imageSrc
		})
		.then(function(item){
			var itemUrl = '/item/'+item.id;
			Title.create({
				text:firstTitle,
				item:item.id
			})
			.then(function(title){
				return res.redirect(itemUrl);	
			});
			
		})
		.catch(function(err){
			return res.serverError(err);
		})
		
	},
	
	view: function(req, res){
		
		var itemId = req.param('id');
		Item.findOne({id:itemId}).populate('titles',{sort:'count DESC'})
			.then(function(item){
				
				return res.view('item',{
					item:JSON.stringify(item)
				});
			})
			.catch(function(err){
				return res.serverError(err);
			});
		
		
	}
};

//promise