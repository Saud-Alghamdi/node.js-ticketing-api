const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");

// Parse json body
app.use(express.json());

app.use("/api", userRoutes);

app.listen(port, () => console.log(`Listening to request on port ${port}`));
