const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require ('cors')
const coffeeController=require('./controllers/coffeeController')
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
// app.use() middleware here
app.use(bodyParser.json());
app.use(cors())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get("/", (req, res) => res.send("Let's start bulding the app"))

app.get("/coffee", coffeeController.getAllCoffee)
app.get("/coffee/name/:name", coffeeController.getCoffeeByName)
app.get("/coffee/:categories", coffeeController.getCoffeeByCategory)