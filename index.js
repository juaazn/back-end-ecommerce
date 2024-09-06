const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;
const { typeError } = require("./middlewares/errors");

app.use(express.json());


app.use(cors())


app.use("/usuario", require("./routes/usuario"));
app.use("/producto", require("./routes/producto"));
app.use("/categoria", require("./routes/categoria"));
app.use("/pedido", require("./routes/pedido"));

app.use(typeError); //EJECUTAR MIDDLEWARE GESTION ERRORES

app.listen(PORT, () => console.log("Servidor levantado en el puerto " + PORT));
