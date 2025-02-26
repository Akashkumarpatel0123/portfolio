const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// ✅ Handle direct routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "public", "about.html")));
app.get("/projects", (req, res) => res.sendFile(path.join(__dirname, "public", "projects.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "public", "contact.html")));

// ✅ Catch-all route (for debugging)
app.use((req, res) => {
    res.status(404).send("Page Not Found: " + req.url);
});

// ✅ Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
