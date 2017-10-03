var connect = require('connect');
var serveStatic = require('serve-static');
var servingEntity = __dirname;
var port = 3000;

if(process.env.MAINT_MODE == 1) {
  servingEntity += '/maint';
  port = 8080;
} else if(process.env.PROD_MODE) {
  servingEntity += '/build';
  port = 8080;
}else {
  //servingEntity += '/app';
  servingEntity += '/build';
}
console.log('MODE ' + process.env.MAINT_MODE)
connect().use(serveStatic(servingEntity)).listen(port, function(){
    console.log(servingEntity + ';' + ' Server running on ' + port + '...');
});
