const { SlashCommandBuilder } = require('discord.js');
const { SISTEMA } = require('../../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sistema')
		.setDescription('Responde el vínculo a archivo "Sistema"'),
	execute(interaction) {
		interaction.reply(SISTEMA);
	},
};