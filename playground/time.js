// Jan 1st 1970 00:00:00 am
// stored in milliseconds
const moment = require('moment');

// const date = new Date();
// const months = ['Jan', 'Feb']
// console.log(date.getMonth());

const date = moment();

date.add(3, 'year');
date.subtract(10, 'months');

console.log(date.format('MMM Do, YYYY '));

const date2 = moment();

console.log(date2.format('h:mm a'));

const createdAt = 412421545734;
const date3 = moment(createdAt);
console.log(date3.format('MMM Do YYYY'));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const nowTime = new Date();
console.log(nowTime.getMilliseconds());
