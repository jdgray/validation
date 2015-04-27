var validation = {

	isInt: function(value) {
	  return !isNaN(value) && 
	         parseInt(Number(value)) == value && 
	         !isNaN(parseInt(value, 10));
	},

	isString: function(value) {
		return !(/[\\/&;]/.test(value));
	},

	isNumber: function(value){
		return !isNaN(parseFloat(value)) && isFinite(n);
	},

	//
	//Standard email address 
	//
	validateEmail: function(email) { 
	    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}, 
	
	validateUrl: function(url){
		var expression = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
		var regex = new RegExp(expression);
		if (url.match(regex) ){
			return url
		} else {
			return 'http://' + url;
		}
	},
	
	validatePrice: function(price) {
      return /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(price);
    },

    //
    //Supports alphabets and numbers no special characters except underscore('_') min 3 and max 20 characters. 
    //
    validateUsername: function(price) {
      return /^[A-Za-z0-9_]{1,20}$/.test(price);
    },

    //
    //Password supports special characters and here min length 6 max 20 charters.
    //
    validateUsername: function(price) {
      return /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/.test(price);
    },


}

module.exports = validation;