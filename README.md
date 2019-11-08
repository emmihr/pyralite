# pyralite
Quick JavaScript addon to shorthand some web development stuff.
## Usage
```html
<script src='pyralite-x.x .js'></script>
```
You can start using Pyralite functions immediately.
x.x corresponds to the version number, such as 0.1.

## Functions
### Globals
These are part of the window object, and therefore can be called directly.

`elemByID(id);`
Returns the HTML element with the id `id`, if any.

`elemsByTag(tag);`
Returns an array of HTML elements with the tag `tag`, if any.

`elemsByClass(class);`
Returns an array of HTML elements with the class `class`, if any.

`newelement(tag, content);`
Creates a new element of type `tag`, with innerHTML = `content`, and returns it. Good for programatically creating elements.

### Prototype extensions
These are extended from prototypes, and are therefore functions available to the type listed.

#### HTMLElement
`element.defocus();`
More memorable/intuitive name for `element.blur();` which takes focus from an element.

`element.text(string);`
A functional way of using innerText. Returns the element's inner text if no `string` is provided, otherwise sets and returns the inner text.

`element.outerhtml(html);`
A functional way of using outerHTML. Same idea as `text();`. Returns the outerHTML value, or sets it if the `html` argument is provided.

`element.innerhtml(html);`
Functional way of using innerHTML. Same as `text();` and `outerhtml();`. Returns the innerHTML value, or sets it if the `html` argument is provided.

`element.setfocus(boolean);`
Set focus of an element with a `true` or `false`. Good for toggling focus on an element with a piece of code such as `focus = !focus`.

#### Array
`array.first();`
Returns the first element of an array, same as `array[0]`.

`array.last();`
Returns the last element of an array, same as `array[array.length - 1]`.

#### Number
`number.round(places);`
Not to be confused with `Math.round();`.
This rounds a number to some places, provided as `places`. Not intended for large, integer numbers.
Example:
```js
var x = 192.82457295
x.round(3) // 192.825
```
May act odd with negatives as well.
