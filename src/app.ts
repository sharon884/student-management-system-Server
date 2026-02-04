import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.routes";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// student routes
app.use("/api/students", studentRoutes);

export default app;
