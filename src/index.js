// import _ from 'lodash';
var lodash = require('lodash/lodash');

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
