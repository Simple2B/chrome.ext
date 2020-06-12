function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.type) {
        case "get-chart":
            injectScript(chrome.extension.getURL('get_charts.js'), 'body');
        break;
    }
    console.log(document.getElementById('my_high_chart').innerHTML);
alert()

});
