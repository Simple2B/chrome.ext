'use strict'

function dateFromTimestamp(ts) {
  let unix_timestamp = +ts;
  if (('' + ts).length < 13) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    unix_timestamp *= 1000;
  }
  // Create a new JavaScript Date object based on the timestamp
  let date = new Date(unix_timestamp);
  const ye = new Intl.DateTimeFormat('en', {
    year: 'numeric'
  }).format(date);
  const mo = new Intl.DateTimeFormat('en', {
    month: '2-digit'
  }).format(date);
  const da = new Intl.DateTimeFormat('en', {
    day: '2-digit'
  }).format(date);

  return `${ye}-${mo}-${da}`;
}

function makeCSV(charts, delimiter = ', ') {
  let retVal = '';
  let header = 'timestamp';
  header += delimiter;
  header += 'date';
  charts.forEach(element => {
    header += delimiter;
    header += element.name;
  });
  // console.log(header);
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
    row += delimiter;
    row += dateFromTimestamp(col_x[i]);
    columns.forEach(column => {
      row += delimiter;
      row += '' + column[i];
    });
    // console.log(row);
    retVal += "\n";
    retVal += row;
  }
  return retVal;
}

function download(filename, chart) {
  let a = document.createElement('a');

  let data = new Blob([makeCSV(chart)], {
    type: 'text/csv'
  });
  let url = window.URL.createObjectURL(data);
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function displayData() {
  chrome.runtime.sendMessage({
      type: "get-data"
    },
    function (response) {
      let chartData = response.data;
      if (chartData) {
        // chartData = JSON.parse(chartData);
        let ul = document.getElementById('charts');
        ul.innerHTML = `<p>Total: ${Object.keys(chartData).length}</p>`; // remove children
        Object.keys(chartData).forEach(function (k) {
          console.log(k + ' - ' + chartData[k]);
          let li = document.createElement('li');
          let a = document.createElement('a');
          a.innerHTML = `${k}`;
          // let data = new Blob([makeCSV(chartData[k])], {type: 'text/csv'});
          // let url = window.URL.createObjectURL(data);
          // a.href = url;
          a.href = '';
          a.addEventListener("click", function () {
            console.log('download chart: ' + k);
            download(`${k}.csv`, chartData[k]);
          }, false);
          // a.download=`${k}.csv`;
          li.appendChild(a);
          ul.appendChild(li);
        });
      }
    });
}

window.onload = function () {
  document.getElementById("load-data").onclick = () => {
    displayData();
  };
  displayData();
}