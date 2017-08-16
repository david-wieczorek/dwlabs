import React, { Component } from 'react';
import Chart from 'chart.js';

class Linechart extends Component {
  componentDidMount() {
    this.chart();
  }
  chart() {
    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
          {
            label: 'React',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: 'rgba(32,106,252,0.7)'
          },
          {
            label: 'Angular',
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: 'rgba(255,7,11,0.7)'
          }
        ]
      }
    });
  }

  render() {
    return <canvas id="myChart" width="400" height="200" />;
  }
}

export default Linechart;
