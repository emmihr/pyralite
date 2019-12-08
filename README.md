# pyralite
Quick JavaScript addon to shorthand some web development stuff. <br>
There's a GitHub webhook in this server, which gives me a good reason to post an invite to it here:
https://discord.gg/ek9Sdhm <br>
See known tested & working systems in compat.txt <br>
Open an issue if you've tested on a unique system/browser combo!
## Usage
```html
<script src='pyralite-x.x .js'></script>
```
You can start using Pyralite functions immediately.
x.x corresponds to the version number, such as 0.1.

## Functions
### Globals
These are part of the window object, and therefore can be called directly.

`elemById(id);`
Returns the HTML element with the id `id`, if any.

`elemsByTag(tag);`
Returns an Array of HTML elements with the tag `tag`, if any.

`elemsByClass(class);`
Returns an Array of HTML elements with the class `class`, if any.

`new PyrElement(options);`
Creates a new element with the specified options: Valid options are: <br>
`tag` - String. Type of the element.<br>
`content` - String. Text of the element. Can be blank.<br>
`id` - String. ID of the element. Can be blank.<br>
`class` - String. Class(es) of the element. Can be blank.<br>

### Added to existing objects
#### Math

`Math.gcd(num1, num2)`
Gets the greatest common divisor of `num1` and `num2`.

`Math.reduce(numerator, denominator)`
Reduces a fraction using `Math.gcd()`.

### Prototype extensions
These are extended from prototypes, and are therefore functions available to the type listed.

#### HTMLElement
`element.defocus();`
More memorable/intuitive name for `element.blur();` which removes focus from an element.

`element.text(string);`
A functional way of using innerText. Returns the element's inner text if no `string` is provided, otherwise sets and returns the inner text.

`element.outerHtml(html);`
A functional way of using outerHTML. Same idea as `text();`. Returns the outerHTML value, or sets it if the `html` argument is provided.

`element.innerHtml(html);`
Functional way of using innerHTML. Same as `text();` and `outerhtml();`. Returns the innerHTML value, or sets it if the `html` argument is provided.

`element.setFocus(boolean);`
Set focus of an element with a `true` or `false`. Good for toggling focus on an element with a piece of code such as `focus = !focus`.

`element.setStyle(style, value);`
Set CSS attribute `style` of `element` to `value.` Good for programmatically editing css.

#### Array
`array.first();`
Returns the first element of an array, same as `array[0]`.

`array.last();`
Returns the last element of an array, same as `array[array.length - 1]`.

`array.shuffle();`
Randomly shuffles an array.

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
