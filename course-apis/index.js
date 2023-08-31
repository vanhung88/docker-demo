const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (req, res) => {
  res.send({
    course: ['nodejs', 'reactjs', 'react-native', 'flutter', 'java', 'python'],
  });
});

app.listen(PORT, HOST);
