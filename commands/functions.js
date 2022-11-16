const Discord = require("discord.js");

async function menu(){
        const row = new  Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                .setCustomId("menu")
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Sistema Ainulindalë",
                        description: "Documento GoogleSheets",
                        value: "sistema",
                    }
                ])
            )
        const embed = new Discord.MessageEmbed()
            .setTitle(title)
            .setColor(0xFFE100)
        const m = await message.channel.send({ embeds: [embed], components: [row] })

        const ifilter = i => i.user.id === message.author.id;

        const collector = m.createMessageComponentCollector({ filter: ifilter })

        collector.on("collect", async i => {
            if(i.values[0] === "sistema"){
                await i.deferUpdate()
                i.editReply({ content: "s", conmponents: [] })
            }
        })

}



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

async function listsReq(res, list){
    const embedList = new Discord.MessageEmbed()
    .setTitle(res)
    .setColor(0xFFE100)
    for(i in list){
        embedList.addField(list[i].cmd, list[i].description)
    }
    return embedList
}


module.exports = {
    embedReq,
    listsReq,
    menu
}