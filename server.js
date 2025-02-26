const app = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`Natours App is running on port ${port}`);
});