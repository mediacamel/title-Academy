/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function(req, res){

		Item.find().populate('titles',{limit:1})
			.then(function(items){
				
				return res.view('main',{
					layout:'',
					items:JSON.stringify(items)
				});
			})
			.catch(function(err){
				return res.serverError(err);
			});
		
		
	}
};

