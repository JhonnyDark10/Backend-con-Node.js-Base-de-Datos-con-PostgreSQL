// Require del módulo PG
const { Client } = require('pg');

async function getConnection() {
// Configuración de la conexión con PostgreSQL
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'Nico',
  password: 'admin123',
  database: 'MyStore'
});

await client.connect();
return client;
}

module.exports= getConnection;