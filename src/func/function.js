const fs= require('fs');

 function writeFile(content) {
     fs.writeFileSync('./src/database/tasks.json',JSON.stringify({todos:content}));
}
module.exports= writeFile;