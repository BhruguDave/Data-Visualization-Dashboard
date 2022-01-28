import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Bar } from 'react-chartjs-2';

const Conversation = () => {

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
        Papa.parse('/daiict_data_hist_convo.csv', {
            delimiter: ",",
            download: true,
            header: false,
            complete: data => {
                let fn = (ploter) => {const data = {
                        labels: ploter[0],
                        datasets: [{
                                label: 'Telephonic Conversation',
                                data: ploter[1],
                                fill: true,
                                borderColor: 'rgb(75, 192, 192)',
                                borderWidth: 2,
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
        <div className="convo">
            <h2>Telephonic Conversation Histogram</h2>
            {ploter && <Bar height={900} width={1600} data={ploter} options={options}/>}
            <p id="tel_xlabel"> Number of Hours </p>
            <p id="tel_ylabel"> Number of Students </p>
        </div> 
    );
}
 
export default Conversation;