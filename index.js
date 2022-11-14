const Discord = require("discord.js");
const { embedReq, questsReq } = require("./commands/functions");
const config = require("./config.json");
const { commandList } = require("./misc/consts");
const client = new Discord.Client();
const prefix = "q-";

client.on('ready', ()=>{
    const generalChannel = client.channels.cache.get("1038269083336052838")
    generalChannel.send(`Ha llegado el escudero`)
})

client.on("message", async function(message) {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)){
        const command = message.content
            .slice(prefix.length)
            .split(' ')
            .shift()
            .toLowerCase();  
        if (!commandList.includes(command)) return;
        const msg = message
        message.delete(this.message)
        await msg.author.send(questsReq(command))
    }
    if (!commandList.includes(message.content)) return;
    const msg = message
    message.delete(this.message)
    await msg.author.send(questsReq(command))
    await msg.reply(questsReq(command))

});

client.login(config.BOT_TOKEN, {autorun: true});