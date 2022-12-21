const call = require("../../import");
console.log("call index");
call.call2();
const index = express();

index.set("views", `${__dirname}/dist/`);
index.engine("html", require("ejs").renderFile);
index.set("view engine", "html");

index.use("/", express.static(`${__dirname}/dist`));

index.get("/", (req, res) => {
  res.render("index", {});
});

const server = app.listen(5500, () => {
  console.log("Express Listening on port: " + server.index);
});
