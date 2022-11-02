var fs = require('fs');
fs.readFile('sample.txt','utf8',function(err,data){
    console.log(`하라주쿠`);
    console.log(data);
})