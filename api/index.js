let app = require('./app');
let port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Server listen in http://localhost:"+port);
});
