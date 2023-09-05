const { SlashCommandBuilder } = require('discord.js');
const { BARDOS } = require('../../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bardos')
		.setDescription('Retorna una lista de Bardos'),
	async execute(interaction) {
    try {
      await interaction.reply(`Esta es la lista actual de Bardos: ${BARDOS}`, { ephemeral: true });
    } catch (error) {
      return error;
    }
	},
};