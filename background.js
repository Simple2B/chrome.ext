// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
      case "get-chart":
          colorDivs();
      // case "hello":
      //   console.dir(request.data);
      break;
  }
  return true;
});
// send a message to the content script
let colorDivs = function() {
chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.sendMessage(tab.id, {type: "get-chart"});
  // chrome.browserAction.setBadgeText({text: "text!"});
});
}
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// })