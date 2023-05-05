const express = require('express');
const app = express();
const cron = require('node-cron');
const mysql = require('mysql2');
const { createDump } = require("./__init__/dump_Database_Mysql");
const { uploadToS3 } = require("./__init__/dump_Database_Mysql");


const PORT = process.env.PORT || 5005;

const MYSQL_HOST = process.env.MYSQL_HOST;
// const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
// const MYSQL_USER = process.env.MYSQL_USER;

// ### root ###
const MYSQL_USER_ROOT = process.env.MYSQL_USER_ROOT;
const MYSQL_ROOT_PASSWORD= process.env.MYSQL_ROOT_PASSWORD;

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  port: 3306,
  user: MYSQL_USER_ROOT,
  password: MYSQL_ROOT_PASSWORD
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL successfully!');
});

cron.schedule('55 17 * * *', () => {
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
