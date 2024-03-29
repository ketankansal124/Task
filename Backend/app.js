const express = require("express");
const app = express();
const { connect } = require("./config/Database");


require("dotenv").config();
const cors = require('cors');

const submissionRoutes=require("./routes/Submission");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());

app.use(
    cors({
        origin: "https://melodious-heliotrope-373196.netlify.app/",
        credentials: true,
    })
)

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.use("/TUF/v1",submissionRoutes)

const start = async () => {
    try {
        await connect(MONGO_URL);
        app.listen(PORT, () => {
            console.log("Server is listening at " + PORT);
        });
    } catch (error) {
        console.error("Error starting the server:", error.message);
    }
};

start();
