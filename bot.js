const { Client, LocalAuth } = require("whatsapp-web.js");
const fs = require("fs");

/* Creando un nuevo cliente con el ID de cliente "client-takane" */
const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-takane" }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

/* Está cargando todos los eventos en la carpeta de eventos. */
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(
    event.name,
    async (...args) => await event.execute(...args, client)
  );
}

/* Está cargando todos los comandos en la carpeta de comandos. */

client.commands = new Map();

const commandFolders = fs.readdirSync("./commands");

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

/* Es un detector de la señal SIGINT, que se envía cuando el usuario presiona Ctrl+C. */
process.on("SIGINT", async () => {
  console.log("(SIGINT) Shutting down...");
  await client.destroy();
  process.exit(0);
});

/* Inicializando el cliente. */
client.initialize();
