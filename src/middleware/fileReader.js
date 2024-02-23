const fs = require('fs');

function fileReader(req, res, next) {
  console.log("file reader");
  fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    req.text = data;
    next();
  });
}

module.exports = fileReader;
