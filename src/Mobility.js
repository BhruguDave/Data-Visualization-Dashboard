import { useState } from "react";
import HeatMap from "./HeatMap";


const Mobility = () => {

    const [date, setDate] = useState("2018-10-2");
    const [time, setTime] = useState("00:00");
    const [weight, setWeight] = useState();

    const handleSubmit = (e) => {

        e.preventDefault();
        var unix = new Date(date).getTime();
        var utime = parseInt(time.split(":")[0])*3600 + parseInt(time.split(":")[1])*60;
        
        var query = {"Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};

        console.log(query);


        fetch("http://localhost:4000/get-data/hostel/" + unix + "&" + utime, {
            method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setWeight(data);
        });
    }

    return ( 
        <div className="mobility">
            <h2>Heatmap Parameters</h2>
            <form onSubmit={handleSubmit}>
                <label>Date:</label>
                <input 
                    type="date"
                    min="2018-10-2"
                    max=""
                    value = { date }
                    required
                    onChange={(e) => setDate(e.target.value)}
                />
                <label>Time:</label>
                <input 
                    type="time"
                    min="00:00"
                    max="23:59"
                    value = { time } 
                    required
                    onChange={(e) => setTime(e.target.value)}
                />
                <button>Plot</button>
            </form>
            {weight && <HeatMap weights={weight}/>}
        </div> 
    );
}
 
export default Mobility;