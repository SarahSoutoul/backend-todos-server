// Launching the server
// Loads the environment variables into the code
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = require("./app")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
