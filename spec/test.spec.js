describe('Memory game', function () {

	const jsdom = require('jsdom'),
		  html  = require('../spec/indexof');
		
          
	beforeEach(() => {
	   dom      = new jsdom.JSDOM(html);
	   document = dom.window.document;
	   script  = require('../src/script');
	});

	// onClick btn simulator
	const onClick = card => {
	   card.addEventListener('flipCard', e => {
		  script.flipCard();
	   });
 
	   const e = new dom.window.Event("flipCard");
 
	   card.dispatchEvent(e);
	}

	it('Should return true', function () {
		const card = document.getElementsByClassName('.memBlock');
		expect(card.innerHTML).toBe('true');
	});
	
});

// if card i added to flip then return true(meaning it has flipped)
if length of memblock is 2