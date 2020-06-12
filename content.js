chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.type) {
        case "get-chart":
            if (typeof Highcharts !== 'undefined') {
                alert('Highcharts found!!!');
            } else {
                alert('Highcharts not found');
            }
            break;
    }
});