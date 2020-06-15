'use strict'

let data = require('./sample.json');

function makeCSV(charts, delimiter=', ') {
  let retVal = '';
  let header = 'x';
  charts.forEach(element => {
    header += delimiter;
    header += element.name;
  });
  console.log(header);
  retVal += header;
  let col_x = [];
  charts[0].data.forEach(element => {
    col_x.push(element.x);
  });
  let columns = [];
  charts.forEach(chart => {
    let column = [];
    chart.data.forEach(element => {
      column.push(element.y);
    });
    columns.push(column);
  });
  for (let i = 0; i < col_x.length; i++) {
    let row = '' + col_x[i];
    columns.forEach(column => {
      row += delimiter;
      row += '' + column[i];
    });
    console.log(row);
    retVal += "\n";
    retVal += row;
  }
  return retVal;
}

console.log(data);
Object.keys(data).forEach(k => {
  makeCSV(data[k]);
});