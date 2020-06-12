window.onload = function() {
	document.getElementById("new").onclick = function() {
		chrome.extension.sendMessage({
	        type: "get-chart"
	    });
	}
}