export default {
    name: "interactionCreate",
    async run(interaction, client) {
        if (interaction.isCommand()) {
            const cmd = client.SlashCommands.get(interaction.commandName);

            if (!cmd) return await interaction.reply({ flags: false, content: 'Este comando não existe!'});

            if (interaction.guild && !interaction.member) {
                interaction.member = await interaction.guild.members.fetch(interaction.user.id);
            }
            try {
                cmd.run(client, interaction);
            } catch (err) {
                console.log(err);
            }
        }

    }
}