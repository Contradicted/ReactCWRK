let express = require("express")
let CovidData = require('./booksSchema')
let mongodbConnected = require('./MongodbConnect')
const cors = require('cors');

let app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors());
console.log("BOOKS", CovidData)

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

app.get('/allbooks', function (req, res) {
    CovidData.find(function (err, allbook) {
        if (err) {
            console.log(err);
        } else {

            res.json(allbook);
        }
    });
});

app.get('/getbook/:id', function (req, res) {
    let id = req.params.id;
    CovidData.findById(id, function (err, book) {
        console.log("found book" + book)
        res.json(book);
    });
});
app.post('/addbooks', function (req, res) {
    console.log("Ref", req.body)
    let newbook = new CovidData(req.body);
    console.log("newbook->", newbook)
    newbook.save()
        .then(todo => {
            res.status(200).json({ 'books': 'book added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new book failed');
        });
})
app.post('/updatebook/:id', function (req, res) {
    let id = req.params.id;
    let updatedbook = new CovidData(req.body);
    console.log("update id", id, "newbook->", updatedbook)

    CovidData.findByIdAndUpdate(id,
        {
            booktitle: updatedbook.booktitle,
            PubYear: updatedbook.PubYear,
            author: updatedbook.author,
            Topic: updatedbook.Topic,
            state: updatedbook.state,
            deaths: updatedbook.deaths,
            cases: updatedbook.cases,
            date: updatedbook.date,
            formate: updatedbook.formate
        }
        ,
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.status(200).json({ 'books': 'book updated successfully' });
            }
        }


    )

});

app.post('/deleteBook/:id', function (req, res) {
    let id = req.params.id;

    console.log("deleting")
    CovidData.findByIdAndDelete(id, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            res.status(200).send('Book Deleted');
        }
    }


    )

});


app.listen(5000, function () {
    console.log("Server is running on the port 5000")
})