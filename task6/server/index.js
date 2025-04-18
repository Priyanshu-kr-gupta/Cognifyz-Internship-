  const express=require('express');
  const cors=require('cors')
  require("dotenv").config();
  const app=express();
  app.use(
    cors({
      origin: "*"
    })
  );
  app.use(express.json());
  const port=5000;
  const connectToMongo=require('./dbConnect/db');

  app.use('/api/auth',require('./routes/auth'));
  app.use('/api/note',require('./routes/note'));

  app.listen(port,()=>{
      console.log(`it is listening at ${port}`);
  })

 

  connectToMongo(process.env.dburl);
