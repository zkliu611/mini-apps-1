var db = require('./../db/');

var addData = (data) => {
  console.log(data, 'from controller')
  var sql = '';
  db.connection(sql, () => {
    
  })
}

module.exports = {
  addData
};

//use 'mysql.server start' to start mysql server