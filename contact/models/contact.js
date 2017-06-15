'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
	

/**
 * Category Schema
 */

var ContactSchema =mongoose.Schema({
	created:{
		type:Date,
		default: Date.now
	},
	name:{
		type:String,
		default:'',
		trim:true,
		unique:true,
		required: 'name cannot be blank'
		
	},
	number:{
		type:Number,
		unique:true,
		required: 'name cannot be blank'

	}


});



var Contact=mongoose.model('Contact', ContactSchema);

module.exports=Contact;
