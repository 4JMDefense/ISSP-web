import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";


function findHighestValues(data) {
  const highestValues = {};

  // Iterate over each object in the array
  data.forEach(obj => {
    // Iterate over each property in the object
    Object.keys(obj).forEach(key => {
      // Update highest value for each property
      if (!(key in highestValues) || obj[key] > highestValues[key]) {
        highestValues[key] = obj[key];
      }
    });
  });

  return highestValues;
}

  // contains all the values of the highest values
  const highestValues = findHighestValues(UserData);



function App() {

  const [altitudeData, setAltitudeData] = useState({
    
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data Altitude",
        data: UserData.map((data) => data.altitude),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
    
  });

  const [xaccelData, setXaccelData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data X Acceleration",
        data: UserData.map((data) => data.xaccel),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [yaccelData, setYaccelData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data Y Acceleration",
        data: UserData.map((data) => data.yaccel),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  const [zaccelData, setZaccelData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data Z Acceleration",
        data: UserData.map((data) => data.zaccel),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [elevatorData, setElevatoraccelData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data Elevator",
        data: UserData.map((data) => data.elevator),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [aileronData, setAileronaccelData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data Aileron",
        data: UserData.map((data) => data.aileron),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

    const [rudderData, setRudderData] = useState({
    labels: UserData.map((data) => data.time),
    datasets: [
      {
        label: "Flight Data Rudder",
        data: UserData.map((data) => data.rudder),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });



  return (
    <div className="App">
      <h1>Flight Data Charts</h1>

      <div>
        <p>Flight Duration: {highestValues.time}s</p>
        <p>Max Altitude:  {highestValues.altitude}</p>
        <p>Max xaccel:  {highestValues.xaccel}</p>
        <p>Max yaccel:  {highestValues.yaccel}</p>
        <p>Max zaccel:  {highestValues.zaccel}</p>
        <p>Max elevator:  {highestValues.elevator}°</p>
        <p>Max aileron: {highestValues.aileron}°</p>
        <p>Max rudder:  {highestValues.rudder}°</p>
      </div>


      <div style={{ width: 700 }}>
        <LineChart chartData={altitudeData} />
      </div>

      <div style={{ width: 700 }}>
        <LineChart chartData={xaccelData} /> 
      </div>
      
      <div style={{ width: 700 }}>
        <LineChart chartData={yaccelData} /> 
      </div>

      <div style={{ width: 700 }}>
        <LineChart chartData={zaccelData} /> 
      </div>

      <div style={{ width: 700 }}>
        <LineChart chartData={elevatorData} /> 
      </div>

      <div style={{ width: 700 }}>
        <LineChart chartData={aileronData} /> 
      </div>

      <div style={{ width: 700 }}>
        <LineChart chartData={rudderData} /> 
      </div>

    </div>
  );
}

export default App;
