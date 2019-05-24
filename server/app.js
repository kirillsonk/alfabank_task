const express = require('express');
const path = require('path');

class Application {
    constructor() {
        this.express = express();
        this.attachRoutes();
    }

    attachRoutes() {
        const app = this.express;

        app.post('/payment', (req, res) => {
            res.send(200)
        });
    }
}

module.exports = Application;