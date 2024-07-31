// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const logger = require("morgan");
// const port = process.env.PORT || 3001;
// app.use(logger('dev'));
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// const playersRouter = require("./routes/players");
// app.use("/players", playersRouter);
// app.listen(port, function() {
//     console.log("Runnning on " + port);
//   });
//   module.exports = app;

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const mongoose = require('mongoose')
const express = require("express")
const cors = require('cors')




console.log("server is started")
const app = express()
app.listen(4500)
app.use(cors())
app.use(express.json())

app.post('/registration', async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://huzaif_ahmed:huzaif2004@cluster0.lhinep7.mongodb.net/Shikshaekikaran", { useNewUrlParser: true });
        console.log("Connected to MongoDB Atlas");
        const db = mongoose.connection;
        const typeSchema = new mongoose.Schema({
            Institution_name: String,
            Address: String,
            Established_year: Number,
            Registrationnumber: String,
            Affiliation: String,
            Username: String,
            states: String,
            studentsineachclass: Number,
            Password: String,
            collegeid: String,
            State: String,
            role: String
        });

        const testreg = mongoose.model('testreg', typeSchema);
        await testreg.create({
            Institution_name: req.body.Institution_name,
            Address: req.body.Address,
            Established_year: req.body.Established_year,
            Registrationnumber: req.body.Registrationnumber,
            Affiliation: req.body.Affiliation,
            Username: req.body.Username,
            states: req.body.states,
            studentsineachclass: req.body.studentsineachclass,
            Password: req.body.Password,
            collegeid: req.body.collegeid,
            role: req.body.role
        });

        const type1Schema = new mongoose.Schema({
            Password: String,
            Username: String,
            Institution_name: String,
            role: String
        });

        const testlog = mongoose.model('testlog', type1Schema);
        await testlog.create({
            Password: req.body.Password,
            Username: req.body.Username,
            Institution_name: req.body.Institution_name,
            role: req.body.role
        });

        console.log("Data added to the database");
        res.send("siuuuuu")
    } catch (error) {
        console.error(error);
    }
})
app.get('/registration', (req, resp) => {
    resp.send("data is sent")
    resp.send(req)
})


app.post('/login', async (req, resp) => {
    try {
        await mongoose.connect("mongodb+srv://user1:kmit1@cluster0.l7gcslq.mongodb.net/AlumniNetwork?retryWrites=true&w=majority", { useNewUrlParser: true });
        console.log("Connected to MongoDB Atlas");
        const db = mongoose.connection;
        const enteredusername = req.body.Username
        const enteredPassword = req.body.Password

        const user = mongoose.Schema({

            Password: String,
            Username: String,
            Institution_name: String,
            role: String

        })

        
        res.send("siuuuuu")
    } catch (error) {
        console.error(error);
}
})