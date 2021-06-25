import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";

function LineGraph(props) {
    const [data, setData] = useState({})
    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    const buildChartData = (data, casesTypes='cases') => {
        const chartData = [];
        let lastDataPoint;

        data[casesTypes].cases.forEach(date => {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesTypes][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesTypes][date];
        })
        return chartData;
    }

    return (
        <div>
            <h1>This Is Graph</h1>
            {/*<Line data/>*/}
        </div>
    );
}

export default LineGraph;