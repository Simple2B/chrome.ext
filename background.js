'use strict'

let chartData = {};
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
      case "data":
        chartData = request.data;
      break;
  }
  return true;
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch(request.type) {
      case "get-data":
        sendResponse({data: chartData});
      break;
    }
  });
