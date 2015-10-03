/**
 * SingleController
 *
 * @description :: Server-side logic for managing singles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function(req, res){
		
		var itemId = req.param('id');
		Item.findOne({id:itemId}).populate('titles')
			.then(function(item){
				
				return res.view('item',{
					layout:'',
					item:JSON.stringify(item)
				});
			})
			.catch(function(err){
				return res.serverError(err);
			});
		
		
	}
};

//promise