import { ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js"
import { db } from "../../Database/index.js";

export async function PHome({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setDescription(`## Bem-vindo(a) ao Settings Panel
\`🔧\` O que você pode fazer aqui:
- Ajustar prefixos ou comandos personalizados.
- Configurar canais de logs e mensagens automáticas.
- Definir permissões e cargos especiais.
- Ativar ou desativar recursos conforme sua necessidade.

\`💡\` Todas as alterações são salvas automaticamente e aplicadas em tempo real.

\`⚠️\` Importante: Apenas administradores e cargos autorizados podem acessar este painel.`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp();

    const MainAction = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Button.PHome.IniciarSystem")
                .setStyle(`${db.get('Configs.LogsTicket') ? 4 : 3}`)
                .setEmoji(`${db.get('Configs.LogsTicket') ? '1340617523879739443' : '1340617479545688075'}`)
                .setLabel(`${db.get('Configs.LogsTicket') ? 'Desligar Ticket' : 'Ligar Ticket'}`),

            new ButtonBuilder()
                .setCustomId("Button.PHome.Definitions")
                .setStyle(2)
                .setLabel("Definitions")
                .setEmoji("<:search:1406071321066213437>")
        )
    return { embeds: [MainEmbed], components: [MainAction] }
}