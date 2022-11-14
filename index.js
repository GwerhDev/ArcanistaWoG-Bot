const Discord = require("discord.js");
const { embedReq } = require("./commands/functions");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "q-";

client.on('ready', ()=>{
    const generalChannel = client.channels.cache.get("1038269083336052838")
    generalChannel.send(`Ha llegado el escudero`)
})

client.on("message", async function(message) {
    if (message.author.bot) return;
    if (message.content === `${prefix} escudero`){
        await message.author.send(`Esta es la lista de comandos`)
    }
    if (message.content === `${prefix} quests`){
        await message.author.send(`Quests activas`)
    }
    // if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "[sistema]" || message.content === "[sistema]") {
        embedReq("[Sistema Ainulindalë]")
    }
  });

client.login(config.BOT_TOKEN, {autorun: true});