const express = require('express');

const app = express();

const serverConfig = require('./src/configs/server.config');
const { connect } = require('./src/utils/db.connection');


require('./routes/index.routes')(app);

app.listen(serverConfig.PORT, () => {
  console.log(`Application is running in PORT : ${serverConfig.PORT}`);
  connect();
});