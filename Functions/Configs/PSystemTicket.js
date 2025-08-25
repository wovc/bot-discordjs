import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"

export async function PSystemTicket({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`-# Bem-vindo ao painel de configuração de tickets!
- Aqui você pode personalizar todo o sistema de tickets do servidor de forma simples e rápida.

\`⚙️\` O que você pode configurar:
- Canal principal: Defina onde os tickets serão abertos.
- Categorias: Organize os tickets em categorias específicas (ex: Suporte, Denúncias, Compras, etc.).
- Cargos responsáveis: Escolha quais cargos poderão visualizar e responder os tickets.
- Mensagens automáticas: Personalize a mensagem de boas-vindas dentro do ticket.

-# \`🛠️\` Logs: Configure um canal para registrar todas as ações de tickets (abertura, fechamento, exclusão).

\`📌\` Observações:
- Apenas administradores ou cargos com permissão poderão alterar essas configurações.
- Todas as alterações são salvas automaticamente e aplicadas em tempo real.
- Mantenha as configurações organizadas para garantir um suporte rápido e eficiente no servidor.`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const MainAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.PSystem.Title")
                .setStyle(2)
                .setEmoji("🔍")
                .setLabel("Title"),

            new ButtonBuilder()
                .setCustomId("Button.PSystem.Description")
                .setStyle(2)
                .setEmoji("🔍")
                .setLabel("Description"),

            new ButtonBuilder()
                .setCustomId("Button.PSystem.Color")
                .setStyle(2)
                .setEmoji("🔍")
                .setLabel("Color")
        )
    const TwoAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.PSystem.Miniatura")
                .setStyle(2)
                .setEmoji("🔍")
                .setLabel("Miniatura"),

            new ButtonBuilder()
                .setCustomId("Button.Voltar.PDefinitions")
                .setStyle(2)
                .setEmoji("<:seta:1406041009711747162>")
                .setLabel("Voltar")
        )
    return { embeds: [MainEmbed], components: [MainAction, TwoAction] }
}