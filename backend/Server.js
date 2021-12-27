let express = require("express")
let CovidData = require('./CovidSchema')
let mongodbConnected = require('./MongodbConnect')
const cors = require('cors');

let app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors());
console.log("DATA", CovidData)

app.get('/', function (req, res) {
    console.log("this is default")
})

app.get('/about', function (req, res) {

    res.send("mongodb express  React and mongoose app,React runs in another application")
    CovidData.countDocuments().exec()
        .then(count => {

            console.log("Total documents Count before addition :", count)


        }).catch(err => {
            console.error(err)
        })

})

app.get('/alldata', function (req, res) {
    CovidData.find(function (err, alldata) {
        if (err) {
            console.log(err);
        } else {
            res.json(alldata);
        }
    });
});

app.get('/getdata/:id', function (req, res) {
    let id = req.params.id;
    CovidData.findById(id, function (err, data) {
        console.log("Data Found" + data)
        res.json(data);
    });
});

app.get('/getinfo', function (req, res) {

    // CovidData.find({ state: 'Georgia' }, { state: 'Georgia', cases: 1, deaths: 1, _id: 0 })
    //     .exec()
    //     .then(CovidData => {
    //         console.log(CovidData)
    //     })

    // CovidData.find(function (err, somedata) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(somedata);
    //     }
    // })
})

app.post('/adddata', function (req, res) {
    console.log("Ref", req.body)
    let newdata = new CovidData(req.body);
    console.log("New Data", newdata)
    newdata.save()
        .then(todo => {
            res.status(200).json({ 'Covid System': 'Data added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to add Data');
        });
})
app.post('/updatedata/:id', function (req, res) {
    let id = req.params.id;
    let updateddata = new CovidData(req.body);
    console.log("Update ID:", id, "\n", "New Data", updateddata)

    CovidData.findByIdAndUpdate(id,
        {
            state: updateddata.state,
            deaths: updateddata.deaths,
            cases: updateddata.cases,
            date: updateddata.date,
        }
        ,
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.status(200).json({ 'Covid System': 'Data added successfully' });
            }
        }
    )

});

app.post('/deleteData/:id', function (req, res) {
    let id = req.params.id;

    console.log("Deleting...")
    CovidData.findByIdAndDelete(id, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).send('Data has been deleted');
        }
    }
    )
});

app.listen(5000, function () {
    console.log("Server is running on PORT:5000")
})