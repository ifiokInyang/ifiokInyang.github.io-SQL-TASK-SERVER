import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import PollingUnitRoutes from "./routes/router.js"
dotenv.config();



const app = express()

app.use(cors({ origin: "*" }));
app.use(logger("dev"));
app.use(express.json());
app.use("/polling-unit", PollingUnitRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "api is running"
    })
})

//database configuration

const PORT = process.env.PORT || 4000

const server = async() => {
    try {
        
        // await dbConfig()
    
         app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
.on("error", (err) => {
    console.log(err)
    process.exit(1)
})
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

server();
