var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/testForAuth', function(err, db) {
if(err) throw err;

db.collection('users').findAndModify(
  {username: 'dyuthi'}, // query
  [['_id','asc']],  // sort order
  {$set: {downvote: 75}}, // replacement, replaces only the field "hi"
  {}, // options
  );
});