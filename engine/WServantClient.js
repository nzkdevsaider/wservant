const { Client } = require("whatsapp-web.js");

module.exports = class WServantClient extends Client {
  constructor(options) {
    super(options);

    this.configFile = require("./../config");
    this.utilityFile = require("./../utility");
    this.botStart = new Date();
    this.botOwner = this.configFile.owner;
    this.botAscii =
      " _       _______                             __ \n| |     / / ___/___  ______   ______ _____  / /_\n| | /| / /\\__ \\/ _ \\/ ___/ | / / __ `/ __ \\/ __/\n| |/ |/ /___/ /  __/ /   | |/ / /_/ / / / / /_  \n|__/|__//____/\\___/_/    |___/\\__,_/_/ /_/\\__/  ";
    this.CONSTANTS = require("./CONSTANTS");
  }

  /**
   * Registra un mensaje en la consola.
   * @param message - El mensaje que desea registrar.
   * @param type - El tipo de registro que desea mostrar.
   */
  log(message, type) {
    if (type === "error") {
      console.error(`[Error] ${message}`);
    } else if (type === "info") {
      console.info(`[INFO] ${message}`);
    } else if (!type) {
      console.log(`[LOG] ${message}`);
    }
  }

  /**
   * Comprueba si el usuario es el dueño del bot
   * @param user - El usuario que está tratando de usar el comando.
   * @returns un valor booleano.
   */
  isOwner(user) {
    let { owner } = this.configFile;
    if (user !== owner) {
      return false;
    } else {
      return true;
    }
  }
};
