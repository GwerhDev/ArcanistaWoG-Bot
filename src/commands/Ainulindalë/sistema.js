const { SlashCommandBuilder } = require('discord.js');
const { SISTEMA } = require('../../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sistema')
		.setDescription('Retorna el vínculo a archivo "Sistema"'),
	async execute(interaction) {
		try {
			await interaction.reply(SISTEMA);
		} catch (error) {
			return error;
		}
	},
};