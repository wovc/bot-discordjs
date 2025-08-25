import { ActionRowBuilder, ButtonBuilder, ChannelSelectMenuBuilder, ChannelType, EmbedBuilder } from "discord.js"

export async function PEntrada({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`-# Bem-vindo à área de configuração dos logs de entrada!
-# Aqui você poderá escolher em qual canal o bot vai registrar todas as vezes que um novo membro entrar no servidor. Isso é extremamente útil para manter o controle de quem está chegando, organizar a comunidade e até identificar possíveis contas suspeitas.

\`🔽\` Como funciona?
-# Logo abaixo você encontrará um menu de seleção de canais. Basta escolher o canal desejado e o bot vai automaticamente salvar essa configuração. A partir desse momento, sempre que alguém entrar no servidor, o bot enviará uma mensagem nesse canal, informando:

\`👤\` O nome e a tag do usuário que entrou
\`🆔\` O ID da conta
\`⏰\` A data e o horário da entrada

\`⚙️\` Dicas importantes:

-# É recomendado criar um canal exclusivo apenas para os logs de entrada, para não poluir os canais de conversa do servidor.
-# Você pode editar essa configuração sempre que quiser, basta retornar a este painel.
-# Combine este recurso com outros sistemas de logs (como saída ou invites) para ter um painel completo de monitoramento.

\`🚀\` Agora é só selecionar o canal no menu abaixo e deixar que o bot faça o trabalho por vo`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const Action = new ActionRowBuilder()
        .addComponents(
            new ChannelSelectMenuBuilder()
                .setCustomId("Channel.Logs.Entrada")
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