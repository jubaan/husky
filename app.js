const createError = require("http-errors");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const res = require("express/lib/response");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  methodOverride(
    function (req, res) {
      if (req.body && typeof req.body === "object" && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
      }
    },
    {
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    }
  )
);
app.use(fileUpload());
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/models", productsRouter);
app.use("/model", productsRouter);
app.use("/cart", cartRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { title: "404 Page Not Found" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
