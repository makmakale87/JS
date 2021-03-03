const express = require( 'express' );
const mongoose = require( 'mongoose' );
const exphbs = require( 'express-handlebars' );
const todoRoutes = require( './routes/todos' );
const path = require( 'path' );


const PORT = process.env.PORT || 5000;

const app = express();
const hbs = exphbs.create( {
   defaultLayout : 'main',
   extname       : 'hbs'
} );

app.engine( 'hbs', hbs.engine );
app.set( 'view engine', 'hbs' );
app.set( 'views', 'views' );
app.use( express.urlencoded( { extended : true } ) );
app.use( todoRoutes );
app.use( express.static( path.join( __dirname, 'public' ) ) );

async function start() {
   try {
      await mongoose.connect( process.env.MONGODB_URI, {
         useNewUrlParser    : true,
         useFindAndModify   : true,
         useUnifiedTopology : true
      } );
      app.listen( PORT, () => {
         console.log( `App has been started on port ${PORT}...` );
      } );
   } catch (e) {
      console.log( e.message );
   }
}

start();