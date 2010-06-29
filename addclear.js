// Author: Stephen Korecky
// Website: http://stephenkorecky.com
// Plugin Website: http://github.com/skorecky/addclear

(function($){  
	$.fn.extend({   
		addClear: function(options) {  
			var options =  $.extend({  
				closeImage: "clear.png"
				}, options);

				$(this).wrap("<span style='position:relative;' class='add-clear-span'>");
				$(".add-clear-span").append("<a href='#clear'>clear</a>");
				$("a[href='#clear']").css({
					'background' : 'transparent url('+options.closeImage+') 0 0 no-repeat', 
					'display' : 'none',
					'height' : '16px',
					'overflow' : 'hidden',
					'position' : 'absolute',
					'right' : '4px',
					'text-indent' : '-9999px',
					'top' : '0',
					'width' : '16px'
					}, this);

					$(this).keyup(function() {
						if($(this).val().length >= 1) {
							$(this).siblings("a[href='#clear']").show();
						} else {
							$(this).siblings("a[href='#clear']").hide();
						}
					});

					$("a[href='#clear']").click(function(){
						$(this).siblings("input").val("");
						$(this).hide();
						$(this).siblings("input").focus();
						return false;
					});
					return this; 
				}  
			});  
			})(jQuery);