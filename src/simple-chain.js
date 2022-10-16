const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainLinks : [],
  chainLinksDisplay: '',
  getLength() {
    return this.chainLinks.length;
  },
  addLink(value) {
    if (typeof value =='function')
    this.chainLinks.push(`${value}`);
    else
    this.chainLinks.push(value);
    this.chainLinksDisplay = this.chainLinks.map(item => `( ${item} )`);
    this.chainLinksDisplay = this.chainLinksDisplay.join('~~');
    console.log('checked');
    return this;
  },
  removeLink(position) {
    if (position % 1 != 0 || position >= this.chainLinks.length || position <= 0 || typeof position != 'number')
    throw new Error("You can't remove incorrect link!");
    console.log(position);
    this.chainLinks = this.chainLinks.splice(position, 1);
    this.chainLinksDisplay = this.chainLinks.map(item => `( ${item} )`);
    this.chainLinksDisplay = this.chainLinksDisplay.join('~~');
    return this;
  },
  reverseChain() {
    this.chainLinks.reverse();
    this.chainLinksDisplay = this.chainLinks.map(item => `( ${item} )`);
    this.chainLinksDisplay = this.chainLinksDisplay.join('~~');
    return this;
  },
  finishChain() {
    return [this.chainLinksDisplay, this.chainLinks];
  }
};

module.exports = {
  chainMaker
};
