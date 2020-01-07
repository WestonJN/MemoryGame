
const jsdom = require('jsdom')       
const {JSDOM} = jsdom;

document.addEventListener('click', function (event) {

	if (event.target.matches('.modal-open')) {
		// Run your code to open a modal
	}

	if (event.target.matches('.close')) {
		// Run your code to close a modal
	}

}, false);