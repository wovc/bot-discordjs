import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js";
import { db } from "../../Database/index.js";

export async function PCheck({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`\`🔍\` O que você verá neste painel:

\`📥\` Logs de Entrada → Canal onde o bot envia quando um novo membro entra.
\`📤\` Logs de Saída → Canal onde o bot registra quando alguém sai ou é removido.
\`🎟️\` Logs de Convites (Invites) → Canal que mostra por qual convite o usuário entrou.
\`⚒️\` Logs de Moderação → Canal destinado a punições, advertências e outras ações da staff.
\`⚙️\` Caso algum log não esteja configurado, o painel irá mostrar essa informação para que você possa corrigir.

\`🚀\` Dessa forma, você tem uma visão geral de todos os sistemas de logs do servidor em um só lugar, garantindo que nada passe despercebido.`)
        .addFields({ name: "\`📥\` Channel Entrada", value: `<#${db.get("Channels.ChannelEntrada")}>`, inline: true })
        .addFields({ name: "\`🎟️\` Channel Invite", value: `<#${db.get("Channels.ChannelInvite")}>`, inline: true })
        .addFields({ name: "\`👋\` Channel Saída", value: `<#${db.get("Channels.ChannelSaida")}>`, inline: true })
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();


    const Action = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.Voltar.ResetPanel")
                .setLabel("Reset Panel")
                .setEmoji("<:reset:1406570232243294279>")
                .setStyle(2),

            new ButtonBuilder()
                .setCustomId("Button.Voltar.ConfigChannels")
                .setLabel("Voltar")
                .setEmoji("<:seta:1406041009711747162>")
                .setStyle(2)
        )
    return { embeds: [MainEmbed], components: [Action] }
}