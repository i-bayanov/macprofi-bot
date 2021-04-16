const apple = require('./2.1.1.apple');
const android = require('./2.1.2.android');

const array = [
  [
    "Телефоны", {
      question: `Какой у Вас телефон?`,
      btns: [
        { msg: 'Назад', next: 'Ремонт' },
        { msg: 'Apple', next: 'Apple_10' },
        { msg: 'Android', next: 'Android_10' },
        { msg: 'Другой', next: 'Другие_телефоны' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Другие_телефоны",
    {
      question: `Напишите марку и модель телефона и нажмите "Далее"`,
      btns: [
        { msg: 'Назад', next: 'Ремонт' },
        { msg: 'Далее', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],
];

module.exports = phones = array.concat(apple, android);
