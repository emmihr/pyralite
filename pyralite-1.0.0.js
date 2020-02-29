/**
* Alternative to document.getElementById.
*
* @arg {String} ID to get element from.
* @returns {HTMLElement}
*/
window.elemById = function elembyid(idinput) {
    return document.getElementById(idinput) || null;
};
/**
* Check if a number is even.
* @augments Number
* @returns {Boolean}
*/
Number.prototype.isEven = function() {
    return !(this % 2); 
};
/**
* Get the GCD (Greatest Common Denominator) of 2 numbers.
* @augments Math
* @arg {Number} a
* @arg {Number} b
* @returns {Number}
*/
Math.gcd = function gcd(a,b){
  return b ? gcd(b, a%b) : a;
};
/**
* Reduce a fraction (written as a/b). Makes use of {@link Math#gcd}.
* @augments Math
* @arg {Number} numerator
* @arg {Number} denominator
* @returns {Array}
*/
Math.reduce = function reduce(numerator,denominator){
  if (isNaN(numerator) || isNaN(denominator)) return NaN;
  let gcd = Math.gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
};
/**
* Shuffle an array.
* @augments Array
* @returns {Array}
*/
Array.prototype.shuffle = function shuffle() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
};
/**
Array.prototype.first = function first() {
  return this[0];
};

Array.prototype.last = function last() {
  return this[this.length - 1];
};

Number.prototype.round = function(places) {
  if (typeof places != "number" && typeof places != "undefined" ) {
    throw new TypeError('argument 1 should be of type number');
  }
  var fullplaces = places || 2;
  return +(Math.round(this + "e+" + fullplaces)  + "e-" + fullplaces);
};

window.elemsByTag = function elemsbytag(sel) {
    return [].slice.call(document.querySelectorAll(sel)) || null;
};

window.elemsByClass = function elemsbyclass(sel) {
    return [].slice.call(document.querySelectorAll('.'+sel)) || null;
};

HTMLElement.prototype.innerHtml = function innerHTML(text) {
 if (text) {
   this.innerHTML = text.toString() || this.innerHTML;
   return this.innerHTML;
}};

HTMLElement.prototype.outerHtml = function outerHTML(text) {
 if (text) {
   this.outerHTML = text.toString() || this.outerHTML;
   return this.outerHTML;
}};

HTMLElement.prototype.text = function text(text) {
 if (text) {
   this.innerText = text.toString() || this.innerText;
   return this.innerText;
}};

window.PyrElement = function PyrElement(options) {
let pyrelement;
if (options && typeof options != 'object') {
  throw new TypeError('argument 1 should be of type object');
}
if (!options.tag) {
  throw new Error('options.tag is a required parameter.');
}
pyrelement = document.createElement(options.tag);
pyrelement.text(options.content || '');
pyrelement.id = options.id || '';
if (options.class) {
  pyrelement.classList.add(options.class);
}
return pyrelement;
};

HTMLElement.prototype.defocus = function defocus() {
  return this.blur();
};

HTMLElement.prototype.setFocus = function setfocus(boolean) {
  if (typeof boolean != 'boolean') {
    throw new TypeError('argument 1 should be of type boolean');
  }
  if (boolean) {
    this.focus();
  }
  if (!boolean) {
    this.blur();
  }
};

HTMLElement.prototype.setStyle = function setstyle(sty, value) {
    if (typeof sty != 'string' || typeof value != 'string') {
    throw new TypeError('both arguments should be of type string');
    }
  this.style[sty] = value;
};
