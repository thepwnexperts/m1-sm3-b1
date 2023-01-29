const express = require('express');
var compression = require('compression');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const db = require ('mongoose');

//use
app.use(express.json());
app.use(cors());
app.use(compression());

//paths
const verifypath=require('./routes/verify');

//routes
//local
app.use("/verify",verifypath);

//remote


//db
try{
    db.connect(process.env.dburi)
  .then(() => console.log('DB Connection Successful'));
}
catch(e)
{
    console.log(e)
};

//server 
var port = 3000;
app.listen(port, () => {
    console.log("server listening on port:" + port);
});