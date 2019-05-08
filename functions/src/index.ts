let functions = require('firebase-functions');

exports.sendPush = functions.database.ref('/projects/{projectId}').onCreate(event => {
	let projectData = event.data.val(); 
	if (!event.data.previous.exists()) {
		// Do things here if project didn't exists before
	}
});