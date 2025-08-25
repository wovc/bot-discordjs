import { readdirSync, statSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getJsFiles(dir) {
    const results = [];

    for (const entry of readdirSync(dir)) {
        const fullPath = join(dir, entry);
        const stats = statSync(fullPath);

        if (stats.isDirectory()) {
            results.push(...getJsFiles(fullPath));
        } else if (stats.isFile() && entry.endsWith(".js")) {
            results.push(fullPath);
        }
    }

    return results;
}

export async function loadEvents(client) {
    const eventsDir = join(__dirname, "..", "Services");
    const files = getJsFiles(eventsDir);

    for (const file of files) {
        const fileUrl = pathToFileURL(file).href;

        try {
            const module = await import(fileUrl);
            const event = module.default || module;

            if (!event?.name || typeof event.run !== "function") {
                console.warn(`⚠️ Evento inválido: ${relative(eventsDir, file)}`);
                continue;
            }

            if (event.once) {
                client.once(event.name, (...args) => event.run(...args, client));
            } else {
                client.on(event.name, (...args) => event.run(...args, client));
            }
        } catch (err) {
            console.error(`❌ Erro ao carregar evento: ${relative(eventsDir, file)}`);
            console.error(err);
        }
    }
}
