'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
	

/**
 * Category Schema
 */


var UserSchema =mongoose.Schema({
	
	email: {
		type: String,
		trim: true,
		default: '',
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	name: {
		type: String,
		unique: 'testing error message',
		required: 'Please fill in a username',
		trim: true
	},
	password: {
		type: String,
		default: ''
	},

});



var User=mongoose.model('User', UserSchema);

module.exports=User;
