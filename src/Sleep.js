import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Line } from 'react-chartjs-2';

const Sleep = () => {

    const [ploter, setPloter] = useState(null);

    const options = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 16,
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 16,
                    }
                }
            }
        }
    }

    useEffect(() => {
        Papa.parse('/daiict_data_sleep.csv', {
            delimiter: ",",
            download: true,
            header: false,
            complete: data => {
                let fn = (ploter) => {const data = {
                        labels: ploter[0],
                        datasets: [{
                                label: 'Sleeping Pattern',
                                data: ploter[3],
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            }]
                        };
                        return data;
                    }

                setPloter(fn(data.data));
            }
        });
    }, []);

    return ( 
        <div className="sleep">
            <h2>Sleeping Pattern Data</h2>
            {ploter && <Line height={900} width={1600} data={ploter} options={options}/>}
            <p id="xlabel"> Date </p>
            <p id="ylabel"> Number of Hours </p>
        </div> 
    );
}
 
export default Sleep;