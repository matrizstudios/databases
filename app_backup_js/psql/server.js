const express = require('express');
const app = express();
const cron = require('node-cron');
const { Client } = require('pg');
const { createDump, uploadToS3 } = require("./__init__/dump_Database_psql");

const POSTGRESQL_MASTER_HOST = process.env.POSTGRESQL_MASTER_HOST;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_USER = process.env.POSTGRES_USER;

const connection = new Client({
  user: POSTGRES_USER,
  host: POSTGRESQL_MASTER_HOST,
  password: POSTGRES_PASSWORD,
  port: 5432,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to PSQL:', err);
    return;
  }
  console.log('Connected to PSQL successfully!');
});

const PORT = process.env.PORT || 5005;

cron.schedule('55 21 * * *', () => {
  createDump(async(err, dumpFilename) => {
    if (err) {
      console.error(`Error creating dump: ${err.message}`);
      return;
    }
    uploadToS3(dumpFilename, (err, s3Url) => {
      if (err) {
        console.error(`Error uploading dump to S3 bucket: ${err.message}`);
        return;
      }
      console.log(`dump uploaded to S3 bucket: ${s3Url}`);
    });
  });
});

app.listen(PORT, () => {
    console.log(`RUNNING IN PORT ${PORT}`)
});

module.exports = {connection}