const express = require('express');
const path = require('path');
const router = require('./router.js');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/pokemonlist', router);

const port = 3002;
app.listen(port, (err) => {
  err ? err : console.log(`server listening on port ${port}`);
});