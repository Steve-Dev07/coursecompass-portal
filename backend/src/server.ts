import { configDotenv } from "dotenv";
import app from "./app.js";

configDotenv();

const PORT = process.env.SERVER_PORT ?? "3000";

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
