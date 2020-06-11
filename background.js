document.getElementById("new").addEventListener('click', () => {
  console.log("Start from event listener");
  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.runtime.sendMessage({
    message: "runContentScript"
  });

});