// chrome.tabs.executeScript({
//     file: 'parser.js'
// }, (results) => {
//     console.log('Popup script:')
//     console.log(results);
// });

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         console.log(sender.tab ?
//             "from a content script:" + sender.tab.url :
//             "from the extension");
//         if (request.greeting == "hello")
//             sendResponse({
//                 farewell: "goodbye"
//             });
//     });


chrome.runtime.onMessage.addListener(
    function (message, callback) {
        if (message == 'runContentScript') {
            chrome.tabs.executeScript({
                file: 'parser.js'
            });
        }
    });