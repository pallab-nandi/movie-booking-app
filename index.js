const express = require('express');

const app = express();

const serverConfig = require('./src/configs/server.config');
const { connect } = require('./src/utils/db.connection');

app.listen(serverConfig.PORT, () => {
  console.log(`Application is running in PORT : ${serverConfig.PORT}`);
  connect();
});