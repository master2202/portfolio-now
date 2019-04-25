const express = require("express");
const app = express();
const history = require("connect-history-api-fallback");
const staticFileMiddleware = express.static("static");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailRoutes = require("./api/routes/send-nodemail");

// static file handle
app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);
app.use(staticFileMiddleware);

// configure app
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// routes which should handle requests
app.use("/", nodemailRoutes);

// errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log("<<RESPONSE:4>>");
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
