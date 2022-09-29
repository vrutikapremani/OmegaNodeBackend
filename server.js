import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ordersRoute from "./controllers/orders.controllers.js";
const API_PREFIX = '/api';

const start = () => {

    const app = express();
    // CORS is set to wildcard for local development
    app.use(cors());
    app.use(bodyParser.json());
    app.use(API_PREFIX, ordersRoute);

    var port = process.env.PORT || 3000;
    app.listen(port, () =>
        console.log(`Orders API is running on port ${port}!`)
    );
};
start();