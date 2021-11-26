import React, { useEffect, useState, useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { Line,defaults } from 'react-chartjs-2'
import {userData} from './Dashboard'

// defaults.global.defaultColor = 'violet';
/* defaults.global.defaultFontColor = 'red';
defaults.global.defaultFontFamily = 'Arial'; */

function DisplayYearlyChart() {
    /* 
        We can also set color with defaults
        ref - https://github.com/reactchartjs/react-chartjs-2/issues/122
        defaults.color = 'green'
     */
    const {data, labels, year} = useContext(userData);
    console.log(year);
    const [datas,setDatas] = useState({})
    useEffect(() => {
         setDatas({
                
                labels: [...labels],
                datasets: [
                {
                    label: `URL Creation ${year}`,
                    data: [...data],
                    borderColor: ['rgb(223, 60, 182)'],
                    backgroundColor: ['rgb(223, 60, 182)'],
                    pointBackgroundColor: 'rgb(92, 63, 89)',
                    pointBorderColor: 'rgb(92, 63, 89)' 
                }]
        })
        return () => {
            <></>
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const options = {
        responsive : true,
        maintainAspectRatio : false,
        legend: {
             labels: {
                  fontColor: 'orange'
                 }
              },
        title: {
            display: true,
            fontColor: 'green',
            text: 'Yearly Data of URL SHortner'
        }     ,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'green'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'green'
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
        } 

    }
   
    return <Line data={datas} options={options} />
}

export default DisplayYearlyChart