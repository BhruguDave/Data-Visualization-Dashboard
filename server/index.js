const PORT = 4000;

const cors = require('cors');
const express = require("express");
const {MongoClient} = require('mongodb');
const router = express.Router();
const assert = require('assert');
const { mongo } = require("mongoose");

const url = "mongodb://localhost:27017/mobility";
// COMMENT
const app = express();

app.use(cors());
app.use("/", router);
app.listen(PORT, function () {
    console.log("Server running on port: " + PORT);
});


router.get('/get-data/hostel/:que', function (req, res) {
    
    MongoClient.connect(url, async function (err, client) {
        assert.equal(null, err);

        var unix = parseInt(req.params.que.split('&')[0]);
        var utime = parseInt(req.params.que.split('&')[1]);
        
        var ans = [];

        //Hostel
        var hquery = {$or: [{"Wifi Id": "\"Hostel\""}, {"Wifi Id": "\"Hostel_5GHZ\""}], "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var hcursor = await client.db().collection("mobility").find(hquery).count();
        ans.push({"hostel": hcursor});

        //Event
        var equery = {$or: [{"Wifi Id": "\"Event\""}, {"Wifi Id": "\"Event_1\""}], "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var ecursor = await client.db().collection("mobility").find(equery).count();
        ans.push({"event": ecursor});

        //Canteen
        var cquery = {"Wifi Id":"\"Canteen\"", "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var ccursor = await client.db().collection("mobility").find(cquery).count();
        ans.push({"canteen": ccursor});

        //RC - DARCFF
        var rcquery = {"Wifi Id":"\"DARCFF\"", "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var rccursor = await client.db().collection("mobility").find(rcquery).count();
        ans.push({"RC": rccursor});

        //MSC-IT - CEP
        var cepquery = {"Wifi Id":"\"MSC-IT\"", "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var cepcursor = await client.db().collection("mobility").find(cepquery).count();
        ans.push({"CEP": cepcursor});

        //Faculty - FB
        var fcquery = {"Wifi Id":"\"Faculty\"", "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var fccursor = await client.db().collection("mobility").find(fcquery).count();
        ans.push({"Faculty": fccursor});

        //LAB, Lab-204, Lab201-202
        var lquery = {$or: [{"Wifi Id": "\"LAB\""}, {"Wifi Id": "\"Lab-204\""}, {"Wifi Id": "\"Lab201-202\""}], "Date": unix, "time": {$gte: utime - 600, $lte: utime + 600}};
        var lcursor = await client.db().collection("mobility").find(lquery).count();
        ans.push({"Lab": lcursor});

        // Send the array
        res.send(ans);
        
    });
});

