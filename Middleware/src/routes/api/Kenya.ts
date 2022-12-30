import express from 'express';

const Kenya = express.Router();

//Calling our router//

Kenya.get('/', (req , res) => {
    res.send('Kenya route');
  });

  export default Kenya