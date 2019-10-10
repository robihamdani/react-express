const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

// connect DB
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

// Serve Static Assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
