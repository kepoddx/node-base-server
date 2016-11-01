// app/routes/loads.js
var multer = require('multer');
var upload = multer({dest: 'uploads/'})

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /loads/:load_id
  router.route('/:loadId')
  .get(function(req, res, next) {
    // Return load
  }) 
  .put(function(req, res, next) {
    // Update load
  })
  .patch(function(req, res,next) {
    // Patch
  })
  .delete(function(req, res, next) {
    // Delete record
  });

  router.route('/')
  .get(function(req, res, next) {
    // Logic for GET /loads routes
    res.json("Loads Api is ready to implemented")
  }).post(function(req, res, next) {
    // Create new load
  });

  router.route('/upload')
  .post(upload.single('loads'), function(req, res, next){
    console.log(req.file);
    // req.file is the 'loads' file
    //req.body will hold the text fields, if there were any
  })
};
