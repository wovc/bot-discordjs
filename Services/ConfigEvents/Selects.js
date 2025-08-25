import { PConfigsChannels, PTicket } from "#functions";
import { db } from "../../Database/index.js";

export default {
    name: "interactionCreate",
    async run(interaction) {
        if (interaction.isChannelSelectMenu()) {
            const { customId } = interaction;

            if (customId == "Channel.Logs.Entrada") {
                const options = interaction.values[0];
                db.set("Channels.ChannelEntrada", options);

                try {
                    const joao = await PConfigsChannels({ interaction });
                    await interaction.update({ flags: ["Ephemeral"], content: "", embeds: joao.embeds, components: joao.components });
                    setTimeout(() => {
                        interaction.followUp({ flags: ["Ephemeral"], content: "Sucesso, canal setado com sucesso!" })
                    }, 1000)
                } catch (err) {
                    console.error(err)
                }
            }
            if (customId == "Channel.Logs.Invite") {
                const options = interaction.values[0];
                db.set("Channels.ChannelInvite", options);

                try {
                    const joao = await PConfigsChannels({ interaction });
                    await interaction.update({ flags: ["Ephemeral"], content: "", embeds: joao.embeds, components: joao.components });
                    setTimeout(() => {
                        interaction.followUp({ flags: ["Ephemeral"], content: "Sucesso, canal setado com sucesso!" });
                    }, 1000)
                } catch (err) {
                    console.error(err);
                }
            }
            if (customId == "Channel.Logs.Saida") {
                const options = interaction.values[0];
                db.set("Channels.ChannelSaida", options);

                try {
                    const joao = await PConfigsChannels({ interaction });
                    await interaction.update({ flags: ["Ephemeral"], content: "", embeds: joao.embeds, components: joao.components });
                    setTimeout(() => {
                        interaction.followUp({ flags: ["Ephemeral"], content: "Sucesso, canal setado com sucesso!" });
                    }, 0o500)
                } catch (err) {
                    console.error(err);
                }
            }
        }
        if (interaction.isStringSelectMenu() && interaction.customId == "SelectMenu.PTicket") {
            const customId = interaction.values[0];
            const joao = await PTicket({ interaction });

            if (customId == "SelectMenu.String.PTicket.Support") {
                await interaction.update({ embeds: joao.embeds, components: joao.components })
                interaction.followUp({ flags: ["Ephemeral"], content: "\`🛠️\` Ainda em desenvolvimento" });
            }
            if (customId == "SelectMenu.String.PTicket.Dúvida") {
                await interaction.update({ embeds: joao.embeds, components: joao.components })
                interaction.followUp({ flags: ["Ephemeral"], content: "\`🛠️\` Ainda em desenvolvimento" });
            }
            if (customId == "SelectMenu.String.PTicket.Denúncia") {
                await interaction.update({ embeds: joao.embeds, components: joao.components })
                interaction.followUp({ flags: ["Ephemeral"], content: "\`🛠️\` Ainda em desenvolvimento" });
            }
        }
    }
}