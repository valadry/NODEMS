const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host: 'localhost',
        username: 'root',
        database: 'node-complete',
        password: 'crackHead123'
    });

module.exports = pool.promise()