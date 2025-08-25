import { PTicket } from "#functions";
import { ApplicationCommandType } from "discord.js";

export default {
    name: "ticket",
    description: "[🔍] Use to submit ticket panel",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "panel",
            type: 1,
            description: "[🔍] Use to submit ticket panel"
        }
    ],
    async run(client, interaction) {
        if (!interaction.member.permissions.has("Administrator")) {
            return interaction.reply({ flags: ["Ephemeral"], content: "\`📢\` | Apenas administradores podem usar esse comando" });
        }
        const joao = await PTicket({ interaction });
        interaction.reply({ embeds: joao.embeds, components: joao.components });
    }
}