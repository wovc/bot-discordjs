import { join, dirname } from "path";
import { readdirSync, statSync } from "fs";
import { fileURLToPath } from "url";
import { Collection } from "discord.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function loadCommands(client) {
    const commandsPath = join(__dirname, "..", "Commands");

    const commands = [];
    client.SlashCommands = new Collection();
    async function loadFromDir(dirPath) {
        const entries = readdirSync(dirPath);

        for (const entry of entries) {
            const fullPath = join(dirPath, entry);
            const stats = statSync(fullPath);

            if (stats.isDirectory()) {
                await loadFromDir(fullPath); // recursão
            } else if (entry.endsWith(".js")) {
                try {
                    const module = await import(`file://${fullPath}`);
                    const command = module.default || module;

                    if (!command?.name || !command?.run) {
                        console.warn(`\x1b[31m[WARN]\x1b[0m O comando ${entry} está com falha`);
                        continue;
                    }

                    client.SlashCommands.set(command.name, command);
                    commands.push(command);
                } catch (err) {
                    console.error(`Erro ao carregar comando ${entry}:`, err);
                }
            }
        }
    }

    await loadFromDir(commandsPath);

    client.on('ready', async () => {
        client.guilds.cache.forEach(async guild => {
            await guild.commands.set(commands).then();
        });
    });

    client.on('guildCreate', async (guild) => {
        await guild.commands.set(commands).then();
    });
}
