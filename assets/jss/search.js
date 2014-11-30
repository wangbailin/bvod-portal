define(function(require){
	require("jquery");
	require("search-history");

        $(".footer").stickyFooter();
    $(function(){
		var IsPC = function()  {
			var userAgentInfo = navigator.userAgent;  
			var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
			var flag = true;  
			for (var v = 0; v < Agents.length; v++) {
		   		if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false; 
					break;
				}  
			}  
			return flag;  
		}
		if(!IsPC()) {
			$(".footer").addClass("container");
		}
	
	});
	
});
