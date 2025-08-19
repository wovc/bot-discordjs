import { PCheck, PConfigsChannels, PDefinitions, PEntrada, PHome, PInvite, PSaida } from "#functions";
import { db } from "../../Database/index.js";

export default {
    name: "interactionCreate",
    async run(interaction) {
        if (interaction.isButton) {
            const customId = interaction.customId

            if (customId == "Button.PHome.IniciarSystem") {
                const joao = db.get('Configs.LogsTicket');
                db.set('Configs.LogsTicket', !joao);
                const functiona = await PHome({ interaction });

                await interaction.update({ embeds: functiona.embeds, components: functiona.components });
                await interaction.followUp({ ephemeral: true, content: `Sistema de logs ${joao ? 'desligado' : 'ligado'}` });
            }
            if (customId == "Button.PHome.Definitions") {
                const joao = await PDefinitions({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.PHome") {
                const joao = await PHome({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Config.Channels") {
                const joao = await PConfigsChannels({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Voltar.PDefinitions") {
                const joao = await PDefinitions({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Config.Moderacao") {
                interaction.reply({ flags: ["Ephemeral"], content: "Ainda em desenvolvimento" });
            }
            if (customId == "Button.Logs.Entrada") {
                const joao = await PEntrada({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Voltar.ConfigChannels") {
                const joao = await PConfigsChannels({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Logs.Invite") {
                const joao = await PInvite({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Logs.Saida") {
                const joao = await PSaida({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Logs.Check") {
                const joao = await PCheck({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.Voltar.ResetPanel") {
                const joao = await PCheck({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
        }
    }
}