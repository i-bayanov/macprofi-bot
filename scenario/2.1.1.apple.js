module.exports = apple = [
  [
    "Apple_10",
    {
      question: `Какая у Вас серия?`,
      btns: [
        { msg: 'Назад', next: 'Телефоны' },
        { msg: '12', next: 'Apple_30' },
        { msg: '11', next: 'Apple_40' },
        { msg: 'X, Xs, Xr', next: 'Apple_50' },
        { msg: 'Далее', next: 'Apple_20' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_20",
    {
      question: `Если ни один из перечисленых, нажмите "Пропустить"`,
      btns: [
        { msg: 'Назад', next: 'Apple_10' },
        { msg: '7, 8, SE 2020', next: 'Apple_60' },
        { msg: '6, 6s', next: 'Apple_70' },
        { msg: '5, 5s, SE', next: 'Apple_80' },
        { msg: 'Пропустить', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_30",
    {
      question: `Уточните модель`,
      btns: [
        { msg: 'Назад', next: 'Apple_10' },
        { msg: '12 Pro Max', next: 'Поломка' },
        { msg: '12 Pro', next: 'Поломка' },
        { msg: '12', next: 'Поломка' },
        { msg: '12 mini', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_40",
    {
      question: `Уточните модель`,
      btns: [
        { msg: 'Назад', next: 'Apple_10' },
        { msg: '11 Pro Max', next: 'Поломка' },
        { msg: '11 Pro', next: 'Поломка' },
        { msg: '11', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_50",
    {
      question: `Уточните модель`,
      btns: [
        { msg: 'Назад', next: 'Apple_10' },
        { msg: 'Xs Max', next: 'Поломка' },
        { msg: 'Xs', next: 'Поломка' },
        { msg: 'Xr', next: 'Поломка' },
        { msg: 'X', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_60",
    {
      question: `Уточните модель`,
      btns: [
        { msg: 'Назад', next: 'Apple_20' },
        { msg: 'SE 2020', next: 'Поломка' },
        { msg: '8 Plus', next: 'Поломка' },
        { msg: '8', next: 'Поломка' },
        { msg: '7 Plus', next: 'Поломка' },
        { msg: '7', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_70",
    {
      question: `Уточните модель`,
      btns: [
        { msg: 'Назад', next: 'Apple_20' },
        { msg: '6s Plus', next: 'Поломка' },
        { msg: '6 Plus', next: 'Поломка' },
        { msg: '6s', next: 'Поломка' },
        { msg: '6', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Apple_80",
    {
      question: `Уточните модель`,
      btns: [
        { msg: 'Назад', next: 'Apple_20' },
        { msg: 'iPhone SE', next: 'Поломка' },
        { msg: 'iPhone 5S', next: 'Поломка' },
        { msg: 'iPhone 5C', next: 'Поломка' },
        { msg: 'iPhone 5', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],
];
