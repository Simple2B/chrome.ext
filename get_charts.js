if (typeof window.Highcharts !== 'undefined') {
    alert('Highcharts found!!!');
} else {
    alert('Highcharts not found');
}

let high_chart = {};
window.Highcharts.charts.forEach(c => {
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
let arr = JSON.stringify(high_chart)
document.body.innerHTML += `<div style="display:none;" id="my_high_chart">${arr}</div>`;
