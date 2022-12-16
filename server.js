const express = require('express');
const sequelize= require('./config/connection');
const mysql= require('mysql2');
const routes = require('./api');
// import sequelize connection
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'Stlblues#1',
    database: 'ecommerce_db'
  },
  console.log(`Connected to the ecommerce_db database.`)
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:3001.`));
});

