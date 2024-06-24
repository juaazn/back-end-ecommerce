const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/producto", require("./routes/producto"));

app.listen(PORT, () => console.log("Servidor levantado en el puerto " + PORT));
