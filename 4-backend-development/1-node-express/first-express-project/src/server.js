// file that is the same, every time
// please do not memorize this
// please use an example
const { PORT = 8080 } = process.env;
// this is basically the same as
// import app from './app';
const app = require("./app.js");

app.listen(PORT, () => console.log(`listening on ${PORT}`));
