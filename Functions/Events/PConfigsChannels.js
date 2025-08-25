import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"

export async function PConfigsChannels({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`## ⚙️ Painel de Configuração de Canais
\`📥\` Logs de Entrada
- Saiba exatamente quem entrou no servidor e por qual link de convite a pessoa chegou. Isso ajuda a monitorar o crescimento da comunidade e identificar de onde vêm os novos membros.

\`📓\` Logs de Convites
- Acompanhe todas as alterações nos convites: quando um é criado, excluído ou utilizado. Assim você mantém controle total sobre como as pessoas chegam até o servidor.

\`🚪\` Logs de Saída
- Fique informado(a) sempre que alguém sair do servidor. É útil para entender a movimentação dos membros e manter o histórico do servidor sempre atualizado.

\`💡\` Dica: Configure esses canais em locais separados para não poluir o chat principal. Assim, você terá um histórico organizado, acessível apenas para a equipe de moderação.`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const MainAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.Logs.Entrada")
                .setStyle(2)
                .setLabel("Logs Entrada")
                .setEmoji("<:entry:1406257257662120026>"),

            new ButtonBuilder()
                .setCustomId("Button.Logs.Invite")
                .setStyle(2)
                .setLabel("Logs Invite")
                .setEmoji("<:invitation:1406258062561378304>"),

            new ButtonBuilder()
                .setCustomId("Button.Logs.Saida")
                .setStyle(2)
                .setLabel("Logs Saída")
                .setEmoji("<:exit:1406258374454022154>")

        )
    const TwoAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.Logs.Check")
                .setStyle(2)
                .setLabel("Logs Check")
                .setEmoji("<:check1:1406396305747476520>"),

            new ButtonBuilder()
                .setCustomId("Button.Voltar.PDefinitions")
                .setStyle(2)
                .setEmoji("<:seta:1406041009711747162>")
                .setLabel("Voltar")
        )
    return { embeds: [MainEmbed], components: [MainAction, TwoAction] }
}