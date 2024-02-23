const express = require('express') 
const WordAnalysisController = require('../controller/wordAnalysisController');
const fileReader = require('../middleware/fileReader');

const router = express.Router();
router.use(fileReader)
router.post('/words', WordAnalysisController.getWordCount)
console.log("resultss route");
module.exports = router;