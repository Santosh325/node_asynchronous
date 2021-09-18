const fs = require('fs');

// ?? to creat a new file using async (writeFile method)
// fs.writeFile("read.txt", 'my name is john doen',(err) =>{

//      if(err) throw err;
//      console.log('Hello world whats up');
// });


// ?? to apped a text in existing file --> async
// fs.appendFile("read.txt",'i am from philadelphiaa' , (err) => {
//      if(err) throw err;
//      console.log('task completed');
// })

// ?? to read file from existing file --> async
fs.readFile('read.txt', 'utf-8',(err,data) => {
     if(err) throw err;
     console.log(data);
});