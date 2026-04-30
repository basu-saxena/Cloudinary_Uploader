require("dotenv").config();
const { app } = require("./src/main");
const PORT = process.env.PORT;
// const { connectToDB } = require("./src/lib/database");

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
