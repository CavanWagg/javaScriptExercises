// ## Using the `terminal` or your favorite MySQL GUI
// 1. Connect to MySQL server

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '$Casekeenum7',
  database: 'test_DB',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  queryText();
});

function queryText() {
  connection.query('SELECT * FROM test_table', (err, res) => {
    for (let i = 0; i < res.length; i++) {
      console.log(`${res[i].id} | ${res[i].text_field}`);
    }
    console.log('-----------------------------------');
  });
}

// 2. Create a new Database
// 3. Create a new table with a primary key that auto-increments, and a text field
// 4. Insert 3 Rows into your new table

// ## Using Node / IDE of your choice
// 1. Create a package.json
// 2. Require `mysql`
// 3. Connect to MySQL
// 4. Print the 3 rows of data to the `console`
