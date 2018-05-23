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
  filterById(paramId, dataArr);
  res.send({ message: 'id route' });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

function filterById(id, data) {
  const filteredData = data.filter(index => index.id == id);
  console.log(filteredData);
  
}