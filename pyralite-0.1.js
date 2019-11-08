window.elemByID = function elembyid(idinput) {
  if (document.getElementById(idinput)) {
    return document.getElementById(idinput);
  } else {
    return;
  }
};

Array.prototype.first = function first() {
  return this[0];
};

Array.prototype.last = function last() {
  return this[this.length - 1];
};

Number.prototype.round = function(places) {
  var fullplaces = places | 2
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

HTMLElement.prototype.innerhtml = function innerHTML(text) {
 if (text) {
   this.innerHTML = text.toString();
   return this.innerHTML;
 } else {
   return this.innerHTML;
 }
};

HTMLElement.prototype.outerhtml = function outerHTML(text) {
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

window.newelement = function newelement(tag,content) {
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

HTMLElement.prototype.setfocus = function setfocus(boolean) {
  if (boolean) {
    this.focus();
  } else if (!boolean) {
    this.blur();
  }
};
