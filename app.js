const express = require('express');
const app = express();
const routes = require('./src/routes/indexRoutes');

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
