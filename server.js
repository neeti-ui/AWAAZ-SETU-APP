// server.js - Zero-dependency local dev server for Awaaz Setu
// Compatible with Node.js 18+ built-in modules.

const http = require("http");
const fs = require("fs");
const path = require("path");

// Simple .env parser without external dependencies
try {
  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    envContent.split("\n").forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#")) {
        const [k, ...v] = trimmed.split("=");
        if (k && v.length) {
          process.env[k.trim()] = v.join("=").trim().replace(/(^['"]|['"]$)/g, "");
        }
      }
    });
    console.log("Loaded environment variables from .env");
  }
} catch (e) {
  // Ignore env read error
}

const analyzeHandler = require("./api/analyze.js");
const briefHandler = require("./api/brief.js");

const PORT = process.env.PORT || 3000;

function enhanceResponse(res) {
  res.status = function (statusCode) {
    res.statusCode = statusCode;
    return res;
  };
  res.json = function (data) {
    if (!res.getHeader("Content-Type")) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
    }
    res.end(JSON.stringify(data));
    return res;
  };
  return res;
}

const server = http.createServer(async (req, res) => {
  enhanceResponse(res);

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = parsedUrl.pathname;

  // Read request body for POST
  let bodyData = "";
  req.on("data", chunk => {
    bodyData += chunk;
  });

  req.on("end", async () => {
    if (bodyData) {
      try {
        req.body = JSON.parse(bodyData);
      } catch (err) {
        req.body = bodyData;
      }
    } else {
      req.body = {};
    }

    // Route handling
    if (pathname === "/api/analyze" || pathname === "/api/analyze.js") {
      return analyzeHandler(req, res);
    }

    if (pathname === "/api/brief" || pathname === "/api/brief.js") {
      return briefHandler(req, res);
    }

    // Serve index.html for root or frontend
    if (pathname === "/" || pathname === "/index.html") {
      const indexPath = path.join(__dirname, "index.html");
      if (fs.existsSync(indexPath)) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        return fs.createReadStream(indexPath).pipe(res);
      } else {
        return res.status(404).json({ error: "index.html not found" });
      }
    }

    // Attempt static file serving
    const safePath = path.normalize(path.join(__dirname, pathname));
    if (safePath.startsWith(__dirname) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
      const ext = path.extname(safePath).toLowerCase();
      const mimeTypes = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".svg": "image/svg+xml"
      };
      res.setHeader("Content-Type", mimeTypes[ext] || "text/plain");
      return fs.createReadStream(safePath).pipe(res);
    }

    // Default fallback to index.html
    const indexPath = path.join(__dirname, "index.html");
    if (fs.existsSync(indexPath)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return fs.createReadStream(indexPath).pipe(res);
    }

    return res.status(404).json({ error: "Route not found" });
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Awaaz Setu Prototype Server Running`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🔑 Gemini API Key: ${process.env.GEMINI_API_KEY ? "CONFIGURED (Active)" : "NOT SET (Offline Engine Active)"}`);
  console.log(`🧠 Gemini Model: ${process.env.GEMINI_MODEL || "gemini-2.5-flash"}`);
  console.log(`=======================================================`);
});
