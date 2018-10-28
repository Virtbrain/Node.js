console.log('Hometask1 - модуль moment.js');

const moment_m = require('moment');
moment_m.locale('ru');
console.log('Модуль moment.js рабоатет с датами в удобном виде');
console.log(`Например сейчас на часах: ${moment_m().format('DD.MM.YYYY - HH:MM:SS')}`);
console.log(`А через неделю будет: ${moment_m().add(7,'d').format('DD.MM.YYYY')}`);
const today = moment_m();
const endofcource = moment_m("21.11.2018","DD-MM-YYYY");
console.log(`Наш курс заканчивается: ${endofcource.format('DD.MM.YYYY')}`);
var diff = moment_m.duration(today.diff(endofcource)).humanize();
console.log(`До конца курса осталось: ${diff}`);