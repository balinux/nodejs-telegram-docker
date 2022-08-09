'use strict';

const express = require('express');
/** @type {typeof import('telegraf').Telegraf} */
const {Telegraf} = require('telegraf')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// telegraf
const bot = new Telegraf("1990206478:AAEGm4ZhQFMakHOn6iqHWVrebPekFCR6Vvs")

bot.on('text', (ctx) => {

  // Explicit usage
  // ctx.telegram.sendMessage(ctx.message.chat.id, `Hello anda mengirimkan pesan ${ctx.message.text} ke saya`)

  // Using context shortcut
  ctx.reply(`Hello anda mengirimkan pesan ${ctx.message.text} ke saya`)
})

bot.launch()

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
