
const fs = require("node:fs");
const path = require("node:path");

const logsPath = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);

    files.forEach((file) => {
        console.log("Deleting file: " + file);
        fs.unlinkSync(path.join(logsPath, file));
    });

    fs.rmdirSync(logsPath);
} else {
    console.log("Logs directory does not exist");
}