const express = require('express')
const app = express()
const port = 8000;
require('./db/conn')
const users = require('./routes/users');
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(users);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})