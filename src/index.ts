import express, { Request, Response } from "express";
const app = express();

// require("dotenv").config();

import connectDB from "./loaders/db";
import routes from "./routes";

const cors = require("cors");

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(routes); //라우터
// error handler

interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(process.env.PORT, () => {
    console.log(`
    ################################################
        🛡️  Server listening on port ${process.env.PORT} 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
