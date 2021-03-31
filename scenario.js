module.exports = scenario = {
  "": {
    question: `Здравствуйте. Я бот Артем.
    Я Вам помогу получить консультацию в автоматическом режиме`,
    btns: [
      { msg: 'Да, помоги', next: 'Консультация_начало' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Отключение": {
    question: `Хорошо, я отключаюсь. Вы можете продолжать общаться с нашими менеджерами в этом чате.
    Просто задайте Ваш вопрос.
    Если вы захотите вызвать меня, напишите "/бот"`,
    btns: []
  },

  "Консультация_начало": {
    question: `Наша компания специализируется на ремонте цифровой техники любых производителей. 
    Скупаем бу, новую, кредитную цифровую технику. 
    Продаем цифровую технику. 
    Большой выбор качественных аксессуаров.
    
    Что вы хотите?`,
    btns: [
      { msg: 'Отремонтировать технику', next: 'Ремонт' },
      { msg: 'Продать свою технику', next: 'Скупка' },
      { msg: 'Купить ваш товар', next: 'Продажа' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Консультация_назад": {
    question: `Что вы хотите?`,
    btns: [
      { msg: 'Отремонтировать технику', next: 'Ремонт' },
      { msg: 'Продать свою технику', next: 'Скупка' },
      { msg: 'Купить ваш товар', next: 'Продажа' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Ремонт": {
    question: `Какое у Вас устройство?`,
    btns: [
      { msg: 'Назад', next: 'Консультация_назад' },
      { msg: 'Телефон', next: 'Телефоны' },
      { msg: 'Планшет', next: 'Планшеты' },
      { msg: 'Ноутбук', next: 'Ноутбуки' },
      { msg: 'Другое', next: 'Другое' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Телефоны": {
    question: `Какой у Вас телефон?`,
    btns: [
      { msg: 'Назад', next: 'Ремонт' },
      { msg: 'Apple', next: 'Apple_10' },
      { msg: 'Android', next: 'Android_10' },
      { msg: 'Другой', next: 'Другие_телефоны' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_10": {
    question: `Какая у Вас модель?`,
    btns: [
      { msg: 'Назад', next: 'Телефоны' },
      { msg: '12 серия', next: 'Apple_20' },
      { msg: 'iPhone SE 2020', next: 'Поломка' },
      { msg: '11 серия', next: 'Apple_30' },
      { msg: '10 серия', next: 'Apple_40' },
      { msg: 'Далее', next: 'Apple_50' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_50": {
    question: `Если ни один из ниже перечисленых, напишите вашу модель`,
    btns: [
      { msg: 'Назад', next: 'Apple_10' },
      { msg: '8 серия', next: 'Apple_60' },
      { msg: '7 серия', next: 'Apple_70' },
      { msg: '6 серия', next: 'Apple_80' },
      { msg: '5 серия', next: 'Apple_90' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_20": {
    question: `Уточните модель`,
    btns: [
      { msg: 'Назад', next: 'Apple_50' },
      { msg: 'iPhone 12 Pro Max', next: 'Поломка' },
      { msg: 'iPhone 12 Pro', next: 'Поломка' },
      { msg: 'iPhone 12', next: 'Поломка' },
      { msg: 'iPhone 12 mini', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_30": {
    question: `Уточните модель`,
    btns: [
      { msg: 'Назад', next: 'Apple_20' },
      { msg: 'iPhone 11 Pro Max', next: 'Поломка' },
      { msg: 'iPhone 11 Pro', next: 'Поломка' },
      { msg: 'iPhone 11', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_40": {
    question: `Уточните модель`,
    btns: [
      { msg: 'Назад', next: 'Apple_30' },
      { msg: 'iPhone XS Max', next: 'Поломка' },
      { msg: 'iPhone XS', next: 'Поломка' },
      { msg: 'iPhone X', next: 'Поломка' },
      { msg: 'iPhone XR', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_60": {
    question: `Уточните модель`,
    btns: [
      { msg: 'Назад', next: 'Apple_40' },
      { msg: 'iPhone 8 Plus', next: 'Поломка' },
      { msg: 'iPhone 8', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_70": {
    question: `Уточните модель📱`,
    btns: [
      { msg: 'Назад', next: 'Apple_60' },
      { msg: 'iPhone 7 Plus', next: 'Поломка' },
      { msg: 'iPhone 7', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_80": {
    question: `Уточните модель`,
    btns: [
      { msg: 'Назад', next: 'Apple_70' },
      { msg: 'iPhone 6s Plus', next: 'Поломка' },
      { msg: 'iPhone 6 Plus', next: 'Поломка' },
      { msg: 'iPhone 6s', next: 'Поломка' },
      { msg: 'iPhone 6', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Apple_90": {
    question: `Уточните модель📱`,
    btns: [
      { msg: 'Назад', next: 'Apple_80' },
      { msg: 'iPhone SE', next: 'Поломка' },
      { msg: 'iPhone 5S', next: 'Поломка' },
      { msg: 'iPhone 5C', next: 'Поломка' },
      { msg: 'iPhone 5', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Android_10": {
    question: `Какой фирмы у Вас телефон?`,
    btns: [
      { msg: 'Назад', next: 'Ремонт' },
      { msg: 'Samsung', next: 'Android_30' },
      { msg: 'Huawei', next: 'Android_30' },
      { msg: 'Xiaomi', next: 'Android_30' },
      { msg: 'Далее', next: 'Android_20' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Android_20": {
    question: `Если ни один из ниже перечисленых, напишите вашу модель`,
    btns: [
      { msg: 'Назад', next: 'Android_10' },
      { msg: 'Oppo', next: 'Android_30' },
      { msg: 'Realmi', next: 'Android_30' },
      { msg: 'OnePlus', next: 'Android_30' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Android_20": {
    question: `Напишите модель телефона`,
    btns: [
      { msg: 'Назад', next: 'Android_20' },
      { msg: 'Пропустить', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

  "Другие_телефоны": {
    question: `Напишите марку и модель телефона`,
    btns: [
      { msg: 'Назад', next: 'Ремонт' },
      { msg: 'Пропустить', next: 'Поломка' },
      { msg: 'Отключить бота', next: 'Отключение' }
    ]
  },

};
