const express = require('express');
const cors = require('cors');
const data = require('./students');
const port = process.env.PORT || 5000;

const app = express();
 
app.use(cors());

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/:id', (req, res) => {
  const paramId = req.params.id;
  const dataArr = data.data;
  sendId(filterById(paramId, dataArr), res);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

function filterById(id, data) {
  return data.filter(index => index.id == id);
}

function sendId(funct, res) {
  if (!funct.length) {
    res.status(404);
    return res.json({ message: 'No record found!' });
  }
  return res.send({ data: funct[0] });
}