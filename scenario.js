const greeting = require('./scenario/1.0.greeting');
const repair = require('./scenario/2.0.repair');
const buying = require('./scenario/3.0.buying');
const sale = require('./scenario/4.0.sale');

module.exports = scenario = Object.fromEntries([].concat(greeting, repair, buying, sale));
