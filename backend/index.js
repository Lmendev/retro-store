const app = require("./app");
require("./src/conexDB/conn");

app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en puerto ${app.get("port")}`);
});
