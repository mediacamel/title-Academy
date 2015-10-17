/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	view: function(req, res){

		Item.find().populate('titles',{limit:1, sort:'count DESC'})
			.then(function(items){
				
				return res.view('main',{
					items:JSON.stringify(items)
				});
			})
			.catch(function(err){
				return res.serverError(err);
			});
		
		
	}
};

