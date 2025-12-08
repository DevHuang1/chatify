import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

import cookieParser from "cookie-parser";
import helmet from "helmet";
import { ENV } from "./lib/env.js";
dotenv.config();
const app = express();
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(express.json()); // req.body
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

const __dirname = path.resolve();
//prefixed
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
const PORT = process.env.PORT || 3000;

//make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
