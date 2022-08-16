// Main app file for test api

// create express and initialize
const express = require('express'), 
    app = express(), //create app
    path = require('path'), //add path module
    mysql = require('mysql'), //add mysql2 module
    fs = require('fs'), //add filesystem module
    bodyParser = require('body-parser');

// const db = require('./db'); // database connector
const config = require('./config/config');
const systemRouter = require('./routes/system');
//const blogRouter = require('./routes/blog'); //not ready yet
const usersRouter =require('./routes/users');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

//hook up routers
app.use('/system', systemRouter); //system functions
//app.use('/blog', blogRouter); //blog functions, not created yet, just a placeholder
app.use('/users', usersRouter); //user functions


/*
connection - replace this with an initialize app type function that looks for
a config file and loads it if it exists, and creates it if it does not exist
process should ask user for their database info.
Maybe store this as config.json
*/
/* tmp disabled
const db = mysql.createConnection({
    host : config.db.host,
    user : config.db.user,
    password : config.db.password,
    database : config.db.database
});
*/

// grab port as argument from commandline, else default to port in config file
// note to self, add checking to ensure argv[2] is numeric in valid port range
if (process.argv[2]) {
    port = process.argv[2];
} else {
    port = config.app.port;
}

// create listener and output ready message to console
app.listen(port, () => {
    console.log("API is ready to rock on port " + port);
});

// Homepage
app.get('/', function (request, response) {
    response.sendFile(path.resolve(__dirname,'../html') + '/index.html');
})

