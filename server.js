//.env file
var env = require('dotenv').config();

//require the app
var app = require('./app');

const start = async () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log(`App listening at :${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();