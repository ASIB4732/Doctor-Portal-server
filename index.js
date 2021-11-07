const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const { MongoClient } = require("mongodb");
require('dotenv').config()

const uri = `mongodb+srv://Doctor-Ibrahim:Doctor-Ibrahim4732@cluster0.sjl2g.mongodb.net/Doctor-Portal?retryWrites=true&w=majority`;


const app = express()
app.use(bodyParser.json());
app.use(cors());
const port = 8080 

app.get('/', (req, res) => {
  res.send('Hello World welcome to world bigest websites')
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appointmentCollection = client.db("Doctor-Portal").collection("appointment");
   
  app.post('/addAppointment', (req, res)=>{
    const appointment =req.body;
    console.log(appointment);
    appointmentCollection.insertOne(appointment)
    .then(result=>{
      console.log(656,result);
      res.send(result)
    })
  })

});

app.listen(port)