import express from "express";
import { PORT } from "./config/constants.js";
import { baseURL } from "./routes/baseurl.js";
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

const app = express();

// accept json data
app.use(express.json());

app.use(`${baseURL}/users`, userRoutes);
app.use(`${baseURL}/auth`, authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
