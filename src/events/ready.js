const { Events } = require('discord.js');
const { guildCommands } = require('../deploy-commands');
const { GENERAL_CHANNEL } = require('../config');

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
    await guildCommands();
    const generalChannel = client.channels.cache.get(GENERAL_CHANNEL);
    generalChannel.send(`Ha llegado el escudero`);
  },
};