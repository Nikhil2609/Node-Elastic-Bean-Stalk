import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log("API request", req, res);
    res.send("Hello World from Elastic BeanStalk, Using CI CD 123");
})

app.listen(PORT, () => { console.log("Server Running on Port =>",PORT) })
