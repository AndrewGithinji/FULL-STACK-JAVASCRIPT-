import express from 'express';

const countries = express.Router();

//Calling our router//

countries.get('/', (req , res) => {
    res.send('countries route');
  });

  export default countries