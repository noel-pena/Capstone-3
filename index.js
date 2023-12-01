import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://programming-quotesapi.vercel.app/api/random");
        console.log(result.data);
        res.render("index.ejs", { quote: result.data.quote, author: result.data.author });
    } catch (error) {
        res.status(500);
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
