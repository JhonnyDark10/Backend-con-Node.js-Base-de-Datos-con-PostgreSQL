const { Pool } = require('pg');

const { config } = require('./../config/config');
 
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });


//const pool = new Pool({
 // user: 'Nico',
  //host: 'localhost',
  //database: 'MyStore',
  //password: 'admin123',
  //port: 5432,
///});

module.exports = pool;