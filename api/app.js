import express from "express";
import cors from "cors"; // Import CORS correctly
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

const app = express();

// CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Frontend origin
  credentials: true, // Allow credentials (cookies, auth headers)
};

app.use(cors(corsOptions)); // Use CORS with specified options
app.use(express.json()); // Parse JSON requests
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Start the server
app.listen(8800, () => {
  console.log("Server is running on port 8800!");
});
