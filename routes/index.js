const express = require('express');
const router = express.Router();

const connection = require('../db/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('Hello Wolrld 33!!!');
  res.render('index', { title: 'Express' });
});
router.get('/api/test', function(req, res, next) {
  const sql = 'SELECT * FROM student';
  connection.query(sql, (error, result, fileds) => {
    if (error) {
      res.json({ code: 1, data: null, message: 'failed' });
    } else {
      res.json({ code: 0, data: result, message: 'successful' });
    }
  });
});
router.get('/api/pagination', (req, res, next) => {
  const { page = 1, size = 10 } = req.query;
  const sql = `SELECT * FROM student LIMIT ${page - 1}, ${size}`;
  connection.query(sql, (error, result, fileds) => {
    if (error) {
      res.json({ code: 1, data: null, message: 'failed' });
    } else {
      res.json({ code: 0, data: result, message: 'successful' });
    }
  });
});
module.exports = router;
