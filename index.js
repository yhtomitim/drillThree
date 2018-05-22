const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const data = require('./students');

const app = express();
 
app.use(cors());

app.get('/', (req, res) => {
  res.send(data);
});

app.get('/:id', (req, res) => {
  res.send({ message: 'id route' });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));


