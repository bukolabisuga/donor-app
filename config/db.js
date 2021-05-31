const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  const sql = `CREATE TABLE IF NOT EXISTS donors (id INT PRIMARY KEY AUTO_INCREMENT, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, streetAddress VARCHAR(255) NOT NULL, city VARCHAR(64) NOT NULL, country VARCHAR(64) NOT NULL, postalCode VARCHAR(12) NOT NULL, phone VARCHAR(32) NOT NULL, preferredFormOfContact VARCHAR(12) NOT NULL, amount DECIMAL(15, 2) NOT NULL, preferredFormOfPayment VARCHAR(12) NOT NULL, frequencyOfDonation VARCHAR(12) NOT NULL, comments VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created!");
  });
});

const saveDonor = (sql, donor) => {
  let newId;
  connection.query(sql, donor, (err, result) => {
    if (err) {
      console.log('Error while inserting donor into DB.');
      throw new Error(err);
    }
    newId = result.insertId;
    console.log("Donor saved!");
  });
  return newId;
}

const findAllDonors = (sql, cb) => {
  let donors = [];
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error while retrieving donor from DB.');
      throw new Error(err);
    } else {
      cb(null, result);
    }
  });
}

module.exports = { saveDonor, findAllDonors };
