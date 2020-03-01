/**
* Alternative to document.getElementById.
*
* @param {String} id - ID to get element from.
* @returns {HTMLElement}
*/
window.elemById = id => {
    return document.getElementById(id) || null;
};
/**
* Check if a number is even.
* @augments Number
* @returns {Boolean}
*/
Number.prototype.isEven = () => {
    return !(this % 2); 
};
/**
* Get the GCD (Greatest Common Denominator) of 2 numbers.
* @augments Math
* @param {Number} a
* @param {Number} b
* @returns {(Number|NaN)}
*/
Math.gcd = (a,b) => {
  return b ? gcd(b, a%b) : a;
};
/**
* Reduce a fraction (written as a/b). Makes use of {@link Math#gcd}.
* @augments Math
* @param {Number} numerator
* @param {Number} denominator
* @returns {Number[]}
*/
Math.reduce = (numerator,denominator)=>{
  if (isNaN(numerator) || isNaN(denominator)) return NaN;
  let gcd = Math.gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
};
/**
* Shuffle an array.
* @augments Array
* @returns {Array}
*/
Array.prototype.shuffle = () => {
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
* @returns {*}
*/
Array.prototype.first = () => {
  return this[0];
};
/**
* Return the last element of an array.
* @augments Array
* @returns {*}
*/
Array.prototype.last = () => {
  return this[this.length - 1];
};
/**
* Round a number to some places. Not to be confused with Math.round.
* @augments Number
* @param {Number} [places=2] - How many decimal places to round the number to. Default 2.
* @returns {Number}
*/
Number.prototype.round = (places=2) => {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
};
/**
* Gets elements by the provided tag (e.g. "h1", "em")
* @param {String} tag - The tag to use.
* @returns {HTMLElement[]}
*/
window.elemsByTag = tag => {
    return [].slice.call(document.querySelectorAll(tag)) || null;
};
/**
* Gets elements by the provided class (e.g. "big", "testclasss")
* @param {String} class - The class to use.
* @returns {HTMLElement[]}
*/
window.elemsByClass = cls => {
    return [].slice.call(document.querySelectorAll('.'+cls)) || null;
};
/**
* Set the inner HTML of an element.
* @augments HTMLElement
* @param {String} text - The string to set the inner HTML to.
* @returns {String}
*/
HTMLElement.prototype.innerHtml = text => {
 if (text) {
   this.innerHTML = text.toString() || this.innerHTML;
   return this.innerHTML;
}};
/**
* Set the outer HTML of an element.
* @augments HTMLElement
* @param {String} text - The string to set the outer HTML to.
* @returns {String}
*/
HTMLElement.prototype.outerHtml = text => {
 if (text) {
   this.outerHTML = text.toString() || this.outerHTML;
   return this.outerHTML;
}};
/**
* Set the inner text of an HTML element.
* @augments HTMLElement
* @param {String} text - The string to set the inner text to.
* @returns {String}
*/
HTMLElement.prototype.text = text => {
 if (text) {
   this.innerText = text.toString() || this.innerText;
   return this.innerText;
}};

/**
* Defocus an HTML element. Alias for blur().
* @augments HTMLElement
* @returns {undefined}
*/
HTMLElement.prototype.defocus = () => {
  return this.blur();
};
/**
* Set the focus of an HTML element on or off. Good for toggling.
* @augments HTMLElement
* @param {Boolean} boolean - Whether to focus or defocus the element.
* @returns {undefined}
*/
HTMLElement.prototype.setFocus = boolean => {
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
* @param {String} sty - The style to set.
* @param {(String|Number)} value - The value to set the style to.
* @returns {undefined}
*/
HTMLElement.prototype.setStyle = (sty, value) => {
  this.style[sty] = value;
};
