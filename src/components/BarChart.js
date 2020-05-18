import React, { Component } from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
  } from 'react-vis';

class BarChart extends Component {
    barWidth(){
        if(this.props.data.length === 2){
            return 0.5
        }else if(this.props.data.length === 3){
            return 0.6
        }
    }

    render() {
        return <div id="chart-container">
            <XYPlot
                xType="ordinal" 
                yDomain={[0, 10]}
                width={(window.innerWidth/100)*this.props.width} 
                height={(window.innerHeight/100)*this.props.height} 
                xDistance={200}>
                <XAxis  style={{
                  line: {stroke: 'rgb(224, 224, 224)'},
                  ticks: {stroke: 'rgb(224, 224, 224)'},
                  text: {stroke: 'none', fill: 'rgb(224, 224, 224)', fontWeight: 700}
                }}/>
                <YAxis style={{
                  line: {stroke: 'rgb(224, 224, 224)'},
                  ticks: {stroke: 'rgb(224, 224, 224)'},
                  text: {stroke: 'none', fill: 'rgb(224, 224, 224)', fontWeight: 700}
                }}/>
                <VerticalBarSeries barWidth={this.barWidth()} data={this.props.data} color='rgb(224, 224, 224)'/>
              {/* <LabelSeries data={labelData} getLabel={d => d.x} /> */}
            </XYPlot>
        </div>
    }
}

export default BarChart;