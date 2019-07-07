const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538702848637272084")
setInterval(function() {
channel.send(`faissal noob faissal noob faissal noob faissal noob`);
}, 30)
})

client.login(process.env.BOT_TOKEN);