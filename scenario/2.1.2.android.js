module.exports = android = [
  [
    "Android_10",
    {
      question: `Какой фирмы у Вас телефон?`,
      btns: [
        { msg: 'Назад', next: 'Ремонт' },
        { msg: 'Samsung', next: 'Поломка' },
        { msg: 'Huawei', next: 'Поломка' },
        { msg: 'Xiaomi', next: 'Поломка' },
        { msg: 'Далее', next: 'Android_20' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Android_20",
    {
      question: `Если ни один из перечисленых, нажмите "Пропустить"`,
      btns: [
        { msg: 'Назад', next: 'Android_10' },
        { msg: 'Oppo', next: 'Поломка' },
        { msg: 'Realmi', next: 'Поломка' },
        { msg: 'OnePlus', next: 'Поломка' },
        { msg: 'Пропустить', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],
];
