// import dependencies
import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// initiate the chart variable
let temp = [];
let timer;
let xAxis = temp.length;
let yAxis = 0;

class TempChart extends Component {
  // invoke the contructor component and bind the variable data to the chart
  constructor() {
    super();
    this.updateTemp = this.updateTemp.bind(this);
  }

  // set the interval to get the chart continuously update after 10s when component mounted
  componentDidMount() {
    this.initialTemp();
    timer = setInterval(this.updateTemp, 10000);
  }
  // clear teh interval when component unmount
  componentWillUnmount() {
    clearInterval(timer);
  }

  // update chart data every 10s
  updateTemp() {
    yAxis = Math.round((Math.random() * 15.5 + 10.5) * 100) / 100;
    temp.push({ x: xAxis, y: yAxis });
    xAxis++;
    if (temp.length > 50) {
      temp.shift();
    }
    this.chart.render();
  }

  // fill the chart data in fist chart loaded
  initialTemp() {
    for (let i = 0; i < 50; i++) {
      this.updateTemp();
    }
  }

  // render the chart view
  render() {
    const options = {
      theme: 'light1',
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: 'Real Time Temperature Series'
      },
      axisY: {
        includeZero: false,
        interval: 2.5
      },
      axisX: {
        interval: 2
      },
      data: [
        {
          type: 'line',
          dataPoints: temp,
          lineColor: 'red'
        }
      ]
    };

    return (
      <div className='my-5'>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
      </div>
    );
  }
}

export default TempChart;
