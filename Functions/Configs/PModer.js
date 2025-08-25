import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"

export async function PModer({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`-# Bem-vindo(a) ao painel de moderação do servidor! Aqui você tem acesso rápido às principais ferramentas para manter a ordem e segurança da comunidade.

\`🔨\` Banir membros
-# Remova membros que violam regras graves. Use com responsabilidade!

\`👢\` Expulsar membros
-# Expulse usuários temporariamente do servidor sem banir.

\`🔇\` Silenciar / \`🔈\` Desmutar
-# Controle quem pode enviar mensagens nos canais de texto ou falar em voz.

\`🧹\` Limpar mensagens
-# Apague mensagens antigas de canais para manter o chat organizado.

\`⚠️\` Lembre-se:
-# Todas as ações devem ser usadas de forma responsável. O registro de moderação é salvo e pode ser consultado pelos administradores.`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const MainAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.Voltar.PDefinitions")
                .setStyle(2)
                .setEmoji("<:seta:1406041009711747162>")
                .setLabel("Voltar")
        )
    return { embeds: [MainEmbed], components: [MainAction] }
}