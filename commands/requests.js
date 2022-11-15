const { urlList, commands } = require("../misc/consts")
const { embedReq, listsReq } = require("./functions")
const commandList = commands.map(e=>e.cmd);
async function questsReq(reQuest, msg){
    if ( reQuest === "[escudero]") return await listsReq(`Esta es la lista de Comandos: `, commandList)
    if ( reQuest === "[quests]") return `${msg.author.username}, esta es tu lista de Quests: `
    if ( reQuest === "[sistema]") return await embedReq("[Sistema Ainulindalë]", msg, urlList.sistema)
}
module.exports = {
    questsReq
}