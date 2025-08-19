import { EmbedBuilder } from "discord.js";

export default {
    name: "teste",
    description: "adasd",
    async run(client, interaction) {
        const Account = interaction.user.createdAt;
        const AccountString = Account.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

        const MainEmbed = new EmbedBuilder()
            .setTitle(`Bem-vindo(a) a ${interaction.guild.name}`)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`\`🛠️\` **ID do usúario:** ${interaction.user.id}\n \`🔍\` **Display-Name do usúario:** ${interaction.user}\n \`💻\` **Nick-Name do usúario:** ${interaction.user.username}\n \`💼\` **Conta criada em:** ${AccountString} dias`)
            .setTimestamp();

        interaction.reply({ flags: ["Ephemeral"], embeds: [MainEmbed] })

    }
}