'use strict'

console.log('content!');

function injectScript(file) {
    let body = document.querySelector('body');
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file);
    body.appendChild(script);
}

injectScript(chrome.extension.getURL('get_charts.js'), 'body');


chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    alert('msg in content');
    switch (message.type) {
        case "data":
            alert('data!');
        break;
    }
});
