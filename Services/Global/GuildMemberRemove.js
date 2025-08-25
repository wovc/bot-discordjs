import { EmbedBuilder } from "discord.js";
import { db } from "../../Database/index.js";

export default {
    name: "guildMemberRemove",
    async run(member) {
        const channel = member.guild.channels.cache.get(db.get("Channels.ChannelSaida"));
        const accountCreation = member.user.createdAt;
        const accountCreationString = accountCreation.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

        const MainEmbed = new EmbedBuilder()
            .setTitle(`O ${member.name}(a) saiu do ${member.guild.name}!`)
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