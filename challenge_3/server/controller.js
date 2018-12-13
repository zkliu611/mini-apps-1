var db = require('./../db/');

var addData = () => {

}


const getGroceries = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM groceries;`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  });
}

const addGrocery = (req, res) => {
  const query = 'INSERT INTO groceries (name, quantity) VALUES (?, ?);';
  const grocery = req.body;
  const params = [grocery.name, grocery.quantity];
  db.query(query, params, (err, results) => {
    if(err) {
      res.status(501).send();
    } else {
      res.status(201).send();
    }
  })
}

module.exports = {
  addData
};