var casper = require('casper').create();

casper.start('http://localhost:9292/', function() {
    this.echo(this.getTitle());
});

casper.takePics = function() {
	var imagename = casper.getElementAttribute('.nuggetimage','src')
       	var filename = imagename.substring(imagename.lastIndexOf('/')+1)
       	var slug = filename.split(".")[0];
       	var shotname = slug + "-nugget.png"
		console.log('clicked ok, source location is ' + slug);
   
    	casper.captureSelector(shotname, '.inline-image-panel');
};

casper.advancePage = function() {
	this.click('input[type="button"]');
    this.wait(1000, function() { this.takePics() });
};



casper.then(function() {
	for (i=0;i<6;i++){
		this.wait(4000, function() { this.advancePage() });
	};
});




casper.run();