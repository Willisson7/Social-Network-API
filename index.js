const express = require('express');
const db = require('./config/connect');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();



db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });
  