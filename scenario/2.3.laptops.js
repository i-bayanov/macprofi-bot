module.exports = laptops = [
  [
    "Ноутбуки",
    {
      question: `Какой у Вас ноутбук?`,
      btns: [
        { msg: 'Назад', next: 'Ремонт' },
        { msg: 'Lenovo', next: 'Поломка_ноут' },
        { msg: 'Asus', next: 'Поломка_ноут' },
        { msg: 'Acer', next: 'Поломка_ноут' },
        { msg: 'Далее', next: 'Ноутбуки_10' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Ноутбуки_10",
    {
      question: `Какой у Вас ноутбук?\nЕсли ни один из перечисленых, нажмите "Пропустить"`,
      btns: [
        { msg: 'Назад', next: 'Ноутбуки' },
        { msg: 'HP', next: 'Поломка_ноут' },
        { msg: 'Packard Bell', next: 'Поломка_ноут' },
        { msg: 'Пропустить', next: 'Поломка_ноут' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  ["Поломка_ноут",
    {
      question: `Что у Вас сломалось?`,
      btns: [
        { msg: 'Назад', next: 'Ноутбуки_10' },
        { msg: 'Не включается', next: 'передаю_менеджерам' },
        { msg: 'Нужна чистка', next: 'передаю_менеджерам' },
        { msg: 'Разбита матрица', next: 'передаю_менеджерам' },
        { msg: 'Далее', next: 'Поломка_ноут_10' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  ["Поломка_ноут_10",
    {
      question: `Что у Вас сломалось?`,
      btns: [
        { msg: 'Назад', next: 'Поломка_ноут' },
        { msg: 'Не заряжается', next: 'передаю_менеджерам' },
        { msg: 'Зависает, проблемы с ПО', next: 'передаю_менеджерам' },
        { msg: 'Разлили жидкость', next: 'передаю_менеджерам' },
        { msg: 'Пропустить', next: 'передаю_менеджерам' },
        { msg: 'В начало', next: 'Консультация_начало' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ]
];