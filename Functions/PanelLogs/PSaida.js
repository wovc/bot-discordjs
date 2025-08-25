import { ActionRowBuilder, ButtonBuilder, ChannelSelectMenuBuilder, ChannelType, EmbedBuilder } from "discord.js"

export async function PSaida({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`-# Configure aqui todo o sistema de **logs de saída** do servidor!  
-# Com ele, você poderá acompanhar quem saiu, quando saiu e manter um histórico organizado para sua equipe de moderação.  

\`🔹\` O que você pode fazer aqui:  
\`👤\` Saber exatamente quem saiu do servidor
\`📅\` Registrar data e horário da saída  
\`🛡️\` Evitar confusões e manter a organização do servidor  
\`📊\` Ter um controle completo sobre a movimentação de membros  

\`⚙️\` Basta selecionar abaixo o canal onde as logs de saída serão enviados.  
-# Assim, sua staff estará sempre informada quando alguém deixar a comunidade!`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const MainAction = new ActionRowBuilder()
        .addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId("Channel.Logs.Saida")
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
    return { embeds: [MainEmbed], components: [MainAction, TwoAction] }
}