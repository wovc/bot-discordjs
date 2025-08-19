import { EmbedBuilder } from "discord.js";
import { db } from "../../Database/index.js";

export default {
    name: "guildMemberAdd",
    async run(member) {
        const channel = member.guild.channels.cache.get(db.get("Channels.ChannelEntrada"));
        const accountCreation = member.user.createdAt;
        const accountCreationString = accountCreation.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

        const MainEmbed = new EmbedBuilder()
            .setTitle(`Bem-vindo(a) a ${member.guild.name}!`)
            .setThumbnail(member.guild.iconURL({ dynamic: true }))
            .setDescription(
                `\`🛠️\` **ID do usuário:** ${member.user.id}\n` +
                `\`🔍\` **Display-Name do usuário:** ${member.user}\n` +
                `\`💻\` **Username:** ${member.user.username}\n` +
                `\`💼\` **Conta criada em:** ${accountCreationString}`
    )
            .setTimestamp();

        channel.send({ embeds: [MainEmbed] })
    }
}