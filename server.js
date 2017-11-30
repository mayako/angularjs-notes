const express = require('express');
const path    = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// static files
app.use(express.static(path.join(__dirname, "src/")));

app.listen(app.get('port'), () => console.log('server started '+ app.get('port')));
