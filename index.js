const { Bot, Keyboard, KeyboardColor } = require('node-vk-bot');
const util = require('util');

const { TOKEN, GROUP_ID } = require('./secret')
const scenario = require('./scenario');

const bot = new Bot({
  token: TOKEN,
  group_id: GROUP_ID
}).start();

console.log('Bot started!');

bot.get(/./i, (message, exec, reply) => {
  let info = message.payload && scenario[JSON.parse(message.payload)] || scenario[''];
  let keyboard = new Keyboard(true);

  for (let i = 0; i < info.btns.length; i++) {
    if (i) keyboard.addRow();

    const btn = info.btns[i];

    keyboard.addButton(btn.msg, KeyboardColor.PRIMARY, JSON.stringify(btn.next));
  }

  reply(info.question, { keyboard }).catch(e => console.error(e));
})

bot.on('poll-error', error => {
  console.error('error occurred on a working with the Long Poll server ' +
    `(${util.inspect(error, false, 8, true)})`)
})
