module.exports = tablets = [
  [
    "Планшеты",
    {
      question: `Какой фирмы у Вас планшет?\nЕсли ни один из перечисленых, нажмите "Пропустить"`,
      btns: [
        { msg: 'Назад', next: 'Ремонт' },
        { msg: 'Samsung', next: 'Поломка' },
        { msg: 'iPad', next: 'Поломка' },
        { msg: 'Huawei', next: 'Поломка' },
        { msg: 'Пропустить', next: 'Поломка' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ]
];