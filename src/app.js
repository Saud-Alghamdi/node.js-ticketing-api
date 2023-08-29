const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

// Parse json body
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", ticketRoutes);

app.listen(port, () => console.log(`Listening to request on port ${port}`));
