Custom Dialog Box
=================

This script is a replacement for Javascript's native confirm() method.



It lets you add or remove buttons, set the text of the dialog box, and style
everything with CSS. Because the CustomDialogBox is chainable, it's quick and
clean to use.



Because this is written in native Javascript, it doesn't require any external
libraries.



Getting Started
---------------



After including the Javascript and basic CSS file in your page, follow these
steps.



Set the dialog box like so:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var dialog = new CustomDialogBox();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Then, instantiate it to set up the DOM elements:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.create();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



To set the text of the dialog:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.setText('Hello World!');
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



To show the dialog box, or to hide it:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.show():

dialog.hide();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Adding buttons is simple. Just call the addButton() method for each button you
want to add. addButton() takes three arguments - the internal system name for
the button (which will also be used as part of the ID, in case you want to
individually style it), the label for the button, and a callback function that
will be called when the button is clicked.



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.addButton('ok', 'OK', function() {
  alert('You clicked OK!');
  dialog.hide();
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Similarly, you can also remove a button by referring to its internal system name
that you set when you created it:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.removeButton('ok');
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



If you want to center the dialog box in the middle of the viewport, use the
following method:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.centerPosition();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Finally, if you want to completely remove the DOM elements but leave the object
intact, you can call this method:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.destroy();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



### Chaining



You can chain any of the above methods if you want. So, the following is
perfectly fine:



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
dialog.create()
    .addButton('ok', 'OK', function() { alert('You hit OK!'); dialog.hide(); })
    .addButton('cancel', 'Cancel', function() { alert('You hit Cancel!'); dialog.hide(); })
    .hide()
;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



CSS Styling
-----------



### The Backdrop



The transparent black backdrop has an ID of
`customDialogBoxBackgroundContainer`. This is the only element that is NOT
contained inside of the main container.



### The Main Container



The dialog box is contained in a `<div>` with an ID of
`customDialogBoxContainer`.



### Buttons



Buttons contained inside have an ID of `customDialogBoxButton-<systemname>`
where `<systemname>` is the name you set in the first argument of `addButton()`.
So, for example, you might have a button with an ID of
`customDialogBoxButton-ok`.

License
-------

The MIT License (MIT)

Copyright (c) 2014 Star Tribune Media Company

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
