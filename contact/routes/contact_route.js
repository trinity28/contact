
'use strict';
var passport = require('passport');
module.exports = function(app) {
	var contacts= require('../../contact/controllers/contacts.js');

	var users= require('../../contact/controllers/user.js');


	app.route('/contacts').get(contacts.list).
	post(contacts.create)

	app.route('/contacts/:_id').get(contacts.read).
	put(contacts.update).
	delete(contacts.delete)


	app.route('/signup').post(users.signup);
	app.route('/signin').post(users.signin);
	app.route('/signout').get(users.signout);



    
	};