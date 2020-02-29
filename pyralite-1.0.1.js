/**
* Alternative to document.getElementById.
*
* @arg {String} ID to get element from.
* @returns ?{HTMLElement}
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
* @returns {Array | NaN}
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
* Return the first element of an array.
* @augments Array
*/
Array.prototype.first = function first() {
  return this[0];
};
/**
* Return the last element of an array.
* @augments Array
*/
Array.prototype.last = function last() {
  return this[this.length - 1];
};
/**
* Round a number to some places. Not to be confused with Math.round.
* @augments Number
* @arg {Number} places - How many decimal places to round the number to. Default 2.
* @returns {Number}
*/
Number.prototype.round = function(places=2) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
};
/**
* Gets elements by the provided tag (e.g. "h1", "em")
* @arg {String} tag - The tag to use.
* @returns ?{Array<HTMLElement>}
*/
window.elemsByTag = function elemsbytag(tag) {
    return [].slice.call(document.querySelectorAll(tag)) || null;
};
/**
* Gets elements by the provided class (e.g. "big", "testclasss")
* @arg {String} class - The class to use.
* @returns ?{Array<HTMLElement>}
*/
window.elemsByClass = function elemsbyclass(cls) {
    return [].slice.call(document.querySelectorAll('.'+cls)) || null;
};
/**
* Set the inner HTML of an element.
* @augments HTMLElement
* @arg {String} text - The string to set the inner HTML to.
* @returns ?{String}
*/
HTMLElement.prototype.innerHtml = function innerHTML(text) {
 if (text) {
   this.innerHTML = text.toString() || this.innerHTML;
   return this.innerHTML;
}};
/**
* Set the outer HTML of an element.
* @augments HTMLElement
* @arg {String} text - The string to set the outer HTML to.
* @returns ?{String}
*/
HTMLElement.prototype.outerHtml = function outerHTML(text) {
 if (text) {
   this.outerHTML = text.toString() || this.outerHTML;
   return this.outerHTML;
}};
/**
* Set the inner text of an HTML element.
* @augments HTMLElement
* @arg {String} text - The string to set the inner text to.
* @returns ?{String}
*/
HTMLElement.prototype.text = function text(text) {
 if (text) {
   this.innerText = text.toString() || this.innerText;
   return this.innerText;
}};

/**
* Defocus an HTML element. Alias for blur().
* @augments HTMLElement
* @returns {null}
*/
HTMLElement.prototype.defocus = function defocus() {
  return this.blur();
};
/**
* Set the focus of an HTML element on or off. Good for toggling.
* @augments HTMLElement
* @arg {Boolean} boolean - Whether to focus or defocus the element.
* @returns {null}
*/
HTMLElement.prototype.setFocus = function setfocus(boolean) {
  if (boolean) {
    this.focus();
  }
  if (!boolean) {
    this.blur();
  }
};
/**
* Sets a style rule of an element.
* @augments HTMLElement
* @arg {String} sty - The style to set.
* @arg {String|Number} - The value to set the style to.
* @returns {null}
*/
HTMLElement.prototype.setStyle = function setstyle(sty, value) {
  this.style[sty] = value;
};
