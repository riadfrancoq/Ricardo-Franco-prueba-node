import app from "./app.js";
import dbConfig from "./config/config.js";

const {PORT} = dbConfig;
app.listen(PORT, ()=> {
    console.log('Running on port', PORT);
});