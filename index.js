const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "q-";

client.on('ready', ()=>{
    var generalChannel = client.channels.cache.get("1038269083336052838")
    generalChannel.send("Bienvenidos a World of Gwerh")
})

client.on("message", async function(message) {
    if (message.author.bot) return;
    if (message.content === "escudero"){
        await message.author.send(`Esta es la lista de comandos`)
    }
    // if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "ainusys" || message.content === "ainusys") {
        const embedDatos = new Discord.MessageEmbed() 
        .setTitle("Este es su título, puede contener 256 caracteres")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(0x00AE86)
        .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
        .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL())
        .setImage(message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setURL("https://docs.google.com/spreadsheets/d/e/2PACX-1vQXjr-Ru-P6-__EqRLFSsRs0f3NBS7rgxeQSIFGZU7tMKHZoKkJbNK1Ju1bAVPqRYbqgTKdkILz9TWB/pubhtml")
        .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
        .addField("Campo en línea", "Debajo del campo en línea",  true)
        .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
        await message.reply({ embed: embedDatos })
    }
  });

client.login(config.BOT_TOKEN);