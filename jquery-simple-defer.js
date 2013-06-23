/*jslint devel: false, browser: true, maxerr: 50, indent: 4*/
/*global $: false, jQuery: false, console: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

(function( $ ) {
	'use strict';
	
    $.defer = function( options ) {
	    
	    if (typeof(options) === 'undefined') {
			return false;
	    }
	    
	    if (typeof(options.execute) === 'function') {
	        setTimeout(function() {
	            if ($.isArray(options.execute_arguments)) {
	                options.execute.apply(options.execute, options.execute_arguments);
	            } else {
	                options.execute();
	            }
	        }, 0);
	    }
	    
	    if (typeof(options.callback) !== 'undefined') {
	        setTimeout(function() {
	            if (typeof(options.callback_arguments) !== 'undefined') {
	                options.callback.apply(options.callback, options.callback_arguments);
	            } else {
	                options.callback();
	            }
	        }, 0);
	    }
	    
	    return true;
	    
    };
 
}( jQuery ));