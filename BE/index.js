import * as dotenv from "dotenv";
import server from "./src/config/server.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = 3000;

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
