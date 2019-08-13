const express = require('express');
//const bodyParser = require('body-parser');


const app = express();
//app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(require('./routes'));

const port = process.env.PORT || 80; 
const server = app.listen(port, function() {
	console.log("App is listening on port "+port);
});
server.timeout = 1000 * 60 * 10; // 10 minutes

