const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('../../passport')

// this route is just used to get the user basic info
router.get('/users', function(req, res) {
	User.find({}, function(err, docs) {
		if (!err){
			console.log(docs);
			res.json(docs)
		} else {throw err;}
	});

})
module.exports = router