var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//1. render ra form input
router.get('/input', (req, res) => {
  res.render('input');
});

// 2. Lấy dữ liệu từ form input
router.post('/output', (req, res) => {
  // A. In ra console log
  console.log(req.body);
  // B. In ra web với res.send
  res.send(req.body);
});

module.exports = router;
