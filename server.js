import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Resolve the directory name for the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

// Route all traffic to React's index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
