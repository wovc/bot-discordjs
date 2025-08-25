import { PCheck, PConfigsChannels, PDefinitions, PEntrada, PHome, PInvite, PModer, PSaida, PSystemTicket } from "#functions";
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from "discord.js";
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
                const joao = await PModer({ interaction });
                interaction.update({ flags: ["Ephemeral"], embeds: joao.embeds, components: joao.components });
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
            if (customId == "Button.Config.Ticket") {
                const joao = await PSystemTicket({ interaction });
                interaction.update({ embeds: joao.embeds, components: joao.components });
            }
            if (customId == "Button.PSystem.Description") {
                const modal = new ModalBuilder()
                    .setCustomId('Modal.System.Description')
                    .setTitle('Description');

                const TextPrimary = new TextInputBuilder()
                    .setCustomId('Primary.Text')
                    .setLabel("Coloque sua descrição aqui!")
                    .setPlaceholder("Joãozinho(wovc) o melhor!")
                    .setStyle(2);

                const ActionRow = new ActionRowBuilder().addComponents(TextPrimary);

                modal.addComponents(ActionRow);
                await interaction.showModal(modal);
            }
            if (customId == "Button.PSystem.Title") {
                const modal = new ModalBuilder()
                    .setCustomId('Modal.System.Title')
                    .setTitle('Title');

                const TextPrimary = new TextInputBuilder()
                    .setCustomId('Secondary.Text')
                    .setLabel("Coloque seu titulo aqui!")
                    .setPlaceholder("Joãozinho(wovc) o melhor!")
                    .setStyle(2);

                const ActionRow = new ActionRowBuilder().addComponents(TextPrimary);

                modal.addComponents(ActionRow);
                await interaction.showModal(modal);
            }
            if (customId == "Button.PSystem.Color") {
                const modal = new ModalBuilder()
                    .setCustomId('Modal.System.Color')
                    .setTitle('Color');

                const TextPrimary = new TextInputBuilder()
                    .setCustomId('three.Text')
                    .setLabel("Coloque sua cor aqui!")
                    .setPlaceholder("Joãozinho(wovc) o melhor!")
                    .setStyle(2);

                const ActionRow = new ActionRowBuilder().addComponents(TextPrimary);

                modal.addComponents(ActionRow);
                await interaction.showModal(modal);
            }
            if (customId == "Button.PSystem.Miniatura") {
                const modal = new ModalBuilder()
                    .setCustomId('Modal.System.Miniatura')
                    .setTitle('Miniatura');

                const TextPrimary = new TextInputBuilder()
                    .setCustomId('four.Text')
                    .setLabel("Coloque o link da miniatura aqui!")
                    .setPlaceholder("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tiktok.com%2F%40telecine%2Fvideo%2F7463566152938261765&psig=AOvVaw0BZs6oy5gaTcnCY3lluRNp&ust=1756239169922000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjX-7Tjpo8DFQAAAAAdAAAAABAJ")
                    .setStyle(2);

                const ActionRow = new ActionRowBuilder().addComponents(TextPrimary);

                modal.addComponents(ActionRow);
                await interaction.showModal(modal);
            }
        }
    }
}