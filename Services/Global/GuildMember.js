import { EmbedBuilder } from "discord.js";
import { db } from "../../Database/index.js";

const invitesCache = new Map();

export default {
    name: "guildMemberAdd",
    async run(member) {
        const guild = member.guild;
        const newInvites = await guild.invites.fetch();
        const oldInvites = invitesCache.get(guild.id);
        const usedInvite = newInvites.find(i => { const oldUses = oldInvites?.get(i.code)?.uses || 0; return i.uses > oldUses; });

        invitesCache.set(guild.id, new Map(newInvites.map(i => [i.code, i])));

        const channelEntrada = guild.channels.cache.get(db.get("Channels.ChannelEntrada"));
        const accountCreation = member.user.createdAt;
        const accountCreationString = accountCreation.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

        const EntradaEmbed = new EmbedBuilder()
            .setAuthor({ name: `✨ Novo membro entrou!`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setDescription(
                `👋 Bem-vindo(a) **${member.user}** a **${guild.name}**!\n\n` +
                `> 🛠️ **ID:** \`${member.user.id}\`\n` +
                `> 💻 **Username:** \`${member.user.username}\`\n` +
                `> 📅 **Conta criada em:** \`${accountCreationString}\``
            )
            .setFooter({ text: `Estamos agora com ${guild.memberCount} membros!` })
            .setTimestamp();

        if (channelEntrada) channelEntrada.send({ embeds: [EntradaEmbed] });
        
        const channelInvites = guild.channels.cache.get(db.get("Channels.ChannelInvite"));
        if (channelInvites) {
            const InviteEmbed = new EmbedBuilder()
                .setAuthor({ name: "📨 Log Invite", iconURL: guild.iconURL({ dynamic: true }) })
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setDescription( usedInvite ? `👤 **${member.user.tag}** entrou no servidor!\n\n` +
                          `> 🔗 **Convite usado:** \`${usedInvite.code}\`\n` +
                          `> ✍️ **Criado por:** ${usedInvite.inviter}\n` +
                          `> 🔢 **Usos atuais:** \`${usedInvite.uses}\``
                        : `❓ **${member.user.tag}** entrou, mas não foi possível identificar o convite usado.`
                )
                .setFooter({ text: `ID: ${member.user.id}` })
                .setTimestamp();

            channelInvites.send({ embeds: [InviteEmbed] });
        }
    }
};

export async function initInvites(client) {
    client.on("ready", async () => {
        client.guilds.cache.forEach(async guild => {
            const guildInvites = await guild.invites.fetch();
            invitesCache.set(guild.id, new Map(guildInvites.map(i => [i.code, i])));
        });
        console.log(`${client.user.tag} online ✅ | Invites cacheados!`);
    });
}