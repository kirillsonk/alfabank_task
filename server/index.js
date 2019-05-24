const Application = require('./app');

const app = new Application();
const port = 8080;
app.express.listen(port, () => {
    console.log(`Listening port ${port}`);
});
