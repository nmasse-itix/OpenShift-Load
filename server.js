var express = require("express");
var app = express();
var router = express.Router();
var port = 8080;

router.use(function (req,res,next) {
  next();
  console.log("%s %s => %i", req.method, req.originalUrl, res.statusCode);
});

router.get("/",function(req,res){
  var now = new Date().getTime();
  while(new Date().getTime() < now + 1000) {
   // do nothing
  }
  var response = {
    "status": "ok"
  };
  res.type('application/json')
     .header("Connection", "close")
     .header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
     .header('Expires', '-1')
     .header('Pragma', 'no-cache')
     .send(JSON.stringify(response))
     .end();
});


app.use("/",router);

app.use("*",function(req,res){
  res.status(404).send("Not found");
});

app.listen(port,function(){
  console.log("Live at Port %i", port);
});
