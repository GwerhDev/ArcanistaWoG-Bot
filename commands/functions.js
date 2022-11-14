const Discord = require("discord.js");


async function embedReq(title){
    const embedDatos = new Discord.MessageEmbed()
    .setTitle(title)
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor(0xFFE100)
    // .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    // .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL())
    // .setImage(message.author.displayAvatarURL())
    // .setThumbnail(message.author.displayAvatarURL())
    // .setTimestamp()
    .setURL("https://docs.google.com/spreadsheets/d/e/2PACX-1vQXjr-Ru-P6-__EqRLFSsRs0f3NBS7rgxeQSIFGZU7tMKHZoKkJbNK1Ju1bAVPqRYbqgTKdkILz9TWB/pubhtml")
    // .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
    // .addField("Campo en línea", "Debajo del campo en línea",  true)
    // .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    return { embed: embedDatos }
}
async function questsReq(req){
    if ( req === `escudero`) return `Esta es la lista de comandos`
    if ( req === `quests`) return `Esta es la lista de comandos`
    if ( req === `sistema`) return embedReq("[Sistema Ainulindalë]")

}

module.exports = {
    embedReq,
    questsReq
}