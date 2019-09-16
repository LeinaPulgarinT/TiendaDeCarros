const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Initializations
const app = express();
require("./db");

// settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.use("/api/clientes", require("./routes/clientes"));
app.use("/api/carros", require("./routes/carros"));
app.use("/api/compras", require("./routes/compras"));
// start the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
