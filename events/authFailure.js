/**
 * @file auth failure file event.
 * @author Sebastian Morales
 * @since 1.0.0
 */

module.exports = {
  name: "auth_failure",

  execute(msg) {
    console.error("Hubo un error de autenticación de la sesión.", msg);
  },
};
