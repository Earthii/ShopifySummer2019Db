var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

/* GET users listing. */
router.get('/', function(req, res, next) {
  keywords = req.query['keywords']
  if(keywords){
    // return those with keywords
    res.json( db.get('data').filter(o => {
      o['keywords'] = o['keywords'].toUpperCase();
      return o['keywords'].includes(keywords.toUpperCase());
    }).value());
  }else{
    // return all
    res.json( db.get('data').value());
  }
});

module.exports = router;
