import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"

export async function PDefinitions({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`## Bem-vindo ao centro de controle do seu servidor! 🚀
\`📜\` Aqui você pode configurar canais de logs para acompanhar tudo o que acontece:

\`🚫\` Banimentos e silenciamentos
\`⚠️\` Advertências aplicadas
\`🗑️\` Mensagens excluídas ou editadas
\`👤\` Entradas e saídas de membros
\`🛠️\` Ações de moderação em geral

\`⚠️\` Importante: Apenas administradores e cargos autorizados podem acessar este painel.`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const MainAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.Config.Channels")
                .setLabel("Config Channels")
                .setEmoji("<:emojiChannels:1406040225137823744>")
                .setStyle(2),

            new ButtonBuilder()
                .setCustomId("Button.Config.Moderacao")
                .setLabel("Moderação")
                .setEmoji("<:moderator:1406065931536433192>")
                .setStyle(2),

            new ButtonBuilder()
                .setCustomId("Button.PHome")
                .setStyle(2)
                .setEmoji("<:seta:1406041009711747162>")
                .setLabel("Voltar")
        )
    return { embeds: [MainEmbed], components: [MainAction] }
}