var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/student');
var student = mongoose.model('Student');
require('../models/address');
var address = mongoose.model('Address');

router.post('/api/student/create', function(req, res) {
  var Student = new student();

  Student.name = req.body.name;
  Student.age = req.body.age;

  Student.save(function(err){
  	if (err) {
  		console.log(err)
  	} else {
  		student.find({}, function(err, students){
			if (err){
				console.log(err);
			} else {
				res.json(students);
			}
		});
  	};
  });
});

router.post('/api/student/add/address', function(req, res) {

	student
	.findOne({ name : req.body.name, age: req.body.age })
	.exec(function(err, Student){

		var Address = new address(req.body);
		Student.address.push(Address);
		Student.save(function(err){
			if(err){ throw err };
			student.find(function(err, students){
				if (err) { throw err };
				res.json(students);
			})
		});
	});

});

router.get('/api/student/all', function(req, res) {
	student.find({}, function(err, students){
		if (err){
			console.log(err);
		} else {
			res.json(students);
		}
	});
});

module.exports = router;