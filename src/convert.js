const fs = require('fs');
const csv = require('csv-parser');

// Function to convert CSV data to the desired format
function convertToJSFormat(csvFilePath) {
    const UserData = [];
    let time = 0;

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            const userDataEntry = {
                Altitude: parseFloat(row.altitude),
                xaccel: parseFloat(row.xaccel),
                yaccel: parseFloat(row.yaccel),
                zaccel: parseFloat(row.zaccel),
                elevator: parseFloat(row.elevator),
                aileron: parseFloat(row.aileron),
                rudder: parseFloat(row.rudder),
                time: time
            };
            UserData.push(userDataEntry);
            time += 10; // Assuming each row represents 10 seconds
        })
        .on('end', () => {
            module.exports = UserData;
            console.log('UserData exported successfully.');
        });
}

// Call the function to convert CSV to JS format
const csvFilePath = 'run1.csv'; // Replace 'data.csv' with the path to your CSV file
convertToJSFormat(csvFilePath);
