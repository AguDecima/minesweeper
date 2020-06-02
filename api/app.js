let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();

let dashboard_routes = require('./routes/dashboard.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/*app.use((req,res,next)=>{
    res.header('Acces-Controll-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Acces-Control-Allow-Request-Method');
    res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');    
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');    
    
    next();
});*/

app.use('/v1/api', dashboard_routes);

module.exports = app;