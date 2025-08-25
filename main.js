import { Client, GatewayIntentBits, Partials } from "discord.js";
import "dotenv/config";
import { loadEvents } from "./discord/LoadEvents.js";
import { loadCommands } from "./discord/LoadCommands.js";

const client = new Client({
    intents: Object.values(GatewayIntentBits),
    partials: Object.values(Partials)
});

loadEvents(client);
loadCommands(client);

client.login(process.env.TOKEN);

export default client;