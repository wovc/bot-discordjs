import { ActionRowBuilder, ButtonBuilder, ChannelSelectMenuBuilder, ChannelType, EmbedBuilder } from "discord.js"

export async function PInvite({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`-# Aqui você pode configurar todo o sistema de convites do servidor!
-# Com ele, você terá um controle completo de quem convidou quem, ajudando na moderação, organização e até em eventos de recrutamento.

\`🔹\` O que você pode fazer aqui:
\`📊\` Ver e monitorar quantos convites cada membro gerou;
\`👥\` Saber quem convidou determinado usuário quando ele entrar;

\`⚙️\` Basta usar a opção abaixo para escolher onde os logs de invites serão enviados.
-# Assim, sempre que alguém entrar no servidor, você poderá saber quem trouxe essa pessoa!`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();
        
    const Action = new ActionRowBuilder()
        .addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId("Channel.Logs.Invite")
                .setPlaceholder("Selecione um canal")
                .setMaxValues(1)
                .setMinValues(1)
                .addChannelTypes(ChannelType.GuildText)

        )
    const TwoAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.Voltar.ConfigChannels")
                .setLabel("Voltar")
                .setEmoji("<:seta:1406041009711747162>")
                .setStyle(2)
        )
    return { embeds: [MainEmbed], components: [Action, TwoAction] }
}