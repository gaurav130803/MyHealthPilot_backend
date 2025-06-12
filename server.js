const db=require("mongoose");
const express=require("express");
const cors=require("cors");
// const path = require('path');
const routes = require("./routes/index.js");
const app=express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json())

app.use(cors({
    origin: '*',
    credentials:true,
    allowedHeaders:["Content-Type","Authorization"],
    exposedHeaders:["Authorization"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  })
);

app.use(routes);

db.connect(
    process.env.MONGODB
)
.then(()=>{
    console.log("connection successful");
})
. then(()=>{
   app.listen(PORT, '0.0.0.0', () => {
  console.log(`server is running on port:${PORT}`);
});
})