Simple jQuery Defer
================================================
* Brian Martin
* https://twitter.com/bmarti44
* BSD License
* 2013-6-23

What is it?
-----------
This is a simple jQuery Plugin for replicating Underscore.js's _.defer functionality (with a couple of extra parameters).

Note: for more complicated use cases with deferred you'll probably want to use jQuery's deferred API http://api.jquery.com/category/deferred-object/

Example
-------

		$.defer({
		    'async': deferTest, /* the function to execute asynchronously */
		    'async_arguments': ['1', '2', '3'], /* the arguments to pass to the asynchronous function, formatted as an array */ 
		    'callback': deferComplete, /* the function you'd like to call after the asynchronous function completes */
		    'callback_arguments': ['1', '2', '3'] /* the arguments you'd like to pass to your callback */
		});

http://jsfiddle.net/rCwen/4/
 