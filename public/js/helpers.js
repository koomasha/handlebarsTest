var register = function(Handlebars) {
    
	var helpers = {
		// put all of your helpers inside this object

	};
    
	if (Handlebars && typeof Handlebars.registerHelper === 'function') {
		for (var prop in helpers) {
			Handlebars.registerHelper(prop, helpers[prop]);
		}
	} else {
		return helpers;
	}
    
};
    
// client
if (typeof window !== 'undefined') {
	register(Handlebars);
}
// server
else {
	module.exports.register = register;
	module.exports.helpers = register(null);
}