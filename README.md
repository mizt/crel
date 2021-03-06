![crel](logo.png)


# What #

a small, simple, and fast DOM creation utility

# Why? #

Writing HTML is stupid. It's slow, messy, and should not be done in JavaScript.

The best way to make DOM elements is via document.createElement, but making lots of DOM with it is tedious.

crel.js makes the process easier.

Inspiration was taken from https://github.com/joestelmach/laconic, but crel wont screw with your bad in-DOM event listeners, and is smaller, faster, etc...

# Usage #

Signature:

    crel(tagName/dom element [, attributes, child1, child2, childN...])

For browserify:

    npm i crel

    var crel = require('crel');

For standard script tag style:

    <script src="crel.min.js"></script>

To make some DOM:

Example:

```javascript
var element = crel('div',
    crel('h1', 'Crello World!'),
    crel('p', 'This is crel'),
    crel('input', {type: 'number'})
);

// Do something with 'element'
```

You can create attributes with dashes, or reserved keywords, but using strings for the objects keys:

```javascript
crel('div', {'class':'thing', 'data-attrubute':'majigger'});
```

You can pass an already available element to crel, and it will be the target of the attributes/child elements

```javascript
crel(document.body,
    crel('h1', 'Page title')
)
```

You can assign child elements to variables during creation:

```javascript
var button,
    wrapper = crel('div',
        button = crel('button')
    );
```

You could probably use crel to rearrange existing dom..

```javascript
crel(someDiv,
    crel(someOtherDiv, anotherOne)
)
```

But don't.

# Browser support

Crel works in everything (as far as I know), but ofcourse...

##  IE SUPPORT

If you require this library to work in IE7, add the following after declaring crel.

```javascript
var testDiv = document.createElement('div'),
    testLabel = document.createElement('label');

testDiv.setAttribute('class', 'a');
testDiv['className'] !== 'a' ? crel.attrMap['class'] = 'className':undefined;
testDiv.setAttribute('name','a');
testDiv['name'] !== 'a' ? crel.attrMap['name'] = function(element, value){
    element.id = value;
}:undefined;


testLabel.setAttribute('for', 'a');
testLabel['htmlFor'] !== 'a' ? crel.attrMap['for'] = 'htmlFor':undefined;
```

# Goals #

## Easy to use ##

## Tiny ##
easily less than 1K minified
easily less than 500 bytes gzipped
## Fast ##

crel is fast. Depending on what browser you use, it is up there with straight document.createElement calls.

http://jsperf.com/dom-creation-libs/10

# License #

MIT
