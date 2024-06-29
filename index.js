const express = require("express");
const app = express();
const PORT = 3000;
const { typeError } = require('./middlewares/errors')

app.use(express.json());

app.use("/producto", require("./routes/producto"));
app.use("/categoria", require("./routes/categoria"));
app.use("/pedido", require("./routes/pedido"));

app.use(typeError) //EJECUTAR MIDDLEWARE GESTION ERRORES


app.listen(PORT, () => console.log("Servidor levantado en el puerto " + PORT));
