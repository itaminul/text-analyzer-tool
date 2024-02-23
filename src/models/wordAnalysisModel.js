const fs = require('fs');
class WordAnalysisModel {

  constructor(text) {
    this.text = text;
  }

  countWords() {
    return this.text.split(/\s+/).length;
  }

  countCharacters() {
    return this.text.length;
  }

  countSentences() {
    return this.text.split(/[.!?]+/).length - 1;
  }

  countParagraphs() {
    return this.text.split(/\n+/).length;
  }

  findLongestWords() {
    const paragraphs = this.text.split(/\n+/);
    return paragraphs.map(paragraph =>
      paragraph.split(/\s+/).reduce((longest, current) =>
        current.length > longest.length ? current : longest, '')
    );
  }
}

module.exports = WordAnalysisModel;