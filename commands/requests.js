require('dotenv').config();
const { SISTEMA } = process.env;
const { commands } = require("../misc/consts")
const { embedReq, listsReq} = require("./functions")
const commandList = commands.map(e=>e.cmd);
async function questsReq(reQuest, msg){
    if ( reQuest === "[ayuda]" ) return await listsReq(`Esta es la lista de Comandos: `, commandList.reverse())
    if ( reQuest === "[quests]" ) return `${msg.author.username}, esta es tu lista de Quests: `
    if ( reQuest === "[sistema]" ) return await embedReq("[Sistema Ainulindalë]", msg, SISTEMA)
}
module.exports = {
    questsReq
}