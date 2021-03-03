const mongoose = require( 'mongoose' );

const Schema = new mongoose.Schema( {
   name : {
      type : String, required : true
   },
   date : {
      type    : Date,
      default : Date.now
   }
} );

module.exports = Item = mongoose.model( 'item', Schema );
