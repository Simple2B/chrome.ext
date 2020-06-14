'use strict'

function displayData() {
  chrome.runtime.sendMessage({
      type: "get-data"
    },
    function (response) {
      let chartData = response.data;
      if (chartData) {
        chartData = JSON.parse(chartData);
        let ul = document.getElementById('charts');
        ul.innerHTML = "";  // remove children
        Object.keys(chartData).forEach(function (k) {
          console.log(k + ' - ' + chartData[k]);
          let li = document.createElement('li');
          let a = document.createElement('a');
          a.innerHTML = `${k}`;
          let data = new Blob([JSON.stringify(chartData[k])], {type: 'text/plain'});
          let url = window.URL.createObjectURL(data);
          a.href = url;
          a.download=`${k}.json`;
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