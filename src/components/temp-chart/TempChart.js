import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let temp = [];
let timer;
let xAxis = temp.length + 1;
let yAxis = 15;

class TempChart extends Component {
  constructor() {
    super();
    this.updateTemp = this.updateTemp.bind(this);
  }

  componentDidMount() {
    this.initialTemp();
    timer = setInterval(this.updateTemp, 10000);
  }
  componentWillUnmount() {
    clearInterval(timer);
  }

  updateTemp() {
    yAxis = Math.floor(Math.random() * 25.5 + 20.1);
    temp.push({ x: xAxis, y: yAxis });
    xAxis++;
    if (temp.length > 50) {
      temp.shift();
    }
    this.chart.render();
  }

  initialTemp() {
    for (let i = 0; i < 50; i++) {
      this.updateTemp();
    }
  }

  render() {
    const options = {
      theme: 'light1',
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: 'Real Time Temperature Monitoring'
      },
      axisY: {
        includeZero: false
      },
      data: [
        {
          type: 'line',
          dataPoints: temp
        }
      ]
    };

    return (
      <div className='my-5'>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default TempChart;
