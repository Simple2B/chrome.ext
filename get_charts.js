'use strict'

let data = '{}';
if (typeof Highcharts !== 'undefined') {
    console.log('Highcharts found!!!');
    let high_chart = {};
    Highcharts.charts.forEach(c => {
        if (c) {
            high_chart[c.renderTo.id] = c.series.map(s => {
                return {
                    name: s.name,
                    data: s.data.map(v => {
                        return {
                            x: v.x,
                            y: v.y
                        }
                    })
                }
            })
        }
    });
    data = JSON.stringify(high_chart)
    chrome.runtime.sendMessage('cmmbomdfpmdlpackemapjmhpjopnbhdf', {type: 'data', data: data});
    console.log(data);
    } else {
    console.log('Highcharts not found');
}
