require('dotenv').config();
const { Client, GatewayIntentBits} = require("discord.js");
const { questsReq } = require("./commands/requests");
const { commands } = require("./misc/consts");
const { BOT_TOKEN } = require('./config');
const commandList = commands.map(e=>e.cmd);
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const questPrefix = "q- ";

client.on('ready', ()=>{
    const generalChannel = client.channels.cache.get("1038269083336052838")
    generalChannel.send(`Ha llegado el escudero`)
})

client.on("message", async function(message) {
    if (message.content === "[CLEAR]"){
        if(
            message.author.username === "worldofgwerh" &&
            message.author.discriminator==='3078' &&
            message.channel.type!=='dm'
            )
        return await message.channel.bulkDelete(100, true)
        else return await message.reply('No tienes los permisos para realizar esta acción');
    }
    if (message.author.bot) return;
    if (message.content.startsWith(questPrefix)){
        const command = message.content
            .slice(questPrefix.length)
            .split(' ')
            .shift()
            .toLowerCase()
        console.log(`${message.author.username}: ${message.content}`)
        if (!commandList.includes(command)) return;
        const msg = message
        message.delete(this.message)
        await msg.author.send(await questsReq(command, msg))
    }
    if (commandList.includes(message.content)){
        console.log(`${message.author.username}: ${message.content}`)
        const msg = message
        message.delete(this.message)
        await msg.reply(await questsReq(msg.content, msg))
    }
    else return;
});

client.login(BOT_TOKEN);