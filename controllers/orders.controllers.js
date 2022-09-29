import {Router} from 'express';
import {findOrder} from '../services/orders.service.js';

const router = Router();

router.get('/orders', async (req, res) => {
    const order = parseInt(req.query.orderNo);
    if (order === undefined) {
        res.status(400).json({"message": "Please pass a valid order Number"});
    }
    const retVal = await findOrder(order);111
    res.send(retVal);
});

export default router;