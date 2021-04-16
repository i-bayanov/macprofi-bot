const phones = require('./2.1.0.phones');
const tablets = require('./2.2.tablets');
const laptops = require('./2.3.laptops');
const malfunction = require('./2.4.malfunction');

const array = [
  [
    "Ремонт",
    {
      question: `Какое у Вас устройство?`,
      btns: [
        { msg: 'Назад', next: 'Консультация_назад' },
        { msg: 'Телефон', next: 'Телефоны' },
        { msg: 'Планшет', next: 'Планшеты' },
        { msg: 'Ноутбук', next: 'Ноутбуки' },
        { msg: 'Другое', next: 'передаю_менеджерам' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ]
];

module.exports = repair = array.concat(phones, tablets, laptops, malfunction);
