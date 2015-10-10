/**
 * TitleController
 *
 * @description :: Server-side logic for managing titles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	vote: function(req, res){
		var titleId = req.param('id');
		Title.findOne({id:titleId})
		.then(function(title){
			title.count += 1;
			title.save()
				.then(function(titleAfter){
					return res.json(titleAfter);
				})
		})
		.catch(function(err){
			return res.serverError(err);
		});
	}
};

