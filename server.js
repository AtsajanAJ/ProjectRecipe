const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiRoutes = require('./app/routes/api');

//middleware
app.use(express.json());

//define your API routes
app.use('/api', apiRoutes);

global.__basedir = __dirname;

// Http headers สิทธ์เข้าถึงเว็บ  
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Default route
app.get("/", (req,res)=>{
    res.json({ message : 'welcome to recipe Web!!'})
    
})

//Port Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server is running on port.'+PORT);
})