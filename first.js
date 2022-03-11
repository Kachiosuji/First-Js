var fs = require('fs')

fs.writeFile('first1.js','console.log("done")',function(err){
console.log("Data Saved")
})