// app.js

const express = require('express');
const router = require('./src/routes/indexRoutes');

const app = express();

app.use("/api", router);

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

