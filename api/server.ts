//import dotenv from "dotenv";
import express from "express";
import path from "path";
//import * as routes from "./routes";

// initialize configuration
//dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = 3000; //process.env.SERVER_PORT;

const app = express();

// Configure Express to parse JSON
app.use(express.json());

const frontendPath = path.join(__dirname, "public");
// Configure Express to serve static files in the public folder
app.use(express.static(frontendPath));

// Configure session auth
//sessionAuth.register(app);

// Configure routes
//routes.register(app);

// History mode routing fix
app.all("*", (_req, res) => {
    try {
        res.sendFile(frontendPath + '/index.html');
    } catch (error) {
        res.json({ success: false, message: "Something went wrong" });
    }
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});