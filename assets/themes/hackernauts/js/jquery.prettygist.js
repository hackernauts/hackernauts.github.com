/*
 * pretty-gist
 * http://www.joepettersson.com/pretty-gist/
 *
 * Copyright (c) 2012 Joe Pettersson
 * Licensed under the MIT, GPL licenses.
 */
;(function ($, window, document, undefined) {
	"use strict";
	// Setup our defaults, there are only three options for the plugin, set out below (and in more details in the README)
	var pluginName = 'prettyGist',
		defaults = {
			showHeader: true,
			extendedHeader: true,
			showFooter: true
		};

	// The function that is called on instantiation
	function prettyGist (element, options) {
		//Set our element to be within the scope of the prototypes
		this.element = element;
		// Use jQuery's extend method to combine the default options and any user specified ones, giving the user specified preference
		this.options = $.extend( {}, defaults, options);
		// Instantiate our init function to get the ball rolling
		this.init();
	}

	prettyGist.prototype = {
		
		init: function() {
			// In order: extract the unique ID of the embedded gist; add in the placeholder; get data about the gist and build our layout
			var gist = $(this.element).attr("id").substring(5), options = this.options, el = this.element,
				placeholder = this.placeholder(el, gist),
				go = this.model(gist, function(data){
					// Swap out the placeholder for a constructed pretty Gist
					$("#placeholder-for-" + gist).replaceWith(prettyGist.prototype.layout(data, el, options));
					// Only call our bind function if we're showing the footer, as otherwise there's nothing to bind
					if (options.showFooter === true) {
						prettyGist.prototype.bind(data.data.id);
					}
					// Check if the highlight.js object is defined, if it is setup syntax highlighting
					if (typeof hljs !== "undefined"){
						hljs.initHighlightingOnLoad();
						// Add a custom class to the code-container to override certain default styles
						$(".pretty-gist").addClass("hljs");
					}
				});
		}, 

		placeholder: function (el, gist) {
			// Construct our placeholder and insert is after the normal Gist, which has already been hidden by CSS
			var markup = '<div class="pretty-gist-placeholder" id="placeholder-for-' + gist +'"></div>';
			$(markup).insertAfter(el);
		},
		
		model: function (gist, callback) {
			// Get data for the gist that is being embedded
			$.getJSON('https://api.github.com/gists/' + gist + '?callback=?', function(data){
				callback(data);
			});
		},

		layout: function (data, el, options) {
			// Construct our pretty gist
			var markup = '';
				markup += '<div class="pretty-gist" id="pretty-gist-' + data.data.id + '">';
				// Check if we're building an header
				if (options.showHeader === true) {
					// Build our header
					markup += '<div class="header clear">';
					// Check if we're building our extended header or not
					if (options.extendedHeader === true) {
						markup += '<div class="logo"><a href="https://github.com/">Github</a></div>';
						markup += '<div class="user"><a href="https://github.com/' + data.data.user.login + '" class="github-user">';
						// Check if the user who's gist this is has a custom avater, if not show the default github one
						if (typeof data.data.user.avatar_url !== "undefined" && data.data.user.avatar_url.length > 0){
							markup += '<img src="' + data.data.user.avatar_url + '" alt="Avatar" width="34px" height="34px" />';
						} else {
							markup += '<img src="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png" alt="Avatar" width="34px" height="34px" />';
						}
						markup += '</div>';
						markup += '<div class="github-user-data">';
						markup += '<h2><a href="https://gist.github.com/gists/' + data.data.id + '">' + data.data.description + '</a></h2>';
						markup += '<h3><a href="https://github.com/' + data.data.user.login + '">' + data.data.user.login + '</a></h3>';
						markup += '</div>';
					} else {
						// build our smaller header if no extended header being shown
						markup += '<h2 class="single"><a href="https://gist.github.com/gists/' + data.data.id + '">' + data.data.description + '</a></h2>';
					}
					markup += '</div>';
				}
				// Build code pane by grabbing each line of the default embedded gist and creating list items in an ordered list to get line numbers 
				markup += '<div class="code-container"><ol>';
				$.each($(el).find(".line"), function(i){
					markup += '<li class="pretty-line" id="pretty-line-' + i + '"><pre><code>' + $(this).html() + '</pre></code></li>';
				});
				markup += '</ol></div>';
				// Check if we want a footer, if we do: build it!
				if (options.showFooter === true) {
					markup += '<div class="footer clear">';
					markup += '<a href="https://gist.github.com/gists/' + data.data.id + '/download" class="button left">Download Gist</a>';
					markup += '<a href="#" class="button middle show-embed" data-embed="https://gist.github.com/' + data.data.id + '.js">Embed Gist</a>';
					markup += '<a href="#" class="button right show-clone-url" data-clone-url="git://gist.github.com/' + data.data.id + '.git">Clone Gist</a>';
					markup += '<a href="#" class="button single show-plugin-info">Info</a>';
					markup += '</div>';
				}
				markup += '</div>';
			return markup;
		},

		bind: function (gist_id) {
			// Bind our click events if we're showing a footer
			// Show embed code if button clicked
			$("#pretty-gist-" + gist_id + " .show-embed").click(function(event){
				event.preventDefault();
				var data = '&lt;script src=&quot;' + $(this).attr("data-embed") + '&quot;>&lt;/script>',
					title = 'Embed code:';
				prettyGist.prototype.modal(gist_id, title, data);
			});
			// Show clone URL if button clicked
			$("#pretty-gist-" + gist_id + " .show-clone-url").click(function(event){
				event.preventDefault();
				var data = $(this).attr("data-clone-url"),
					title = 'Clone url:';
				prettyGist.prototype.modal(gist_id, title, data);
			});
			// Show plugin info if button clicked
			$("#pretty-gist-" + gist_id + " .show-plugin-info").click(function(event){
				event.preventDefault();
				var title = 'Pretty Gist by <a href="http://www.joepettersson.com/pretty-gist/">Joe Pettersson</a><br />A plugin to make prettier and more functional embedded Github Gists';
				prettyGist.prototype.modal(gist_id, title);
			});
		},

		// The utility function used if we're showing a modal
		modal: function (gist_id, title, data) {
			// Close any open modals
			$("#pretty-gist-" + gist_id).find(".gist-modal").remove();
			var markup = '',
				width = $("#pretty-gist-" + gist_id).outerWidth() - 2,
				padding = ($("#pretty-gist-" + gist_id + " .code-container").outerHeight() / 2) - 23;

				markup += '<div class="gist-modal" style="width: ' + width + 'px; padding: ' + padding + 'px 0px;">';
				markup += '<p>' + title + '</p>';
				if (typeof data !== "undefined") {
					markup += '<input type="text" value="' + data + '" class="gist-input" name="embed-url" />';
				}
				markup += '</div>';
			$(markup).insertBefore("#pretty-gist-" + gist_id + " .code-container");
			// Remove modal if button clicked
			$("#pretty-gist-" + gist_id + " .gist-modal").click(function(event){
				$("#pretty-gist-" + gist_id).find(".gist-modal").remove();
			});			
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
				new prettyGist( this, options ));
			}
		});
	}

})( jQuery, window, document );
