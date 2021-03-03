const express = require( 'express' ),
   mongoose = require( 'mongoose' ),
   bodyParser = require( 'body-parser' ),
   path = require( 'path' );

const items = require( './routes/api/items' );
const app = express();

app.use( bodyParser.json() );

const db = require( './config/keys' ).mongoURI;

mongoose.connect( db, {
      useNewUrlParser    : true,
      useUnifiedTopology : true,
      useCreateIndex     : true
   } )
   .then( () => console.log( 'Mongo connected' ) )
   .catch( e => console.log( e ) );

app.use( '/api/items', items );

if ( process.env.NODE_ENV === 'production' ) {
   app.use( express.static( 'client/build' ) );
   
   app.get( '*', ( req, res ) => {
      res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
   } );
}

const port = process.env.PORT || 5000;
app.listen( port, () => console.log( `App has been started on port ${port}` ) );