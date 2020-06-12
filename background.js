// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
      case "get-chart":
          colorDivs();
      break;
  }
  return true;
});

// // listening for an event / long-lived connections
// // coming from devtools
// chrome.extension.onConnect.addListener(function (port) {
//   port.onMessage.addListener(function (message) {
//        switch(port.name) {
//     case "color-divs-port":
//       colorDivs();
//     break;
//   }
//   });
// });

// send a message to the content script
var colorDivs = function() {
chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.sendMessage(tab.id, {type: "get-chart"});
  // chrome.browserAction.setBadgeText({text: "text!"});
});
}