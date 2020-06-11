// function GenCsv() {
//     let chart = {};
//     Highcharts.charts.forEach(c => {
//         if (c) {
//             chart[c.renderTo.id] = c.series.map(s => {
//                 return {
//                     name: s.name,
//                     data: s.data.map(v => {
//                         return {
//                             x: v.x,
//                             y: v.y
//                         }
//                     })
//                 }
//             })
//         }
//     });
//     console.log(chart);
// }

if (typeof Highcharts !== 'undefined') {
    console.log('Highcharts found!!!');
} else {
    console.warn('Highcharts not found');
}