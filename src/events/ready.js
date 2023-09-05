const { Events } = require('discord.js');
const { guildCommands } = require('../deploy-commands');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
    await guildCommands();
    const generalChannel = client.channels.cache.get("1038269083336052838");
    generalChannel.send(`Ha llegado el escudero`);
  },
};