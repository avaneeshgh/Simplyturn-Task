//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/Simplyturntask'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/Simplyturntask/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, (err) => {
  if (err)
  {

  }
  else
  {
    console.log(`server listening on port number 8080`);
    }
});
