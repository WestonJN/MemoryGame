describe('memory game tests',function () {
	
	const html = require('./indexof.js')
	const jsdom = require('jsdom')
	const {JSDOM} = jsdom;

	
	

	const clickSimulator = (arg)=>{
		let event = new dom.window.MouseEvent('click', {
			view: dom.window,
			bubbles: true,
			cancelable: false
		})

		let element = document.getElementsByTagName('div')[arg];
		element.dispatchEvent(event);
	};

	beforeEach(()=>{

		dom = new JSDOM(html,{
        	
        	runScripts: "dangerously",
        	resources: "usable"
      	});
		document = dom.window.document;
		game = require("../src/script.js");
		
	})

	afterEach(()=>{
		delete require.cache[require.resolve('../src/script.js')]
	})

	it("should be able to add addEventListener to all game tiles and make them clickable", ()=>{
		clickSimulator(0) // specify which card index to click
		expect(document.getElementsByClassName('flip').length).toEqual(0)
		
		clickSimulator(5) //flip another card at index 5
		expect(document.getElementsByClassName('flip').length).toEqual(1)
	})
})