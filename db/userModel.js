const pg = require('pg');
const config = require('./config');
const connectionString = process.env.DATABASE_URL || config.url;

const client = new pg.Client(connectionString);
client.connect();

const query = client.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password VARCHAR(40))');
query.on('end', () => { client.end(); });