import { ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder } from "discord.js";
import { db } from "../../Database/index.js";

export async function PTicket({ interaction }) {
    const MainEmbed = new EmbedBuilder()
        .setTitle(db.get("Ticket.Tilte") || "Support")
        .setDescription(db.get("Ticket.Description") || `-# Bem-vindo ao nosso sistema de suporte! Aqui você pode abrir um ticket para falar com a equipe responsável. Antes de abrir, leia com atenção:

\`✅\` Quando abrir um ticket?
- Para dúvidas importantes relacionadas ao servidor.
- Para relatar problemas técnicos ou bugs.
- Para solicitar ajuda em situações específicas.

\`❌\` O que evitar:
- Criar tickets sem um motivo válido.
- Abrir tickets apenas para brincadeiras ou conversas informais.
- Abrir vários tickets para o mesmo assunto.

\`🕒\` Horário de atendimento:
-# De segunda a sábado, das 08:00 às 23:00.

\`⚠️\` Tickets criados fora desse horário serão respondidos no próximo período útil.`)
        .setColor(db.get("Ticket.Color") || "Aqua")
        .setThumbnail(db.get("Ticket.Miniatura") || `${interaction.guild.iconURL()}`)

    const MainRow = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("SelectMenu.PTicket")
                .setOptions(
                    {
                        label: "Support", value: "SelectMenu.String.PTicket.Support"
                    },
                    {
                        label: "Dúvida", value: "SelectMenu.String.PTicket.Dúvida"
                    },
                    {
                        label: "Denúncia", value: "SelectMenu.String.PTicket.Denúncia"
                    },
                )
        )
    return { embeds: [MainEmbed], components: [MainRow] }
}