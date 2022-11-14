const Discord = require("discord.js");
const { urlList } = require("../misc/consts")


async function embedReq(title, msg, url){
    const embedDatos = new Discord.MessageEmbed()
        .setTitle(title)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL())
        .setColor(0xFFE100)
        // .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
        // .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL())
        // .setImage(msg.author.displayAvatarURL())
        // .setThumbnail(msg.author.displayAvatarURL())
        // .setTimestamp()
        .setURL(url)
    // .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
    // .addField("Campo en línea", "Debajo del campo en línea",  true)
    // .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    return { embed: embedDatos }
}
async function questsReq(reQuest, msg){
    if ( reQuest === `[escudero]`) return `Esta es la lista de comandos`
    if ( reQuest === `[quests]`) return `Esta es la lista de comandos`
    if ( reQuest === `[sistema]`) return await embedReq("[Sistema Ainulindalë]", msg, urlList.sistema)

}

module.exports = {
    embedReq,
    questsReq
}