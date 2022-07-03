const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "FrontEnd", "static")));
app.get("/*", (requests, response) => {
    response.sendFile(path.resolve(__dirname, "FrontEnd", "index.html"));
});
app.listen(process.env.PORT || 6880, () => console.log("Server Running...."));