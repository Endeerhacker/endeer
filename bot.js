const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

var prefix = "#"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "507656114784043032") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(` :white_check_mark: **Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(` **LISTENING Now: **${argresult}:white_check_mark: `)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**Username Changed To **${argresult}**:white_check_mark:  `)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`**Avatar Changed Successfully To **${argresult} ** :white_check_mark: `);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`**Streaming: **${argresult} :white_check_mark: `)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`**Playing: **${argresult} :white_check_mark: `)
} 



});




client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});



client.login(process.env.TOKEN);// لا تغير فيها شيء
