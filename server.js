const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Ensure Render uses process.env.PORT

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes for each page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "projects.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
