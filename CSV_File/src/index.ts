import express from 'express';
import csv from 'csvtojson';

const app = express();
const port = 3000;

const inputFile = './users.csv';
const outputFile = 'users.json';

app.get('/convert', (req, res) => {
  res.send('Converting to Json');
  csv()
.fromFile(inputFile)
.then((data)=>{
    let newData = data.map( (item: {
      first_name: string; last_name: string; phone: string; }) => {
        let first = item.first_name
      }
    }))
})
}); 

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});