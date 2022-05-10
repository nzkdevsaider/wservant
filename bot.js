const { Client, LocalAuth } = require("whatsapp-web.js");
const fs = require("fs");

/* Creando un nuevo cliente con el ID de cliente "client-takane" */
const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-takane" }),
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

/* Es un detector de la señal SIGINT, que se envía cuando el usuario presiona Ctrl+C. */
process.on("SIGINT", async () => {
  console.log("(SIGINT) Shutting down...");
  await client.destroy();
  process.exit(0);
});

/* Inicializando el cliente. */
client.initialize();
