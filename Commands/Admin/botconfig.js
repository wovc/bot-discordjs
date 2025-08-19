import { PHome } from "#functions";
import { ApplicationCommandType } from "discord.js";

export default {
    name: "botconfig",
    description: "[🛠️] Set me up",
    type: ApplicationCommandType.ChatInput,
    async run(client, interaction) {
        if (!interaction.member.permissions.has("Administrator")) {
            return interaction.reply({ flags: ["Ephemeral"], content: "Apenas adminitradores podem usar esse comando" });
        }
        const joao = await PHome({ interaction });
        interaction.reply({ flags: ["Ephemeral"], embeds: joao.embeds, components: joao.components });
    }
}