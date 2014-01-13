/*
Custom Dialog Box

This plugin offers an alternative to Javascript's native confirm(). It allows for
any number of buttons with custom text and callbacks and is stylable via CSS.

Author: Ben Overmyer <ben.overmyer@startribune.com>
*/
function CustomDialogBox() {
    // Set up the DOM
    this.create = function() {
        var dialogContainer = document.createElement('div');
        dialogContainer.id = 'customDialogBoxContainer';
        if (typeof dialogContainer.classList === 'undefined') {
            dialogContainer.className += ' dialogBox';
        } else {
            dialogContainer.classList.toggle('dialogBox');
        }
        document.body.appendChild(dialogContainer);

        var textContainer = document.createElement('div');
        textContainer.id = 'customDialogBoxTextContainer';
        dialogContainer.appendChild(textContainer);

        var customDialogBoxButtonContainer = document.createElement('div');
        customDialogBoxButtonContainer.id = 'customDialogBoxButtonContainer';
        dialogContainer.appendChild(customDialogBoxButtonContainer);

        var backgroundContainer = document.createElement('div');
        backgroundContainer.id = 'customDialogBoxBackgroundContainer';
        document.body.appendChild(backgroundContainer);

        this.container = dialogContainer;
        this.buttonContainer = customDialogBoxButtonContainer;
        this.backdrop = backgroundContainer;

        this.hide();

        return this;
    };

    // Destroy the DOM elements
    this.destroy = function() {
        window.removeChild(this.container);
        window.removeChild(this.backdrop);
    };

    // Display the dialog box and center it (note: the reliance on classList requires a polyfill for IE9 and lower)
    this.show = function() {
        if (typeof this.container.classList === 'undefined') {
            var existingClasses = this.container.className;
            this.container.className = existingClasses.replace('hidden', '');

            var existingClasses = this.backdrop.className;
            this.backdrop.className = existingClasses.replace('hidden', '');
        } else {
            this.container.classList.toggle('hidden');
            this.backdrop.classList.toggle('hidden');
        }
        this.centerPosition();

        return this;
    };

    // Hide the dialog box
    this.hide = function() {
        if (typeof this.container.classList === 'undefined') {
            this.container.className += ' hidden';
            this.backdrop.className += ' hidden';
        } else {
            this.container.classList.toggle('hidden');
            this.backdrop.classList.toggle('hidden');
        }

        return this;
    };

    // Add a button to the dialog box. 
    // buttonName is the name by which the plugin refers to the button, label is the button's text, and callback is the callback function clicking on the button will activate
    this.addButton = function(buttonName, label, callback) {
        var newButton = document.createElement('button');
        newButton.id = 'customDialogBoxButton-' + buttonName;
        newButton.onclick = callback;
        if (typeof newButton.textContent === 'undefined') {
            newButton.innerText = label;
        } else {
            newButton.textContent = label;
        }
        this.buttonContainer.appendChild(newButton);

        return this;
    };

    // Remove a button from the dialog box. 
    this.removeButton = function(buttonName) {
        var buttonToRemove = document.getElementById('customDialogBoxButton-' + buttonName);
        this.buttonContainer.removeChild(buttonToRemove);

        return this;
    };

    // Set the text of the dialog box.
    this.setText = function(newText) {
        var textNode = document.createTextNode(newText);
        var textContainer = document.getElementById('customDialogBoxTextContainer');

        if (textContainer.hasChildNodes()) {
            textContainer.removeChild(textContainer.childNodes[0]);
        }

        textContainer.appendChild(textNode);

        this.dialogText = newText;

        return this;
    };

    // Center the dialog box in the middle of the viewport.
    this.centerPosition = function() {
        if (!window.innerHeight) {
            viewportHeight = document.documentElement.clientHeight;
            viewportWidth = document.documentElement.clientWidth;
        } else {
            viewportHeight = window.innerHeight;
            viewportWidth = window.innerWidth;
        }
        this.container.style.top = ((viewportHeight - this.container.clientHeight) / 2) + 'px';
        this.container.style.left = ((viewportWidth - this.container.clientWidth) / 2) + 'px';
    };

    this.dialogText = '';
    this.container = '';
    this.buttonContainer = '';
    this.backdrop = '';
};