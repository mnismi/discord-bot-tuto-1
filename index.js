require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});

client.on('ready', () => {
  console.log('Logged in');
});

client.on('messageCreate', (message) => {
  console.log(message.content);
  message.react('😋');
  message.react('📙');
});

client.on('typingStart', (props) => {
  console.log('typing...');
});

client.login(process.env.TOKEN);
