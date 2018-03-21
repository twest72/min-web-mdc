// import _ from 'lodash';
var lodash = require('lodash/lodash');

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');

    var button = document.createElement('div');
    button.innerHTML = "  <button class=\"foo-button mdc-button\">\n" +
    "    Button\n" +
    "  </button>";

    element.appendChild(button);
    return element;
}

document.body.appendChild(component());
