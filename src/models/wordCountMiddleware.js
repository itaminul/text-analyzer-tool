const fs = require('fs');

const wordCountModel = {
  getWordCountFromFile: (callback) => {
    const filePath = '../sample.txt';
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return callback(err, null);
      }
      const words = data.split(/\s+/).filter(word => word.trim() !== '');
      const wordCount = words.length;
      callback(null, wordCount);
    });
  }
};

module.exports = wordCountModel;
