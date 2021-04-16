module.exports = greeting = [
  [
    "/start",
    {
      question: `Здравствуйте. Я бот Артем.\nЯ Вам помогу получить консультацию в автоматическом режиме`,
      btns: [
        { msg: 'Да, помоги', next: 'Консультация_начало' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Отключение",
    {
      question: `Хорошо, я отключаюсь. Вы можете продолжать общаться с нашими менеджерами в этом чате.\nПросто задайте Ваш вопрос.\nЕсли вы захотите вызвать меня, напишите "/start"`,
      btns: []
    }
  ],

  [
    "Консультация_начало",
    {
      question: `Наша компания специализируется на ремонте цифровой техники любых производителей.\nСкупаем б/у, новую, кредитную цифровую технику.\nПродаем цифровую технику.\nБольшой выбор качественных аксессуаров.\n\nЧто вы хотите?`,
      btns: [
        { msg: 'Отремонтировать технику', next: 'Ремонт' },
        { msg: 'Продать свою технику', next: 'Скупка' },
        { msg: 'Купить ваш товар', next: 'Продажа' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "Консультация_назад",
    {
      question: `Что вы хотите?`,
      btns: [
        { msg: 'Отремонтировать технику', next: 'Ремонт' },
        { msg: 'Продать свою технику', next: 'Скупка' },
        { msg: 'Купить ваш товар', next: 'Продажа' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ],

  [
    "передаю_менеджерам",
    {
      question: `Я передам полученную информацию нашим менеджерам. Они свяжутся с вами в этом чате в ближайшее время.\nВы можете дополнить или исправить марку, модель или неисправность вашего устройства, написав сообщение с нужной информацией.`,
      btns: [
        { msg: 'Отремонтировать технику', next: 'Ремонт' },
        { msg: 'Продать свою технику', next: 'Скупка' },
        { msg: 'Купить ваш товар', next: 'Продажа' },
        { msg: 'Отключить бота', next: 'Отключение' }
      ]
    }
  ]
];