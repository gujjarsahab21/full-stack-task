const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const cors = require("cors");
app.use(cors({
  origin: "",
  credentials: true
}));
app.use(cors({ origin: "https://flipboard-app-frontend.onrender.com/" }));

// app.use(cors());
app.use(express.json());

app.use("/api/projects", require("./routes/projects"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/subscribers", require("./routes/subscribers"));
app.use("/api/upload", require("./routes/uploadRoute"));

//testing
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
