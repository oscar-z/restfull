const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const Task = require('./api/models/todoListModel')
const bodyParser = require('body-parser')


//** Conexion a mongoose */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://oscar-z:mongodb@mdb-akne0.gcp.mongodb.net/test?retryWrites=true&w=majority')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(function (req,res) {
//     res.status(404).send({url: req.originalUrl + ' not found 😢'})
// });

var routes = require('./api/routes/todoListRoutes')
routes(app)






app.listen(port);

console.log(`Runnin on port ${port}`);

