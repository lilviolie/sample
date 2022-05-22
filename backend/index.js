const express = require("express");

const PORT = 8000;

const app = express();

app.use("/users", require("./controller/user"));

app.all("*", (req, res) => {
    res.status(404).send(gc("Such endpoint does not exists."));
});

app.listen(PORT, () => {
    console.log(`Server opened at port ${PORT}.`);
});
