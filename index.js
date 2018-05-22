const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
 
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'this is the index GET route' });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));


