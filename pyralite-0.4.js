window.elemById = function elembyid(idinput) {
  if (document.getElementById(idinput)) {
    return document.getElementById(idinput);
  } else {
    return;
  }
};

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
}

Array.prototype.first = function first() {
  return this[0];
};

Array.prototype.last = function last() {
  return this[this.length - 1];
};

Number.prototype.round = function(places) {
  if (typeof places != "number" && typeof places != "undefined" ) {
    throw new TypeError('places is of type ' + typeof places + ', should be number');
  }
  var fullplaces = places | 2;
  return +(Math.round(this + "e+" + fullplaces)  + "e-" + fullplaces);
};

window.elemsByTag = function elemsbytag(sel) {
  if (document.querySelectorAll(sel)) {
    return [].slice.call(document.querySelectorAll(sel));
  } else {
    return;
  }
};

window.elemsByClass = function elemsbyclass(sel) {
  if (document.querySelectorAll('.'+sel)) {
    return [].slice.call(document.querySelectorAll('.'+sel));
  } else {
    return;
  }
};

HTMLElement.prototype.innerHtml = function innerHTML(text) {
 if (text) {
   this.innerHTML = text.toString();
   return this.innerHTML;
 } else {
   return this.innerHTML;
 }
};

HTMLElement.prototype.outerHtml = function outerHTML(text) {
 if (text) {
   this.outerHTML = text.toString();
   return this.outerHTML;
 } else {
   return this.outerHTML;
 }
};

HTMLElement.prototype.text = function text(text) {
 if (text) {
   this.innerText = text.toString();
   return this.innerText;
 } else {
   return this.innerText;
 }
};

window.newElement = function newelement(tag,content) {
  if (tag) {
    let internalElement = document.createElement(tag);
    if (content) {
      internalElement.innerHTML = content;
    }
  }
  return internalElement;
};

HTMLElement.prototype.defocus = function defocus() {
  return this.blur();
};

HTMLElement.prototype.setFocus = function setfocus(boolean) {
  if (typeof boolean != 'boolean') {
    throw new TypeError('boolean is of type ' + typeof boolean + ', should be boolean');
  }
  if (boolean) {
    this.focus();
  } else if (!boolean) {
    this.blur();
  }
};

HTMLElement.prototype.setStyle = function setstyle(sty, value) {
    if (typeof sty != 'string' | typeof value != 'string') {
    throw new TypeError('both arguments should be of type string');
    }
  this.style[sty] = value;
};
