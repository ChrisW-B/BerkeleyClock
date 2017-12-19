const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => {
  res.sendFile('../build/index.html');
});


app.listen(1059, () => {
  console.log('Berkeley Clock is listening on port 1059!\nhttp://localhost:1059');
});