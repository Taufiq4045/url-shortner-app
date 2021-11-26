import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    dataLine: {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      datasets: [
        {
          label: "URL Creation in Particular Month",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,3,0,0,0,0,0,0,0,0]
        }
      ]
    }
  }
  };

  render() {
    return (
      <>
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
        </MDBContainer>
        </>
    );
  }
}

export default ChartsPage;