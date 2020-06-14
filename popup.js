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
          li.innerHTML = `<a href="#">${k}</a>`;
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