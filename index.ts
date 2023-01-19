const express = require('express');
const app = express();

app.use(express.static('src'))
// app.use(express.json())

// ---------------------------------

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/home.html')
})


app.listen(3000, ()=> {
  console.log("App listening on port 3000")
})


