var express = require('express');
var Item = require('../services/item');
var router = express.Router();

router.get('/items', function(req, res) {
	Item.list(function(err, items){
		if (err) {
			return res.status(400).json(err);
		} 
		
		res.status(200).json(items);	
	});
});

router.post('/items', function(req, res){
	Item.save(req.body.name, function(err, item){
		if (err) {
			return res.status(400).json(err);
		} 
		
		res.status(201).json(item);
		});
});

router.put('/items/:id', function(req, res){ 
	Item.update(req.params.id, req.body.name, function(err, item){
		if (err) {
			return res.status(404).json(err);
		}
		
		res.status(202).json(item);
	});
});
	
router.delete('/items/:id', function(req, res){
	Item.delete(req.params.id, function(err, deleted){
		if (err) {
			return res.status(404).json(err);
		}
		
		return res.status(200).json(deleted);
	});
});

module.exports = router;