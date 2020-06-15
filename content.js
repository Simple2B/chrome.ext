'use strict'

// console.log('content!');

function injectScript(scriptText) {
    let body = document.querySelector('body');
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.innerHTML = scriptText;
    body.appendChild(script);

}

const scriptText = `'use strict'

let data = {};
if (typeof Highcharts !== 'undefined') {
    console.log('Highcharts found!!!');
    setTimeout(()=>{
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
        // data = JSON.stringify(high_chart);
        data = high_chart;
        chrome.runtime.sendMessage('${chrome.runtime.id}', {type: 'data', data: data});
        // console.log(data);
        console.log('Data sent');
    }, 3000);

    } else {
    console.log('Highcharts not found');
}`;

injectScript(scriptText, 'body');
