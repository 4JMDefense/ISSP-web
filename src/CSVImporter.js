import React, { useState } from 'react';

import Papa from 'papaparse';

function CSVImporter() {
    const [csvData, setCsvData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        Papa.parse(file, {
            complete: (result) => {
                setCsvData(result.data);
            }
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <table>
                <thead>
                    <tr>
                        {csvData[0] && csvData[0].map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {csvData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CSVImporter;

