export default {
    name: "ping",
    description: "Veja minha latencia",
    async run(client, interaction) {
        interaction.reply({ flags: ["Ephemeral"], content: `Olá, ${interaction.user} 👋\n meu ping esta em ${client.ws.ping}` })
    }
}