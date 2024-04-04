import { useState, useEffect } from 'react';
import "./App.css";
import LineChart from "./components/LineChart";
import { UserData } from "./getData";

function findHighestValues(data) {
  const highestValues = {};
  data.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (!(key in highestValues) || obj[key] > highestValues[key]) {
        highestValues[key] = obj[key];
      }
    });
  });
  return highestValues;
}

const chartsInfo = [
  { key: 'altitude', label: 'Flight Data Altitude' },
  { key: 'xaccel', label: 'Flight Data X Acceleration' },
  { key: 'yaccel', label: 'Flight Data Y Acceleration' },
  { key: 'zaccel', label: 'Flight Data Z Acceleration' },
  { key: 'elevator', label: 'Flight Data Elevator' },
  { key: 'aileron', label: 'Flight Data Aileron' },
  { key: 'rudder', label: 'Flight Data Rudder' }
];

function App() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const initialChartData = chartsInfo.reduce((acc, { key, label }) => {
      acc[key] = {
        labels: UserData.map(data => data.time),
        datasets: [{
          label,
          data: UserData.map(data => data[key]),
          backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
          borderColor: "black",
          borderWidth: 2,
        }]
      };
      return acc;
    }, {});
    setChartData(initialChartData);
  }, []);

  const highestValues = findHighestValues(UserData);

  return (
    <div className="App">
      <h1>Flight Data Charts</h1>
      <div>
        {Object.entries(highestValues).map(([key, value]) => (
          <p key={key}>Max {key}: {value}{['elevator', 'aileron', 'rudder'].includes(key) ? '°' : ''}</p>
        ))}
      </div>
      {chartsInfo.map(({ key }) => chartData[key] && (
        <div key={key} style={{ width: 700 }}>
          <LineChart chartData={chartData[key]} />
        </div>
      ))}
    </div>
  );
}

export default App;

