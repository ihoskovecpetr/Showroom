var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var bodyParser = require('body-parser');

router.use(bodyParser());

var connection = mysql.createConnection({

	host: 'sql11.freemysqlhosting.net',
	user: 'sql11214477',
	password: 'RckalnT2Le',
	database: "sql11214477"

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//NACIST VSECHNO
router.get('/' , (req, res) => {
  console.log('Jsme ve fci users/ get.. request');
  		let sql = "SELECT * FROM customers";
  		let query = connection.query(sql, (err, rows, fields) => {
  		  if(!!err) {console.log(err);}
  			console.log('Uspesne query' + JSON.stringify(fields) + ' a rows -- ' + JSON.stringify(rows) );

 res.send(JSON.stringify(rows));

  		});
  }); 
 

//DELETE
router.post('/delete',function(req,res, next){
  var id = req.body.deleteID;
  connection.query("DELETE FROM customers WHERE id = ?", id , function (err, result) {
    console.log("Deleting completed.. HOTOVO");
  });
});

//POST
router.post('/login',function(req,res, next){
  console.log("ozvalo se port router.post POST");
  console.log(JSON.stringify(req.body.name));
  var pujcka = {
  name: req.body.name,
  TimeOd: req.body.TimeOd,
  DateOd: req.body.DateOd,
  TimeDo: req.body.TimeDo,
  DateDo: req.body.DateDo
  }
  console.log("definovani pujckz POST");
var query = connection.query('INSERT INTO customers set ?' , pujcka, function(err, result){
  console.log("poslalo neco do DB - POST");
  console.log(query.sql)
  if (err) {
    console.error(err);
    return;
      }
      console.error(result);
       res.send(JSON.stringify(result));
      } )
});

//CHANGE
router.post('/update',function(req,res, next){
  console.log("Updatovani -- ");
  var id = req.body.IDback;
  var nameSQL = req.body.NameBack;
  var DameOdSQL = req.body.DateOdBack;
  var TimeOdSQL = req.body.TimeOdBack;
  var DameDoSQL = req.body.DateDoBack;
  var TimeDoSQL = req.body.TimeDoBack;
  console.log(id);
  console.log(nameSQL);
  console.log(TimeOdSQL);
  console.log("Tady POST CHANGE ---");
var query = connection.query("UPDATE customers SET name = '" + nameSQL + "' , DateOd = '" + DameOdSQL + "', TimeOd = '" + TimeOdSQL + "', DateDo = '" + DameDoSQL + "', TimeDo = '" + TimeDoSQL + "' WHERE ID = ?" , id , function(err, result){
  if (err) {
    console.error(err);
    return;
      }
      console.log("-------- -------- -----------");
      console.log(result);
      console.log("-------- -------- -----------");
      res.send(JSON.stringify(result));
      }  )

});

//NACIST VSECHNO
router.get('/geo-info' , (req, res) => {
	console.log('jsme v geo-info');
      let sql = "SELECT * FROM GeoBragger";
      let query = connection.query(sql, (err, rows, fields) => {
        if(!!err) {console.log(err);}
        console.log('Uspesne query' + JSON.stringify(fields) + ' a rows -- ' + JSON.stringify(rows) );

 res.send(JSON.stringify(rows));

      });
  }); 

//POSILAME NOVOU POZICI
router.post('/new-geo',function(req,res, next){
  console.log("ozvalo se port router.post POST");
  console.log(JSON.stringify(req.body.Tit));
  var pujcka = {
  Tit: req.body.Tit,
  Lat: req.body.Lat,
  Lng: req.body.Lng
  }
  console.log("definovani pujckz POST");
var query = connection.query('INSERT INTO GeoBragger set ?' , pujcka, function(err, result){
  console.log("poslalo neco do DB - POST");
  console.log(query.sql)
  if (err) {
    console.error(err);
    return;
      }
      console.error(result);
       res.send(JSON.stringify(result));
      } )
});



module.exports = router;
