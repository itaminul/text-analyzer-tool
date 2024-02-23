const fileReader = require('../middleware/fileReader');
const wordCountMiddleware = require('../models/wordCountMiddleware');
const fs = require('fs');

  exports.getWordCount = async(req, res) => {
    console.log("controller ");
   try {
     const filePath = '../sample.txt';
      const result =  await fileReader(req, res, next);
      console.log("result", result);
     await wordCountMiddleware.getWordCountFromFile(filePath, (err, wordCount) => {
      if(err) {
        return res.status(500).send("error");
      }
      res.send(`${wordCount}`);
     })
    
   } catch (error) {
    console.log("error", error);
   }
  }


