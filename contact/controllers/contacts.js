'use strict';

/**
 * Module dependencies.
 */


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact');
var Contact = require('../../contact/models/contact.js');


/**

/**
 * Create a Category
 */


exports.create = function(req, res) {
	var contact = new Contact(req.body);

	contact.save(function(err) {
		if (err) {
			return res.status(500).send()
		} else {
			res.status(200).json(contact);
		}
	});
};

/**
 * Show the current Category
 */
exports.read = function(req, res) {
	
	Contact.findById(req.params._id).exec(function(err,contact){
		if (err) {
	      return res.status(500).send();
      } 
      else{
      	res.json(contact)
      }
	})

};

/**
 * Update a Category
 */
exports.update = function(req, res) 
{
	
	Contact.findById(req.params._id,function(err,data){
		var contact=data;
		
		contact.name=req.body.name;
		contact.created=req.body.created;
		contact.number=req.body.number;

		contact.save(function(err,data){
			if(err){
				throw err;
			}
			res.json(data)
		})



	})
};

/**
 * Delete an Category
 */
exports.delete = function(req, res) {

	var contact = Contact.findById(req.params._id);

	Contact.findById(req.params._id).remove(function(err,contact) {
		if (err) {
			return res.status(400).send();
		} else {
			res.status(201).json(contact);
		}
	});

};

/**
 * List of Categories
 */
exports.list = function(req, res) {
    Contact.find().exec(function(err, contact) {
        if (err) {
            return res.status(400).send();
        } else {
            res.json(contact);
        }
    });
};