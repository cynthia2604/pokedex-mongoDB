const express = require('express');
const path = require('path');
const router = require('./router.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());
app.use('/pokemonlist', router);

// app.get('/pokemonlist/type', function(req, res) {
//   console.log(req.query);
// })

const port = 3002;
app.listen(port, (err) => {
  err ? err : console.log(`server listening on port ${port}`);
});