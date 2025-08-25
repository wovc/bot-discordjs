import { db } from "../../Database/index.js";

export default {
    name: "interactionCreate",
    async run(interaction) {
        if (interaction.isModalSubmit()) {
            const customId = interaction.customId;

            if (customId == "Modal.System.Description") {
                const valueText = interaction.fields.getTextInputValue("Primary.Text");
                db.set("Ticket.Description", valueText);

                interaction.reply({ flags: ["Ephemeral"], content: "\`🛠️\` | Descrição adicionada com sucesso!" });
            }

            if (customId == "Modal.System.Tilte") {
                const valueText = interaction.fields.getTextInputValue("Secondary.Text")
                db.set("Ticket.Title", valueText)

                interaction.reply({ flags: ["Ephemeral"], content: "\`🛠️\` | Titulo adicionado com sucesso!" });
            }

            if (customId == "Modal.System.Color") {
                const valueText = interaction.fields.getTextInputValue("three.Text")
                db.set("Ticket.Cor", valueText)

                interaction.reply({ flags: ["Ephemeral"], content: "\`🛠️\` | Cor adicionada com sucesso!" });
            }
            if (customId == "Modal.System.Miniatura") {
                const valueText = interaction.fields.getTextInputValue("three.Text")
                db.set("Ticket.Miniatura", valueText)

                interaction.reply({ flags: ["Ephemeral"], content: "\`🛠️\` | Miniatura adicionada com sucesso!" });
            }
        }
    }
}