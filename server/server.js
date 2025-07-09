const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes (we'll define them next)
app.use("/api/projects", require("./routes/projects"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/subscribers", require("./routes/subscribers"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
